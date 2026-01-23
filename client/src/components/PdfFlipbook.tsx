import { useEffect, useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import pdfjsLib from "@/pdfWorker";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

type Props = {
  pdfUrl: string;
};

// Module-level cache to persist PDF pages across component unmounts/remounts
type PdfCacheEntry = {
  pages: string[];
  imageDimensions: { width: number; height: number } | null;
  timestamp: number;
};

const pdfCache = new Map<string, PdfCacheEntry>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour cache duration

export default function PdfFlipbook({ pdfUrl }: Props) {
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const flipBookRef = useRef<any>(null);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

  // Calculate optimal size based on viewport and image dimensions
  const calculateFlipbookSize = (imgDims: { width: number; height: number } | null) => {
    if (typeof window === "undefined") return { width: 700, height: 930 };
    
    const viewportWidth = window.innerWidth;
    let width: number;
    
    // Mobile: use smaller width for better readability
    if (viewportWidth < 640) {
      width = Math.min(Math.floor(viewportWidth * 0.85), 300);
    }
    // Tablet: use smaller width for better readability
    else if (viewportWidth < 1024) {
      width = Math.min(Math.floor(viewportWidth * 0.65), 500);
    }
    // Desktop: use 60% width with max constraints
    else {
      width = Math.min(Math.floor(viewportWidth * 0.6), 800);
    }
    
    // Calculate height based on actual image aspect ratio if available
    let height: number;
    if (imgDims && imgDims.width > 0) {
      const aspectRatio = imgDims.height / imgDims.width;
      height = Math.floor(width * aspectRatio);
    } else {
      // Fallback to 3:4 aspect ratio
      height = Math.floor(width * 1.33);
    }
    
    return { width, height };
  };

  const [flipbookSize, setFlipbookSize] = useState(() => calculateFlipbookSize(null));

  useEffect(() => {
    const handleResize = () => {
      setFlipbookSize(calculateFlipbookSize(imageDimensions));
    };

    // Update size when image dimensions change
    setFlipbookSize(calculateFlipbookSize(imageDimensions));

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imageDimensions]);

  useEffect(() => {
    let cancelled = false;

    const loadPdf = async () => {
      try {
        // Check cache first
        const cached = pdfCache.get(pdfUrl);
        const now = Date.now();
        
        if (cached && (now - cached.timestamp) < CACHE_DURATION) {
          // Use cached pages
          console.log("Loading PDF from cache:", pdfUrl);
          setPages(cached.pages);
          if (cached.imageDimensions) {
            setImageDimensions(cached.imageDimensions);
          } else if (cached.pages.length > 0) {
            // Load dimensions if not cached
            const img = new Image();
            img.onload = () => {
              const dims = { width: img.width, height: img.height };
              setImageDimensions(dims);
              // Update cache with dimensions
              pdfCache.set(pdfUrl, { ...cached, imageDimensions: dims });
            };
            img.src = cached.pages[0];
          }
          setLoading(false);
          return;
        }

        // Not in cache or expired, load from scratch
        setLoading(true);
        setError(null);
        setPages([]);
        console.log("Loading PDF from source:", pdfUrl);
        
        const pdf = await pdfjsLib.getDocument({ 
          url: pdfUrl,
          verbosity: 0 // Reduce console noise
        }).promise;
        console.log("PDF loaded, pages:", pdf.numPages);
        const images: string[] = [];

        // Calculate responsive scale based on screen size - reduced for better readability
        const getScale = () => {
          if (typeof window === "undefined") return 2;
          const width = window.innerWidth;
          if (width < 640) return 1.2; // Mobile - reduced from 1.5
          if (width < 1024) return 1.5; // Tablet - reduced from 2
          return 2.5; // Desktop - reduced from 3
        };

        for (let i = 1; i <= pdf.numPages; i++) {
          if (cancelled) return;
          
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: getScale() });

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvas, viewport }).promise;
          images.push(canvas.toDataURL("image/png"));
        }
        console.log("Rendered images:", images.length);

        if (!cancelled) {
          setPages(images);
          
          // Get image dimensions from first page to calculate proper aspect ratio
          let imageDims: { width: number; height: number } | null = null;
          if (images.length > 0) {
            const img = new Image();
            await new Promise<void>((resolve) => {
              img.onload = () => {
                imageDims = { width: img.width, height: img.height };
                setImageDimensions(imageDims);
                resolve();
              };
              img.onerror = () => resolve();
              img.src = images[0];
            });
          }
          
          // Cache the pages and dimensions
          pdfCache.set(pdfUrl, {
            pages: images,
            imageDimensions: imageDims,
            timestamp: Date.now()
          });
          console.log("PDF cached for future use");
        }
      } catch (err) {
        console.error("PDF load failed:", err);
        console.error("PDF URL attempted:", pdfUrl);
        if (err instanceof Error) {
          console.error("Error message:", err.message);
          console.error("Error stack:", err.stack);
        }
        if (!cancelled) {
          const errorMessage = err instanceof Error ? err.message : "Unknown error";
          setError(`Failed to load PDF file: ${errorMessage}`);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadPdf();

    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  /* ------------------ STATES ------------------ */

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-400 border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[70vh] text-red-600 font-medium">
        {error}
      </div>
    );
  }

  if (pages.length === 0) {
    return (
      <div className="flex items-center justify-center h-[70vh] text-slate-500">
        No pages to display
      </div>
    );
  }

  /* ------------------ FLIPBOOK ------------------ */

  const handleNext = () => {
    if (flipBookRef.current?.pageFlip) {
      // pageFlip is a function that returns the instance, so call it
      const pageFlipInstance = flipBookRef.current.pageFlip();
      
      if (pageFlipInstance) {
        // Try different method names
        if (typeof pageFlipInstance.flipNext === 'function') {
          pageFlipInstance.flipNext();
        } else if (typeof (pageFlipInstance as any).flipNext === 'function') {
          (pageFlipInstance as any).flipNext();
        } else if (typeof (pageFlipInstance as any).next === 'function') {
          (pageFlipInstance as any).next();
        } else {
          console.error("Could not find navigation method. Available methods:", Object.keys(pageFlipInstance || {}));
        }
      }
    }
  };

  const handlePrev = () => {
    if (flipBookRef.current?.pageFlip) {
      // pageFlip is a function that returns the instance, so call it
      const pageFlipInstance = flipBookRef.current.pageFlip();
      
      if (pageFlipInstance) {
        // Try different method names
        if (typeof pageFlipInstance.flipPrev === 'function') {
          pageFlipInstance.flipPrev();
        } else if (typeof (pageFlipInstance as any).flipPrev === 'function') {
          (pageFlipInstance as any).flipPrev();
        } else if (typeof (pageFlipInstance as any).prev === 'function') {
          (pageFlipInstance as any).prev();
        } else {
          console.error("Could not find navigation method. Available methods:", Object.keys(pageFlipInstance || {}));
        }
      }
    }
  };

  const handlePageChange = (e: { data: number }) => {
    setCurrentPage(e.data);
  };

  return (
    <div className="w-full py-4 sm:py-6 bg-background min-h-screen">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          {/* Title and Subtitle Section */}
          <div className="w-full text-center space-y-2 mb-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-primary tracking-tight">
              البرفايل التعريفي
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed px-4">
              كتيب تعريفي لشركة غازي محمد عباس للاستشارات الهندسية
            </p>
            <div className="h-1 w-12 sm:w-16 bg-primary rounded-full mx-auto mt-2 sm:mt-3" />
          </div>

          {/* Flipbook Container */}
          <div className="relative w-full flex justify-center items-center">
            <div 
              className="bg-card rounded-lg sm:rounded-xl border border-border shadow-lg p-0 flex items-center justify-center mx-auto"
              style={{ width: `${flipbookSize.width}px`, height: `${flipbookSize.height}px` }}
            >
              <HTMLFlipBook
                ref={flipBookRef}
                width={flipbookSize.width}
                height={flipbookSize.height}
                showCover
                mobileScrollSupport
                className="shadow-2xl"
                onFlip={handlePageChange}
              >
                  {pages.map((src, index) => (
                    <div
                      key={index}
                      className="w-full bg-white dark:bg-card rounded-xl overflow-hidden border border-border flex items-center justify-center p-2"
                      style={{ height: 'fit-content', minHeight: '100%' }}
                    >
                      <img
                        src={src}
                        alt={`Page ${index + 1}`}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </HTMLFlipBook>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full px-4">
            <Button
              variant="outline"
              size="default"
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="w-full sm:w-auto sm:min-w-[140px] gap-2 text-sm sm:text-base"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">الصفحة السابقة</span>
              <span className="sm:hidden">السابقة</span>
            </Button>

            {/* Page Indicator */}
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary rounded-lg border border-border">
              <span className="text-xs sm:text-sm font-medium text-foreground">
                {currentPage + 1} / {pages.length}
              </span>
            </div>

            <Button
              variant="default"
              size="default"
              onClick={handleNext}
              disabled={currentPage === pages.length - 1}
              className="w-full sm:w-auto sm:min-w-[140px] gap-2 text-sm sm:text-base"
            >
              <span className="hidden sm:inline">الصفحة التالية</span>
              <span className="sm:hidden">التالية</span>
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  ourWorksImages: string[];
};

export default function OurWorksCard({ ourWorksImages }: Props) {
  const [images, setImages] = useState(ourWorksImages);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [more, setMore] = useState(false);
  const openAt = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };
  const isMore = () => {
    if (!more) setImages(ourWorksImages.slice(0, 12));
    else setImages(ourWorksImages);
  };
  const close = () => setOpen(false);

  const prev = () =>
    setActiveIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex(i => (i + 1) % images.length);

  useEffect(() => {
    isMore();
  }, [more]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // Keyboard controls
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, images.length]);

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 transition-all">
        {images.map((img, index) => (
          <button
            key={`${img}-${index}`}
            type="button"
            onClick={() => openAt(index)}
            className="group relative overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label={`Open image ${index + 1}`}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />

            {/* HOVER OVERLAY */}
            <div
              className="
                absolute inset-0
                bg-white/60
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
              "
            />

            {/* CENTER ICON */}
            <div
              className="
                absolute inset-0 flex items-center justify-center
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              <span className="rounded-full bg-white/80 backdrop-blur px-4 py-4 shadow-lg">
                <Search className="h-6 w-6 text-black/80" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {!more && ourWorksImages.length > 12 && (
        <button
          className="btn-modern bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-2xl mx-auto block"
          onClick={() => {
            setMore(true);
          }}
        >
          تحميل المزيد
        </button>
      )}

      {/* LIGHTBOX MODAL */}
      {open && images.length > 0 && (
        <div
          className="fixed top-0 right-0 z-999 flex items-center justify-center bg-black/70 w-full h-full"
          role="dialog"
          aria-modal="true"
        >
          {/* CLOSE */}

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
            <button
              type="button"
              onClick={close}
              className="absolute flex top-5 right-5 z-1000 items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-white hover:bg-white/15 transition"
            >
              <X className="h-5 w-5" />
              Close
            </button>
            <img
              src={images[activeIndex]}
              alt=""
              className="max-h-[80vh] w-full object-contain"
              draggable={false}
            />

            {/* PREV / NEXT */}

            {/* COUNTER */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
              {activeIndex + 1} / {images.length}
            </div>
          </div>

          {/* Arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  prev();
                }}
                className="
                      absolute left-3 top-1/2 -translate-y-1/2
                      rounded-full bg-white/15 p-3 text-white
                      hover:bg-white/25 transition
                      focus:outline-none focus:ring-2 focus:ring-white/40
                    "
                aria-label="Previous image"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>

              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  next();
                }}
                className="
                      absolute right-3 top-1/2 -translate-y-1/2
                      rounded-full bg-white/15 p-3 text-white
                      hover:bg-white/25 transition
                      focus:outline-none focus:ring-2 focus:ring-white/40
                    "
                aria-label="Next image"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

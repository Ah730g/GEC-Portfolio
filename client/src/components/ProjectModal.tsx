import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  capabilityScope?: string;
  scope?: string;
  services: string[];
  typicalUseCases?: string[];
  typicalProjects?: string[];
  typicalScale?: string;
  valuePoints?: string[];
  highlights?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] mt-10 bg-background rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-primary/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-background/95 backdrop-blur-sm rounded-full text-foreground hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Two-column layout: Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Image */}
            <div className="relative h-64 lg:h-auto lg:min-h-[500px] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 order-2 lg:order-1">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:via-transparent lg:to-transparent" />
            </div>

            {/* Right Column - Content */}
            <div className="p-6 md:p-8 lg:p-10 space-y-8 order-1 lg:order-2">
              {/* Header */}
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight">
                  {project.title}
                </h2>
                <p className="text-lg text-foreground/70 font-medium leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Capability Scope */}
              {(project.capabilityScope || project.scope) && (
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary border-b-2 border-primary/20 pb-2">
                    نطاق الخدمة
                  </h3>
                  <p className="text-base text-foreground/80 leading-relaxed font-medium">
                    {project.capabilityScope || project.scope}
                  </p>
                </div>
              )}

              {/* Services */}
              {project.services && project.services.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary border-b-2 border-primary/20 pb-2">
                    الخدمات المقدمة
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <li
                        key={index}
                        className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg text-sm text-foreground font-medium hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Typical Scale */}
              {project.typicalScale && (
                <div className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                  <h3 className="text-sm font-bold text-foreground/60 uppercase tracking-wide">
                    النطاق النموذجي
                  </h3>
                  <p className="text-base font-semibold text-primary">
                    {project.typicalScale}
                  </p>
                </div>
              )}

              {/* Typical Use Cases / Projects */}
              {(project.typicalUseCases || project.typicalProjects) && (
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary border-b-2 border-primary/20 pb-2">
                    حالات الاستخدام النموذجية
                  </h3>
                  <ul className="space-y-2">
                    {(
                      project.typicalUseCases ||
                      project.typicalProjects ||
                      []
                    ).map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                        <span className="text-base font-medium leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Value Points / Highlights */}
              {(project.valuePoints || project.highlights) && (
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary border-b-2 border-primary/20 pb-2">
                    نقاط القيمة
                  </h3>
                  <ul className="space-y-2">
                    {(project.valuePoints || project.highlights || []).map(
                      (item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-foreground/80"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                          <span className="text-base font-medium leading-relaxed">
                            {item}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render modal into portal
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    console.error("Modal root element not found");
    return null;
  }

  return createPortal(modalContent, modalRoot);
}

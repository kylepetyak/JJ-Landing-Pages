"use client";

import { clsx } from "clsx";
import { Placeholder } from "@/components/Placeholder";
import { Button } from "@/components/ui/Button";
import type { VideoContent } from "@/lib/types";

interface VideoSectionProps {
  content: VideoContent;
  className?: string;
}

/**
 * Video section - Builds trust through visual explanation of services.
 * Video is a powerful conversion tool for considered purchases.
 */
export function VideoSection({ content, className }: VideoSectionProps) {
  const scrollToForm = () => {
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={clsx(
        "section-padding bg-gradient-to-b from-gray-900 to-gray-800",
        className
      )}
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {content.headline}
          </h2>
          <p className="text-lg text-gray-300">
            {content.description}
          </p>
        </div>

        {/* Video placeholder */}
        <div className="max-w-4xl mx-auto mb-10 lg:mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Placeholder
              type="video"
              label={content.placeholder}
              aspectRatio="16:9"
              className="bg-gray-800 border-gray-700"
              notes="Replace with YouTube/Vimeo embed or self-hosted MP4. Recommended length: 2-3 minutes. Content should explain the service process and build trust."
            />

            {/* Play button overlay styling */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Video caption */}
          <p className="text-center text-gray-400 text-sm mt-4">
            Watch how we help contractors like you achieve compliance quickly
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToForm}
          >
            {content.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;

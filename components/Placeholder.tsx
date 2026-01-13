"use client";

import { Image, Play, Building2, User, Sparkles } from "lucide-react";
import { clsx } from "clsx";
import type { PlaceholderProps } from "@/lib/types";

/**
 * Reusable placeholder component for images, videos, logos, and avatars.
 * Provides a polished placeholder UI that clearly indicates what content
 * should be placed there in production.
 */
export function Placeholder({
  type,
  label,
  aspectRatio = "auto",
  width,
  height,
  className,
  notes,
}: PlaceholderProps) {
  // Get the appropriate icon for the placeholder type
  const IconComponent = {
    image: Image,
    video: Play,
    logo: Building2,
    avatar: User,
    icon: Sparkles,
  }[type];

  // Calculate aspect ratio class
  const aspectClass = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "4:3": "aspect-[4/3]",
    "3:2": "aspect-[3/2]",
    auto: "",
  }[aspectRatio];

  // Base styles for all placeholders
  const baseStyles = clsx(
    "relative flex flex-col items-center justify-center",
    "bg-gradient-to-br from-gray-100 to-gray-200",
    "border-2 border-dashed border-gray-300",
    "rounded-lg overflow-hidden",
    "transition-all duration-200",
    "hover:border-gray-400 hover:from-gray-50 hover:to-gray-100",
    aspectClass,
    className
  );

  // Style object for custom dimensions
  const style: React.CSSProperties = {
    width: width || "100%",
    height: height || (aspectRatio === "auto" ? "auto" : undefined),
    minHeight: aspectRatio === "auto" && !height ? "120px" : undefined,
  };

  return (
    <div className={baseStyles} style={style} title={notes}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern
            id={`pattern-${type}-${label.replace(/\s/g, "-")}`}
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect
            width="100%"
            height="100%"
            fill={`url(#pattern-${type}-${label.replace(/\s/g, "-")})`}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-2 p-4 text-center">
        {/* Icon */}
        <div
          className={clsx(
            "flex items-center justify-center rounded-full",
            "bg-gray-200/80 text-gray-500",
            type === "video" ? "w-16 h-16" : "w-12 h-12"
          )}
        >
          <IconComponent
            className={clsx(type === "video" ? "w-7 h-7" : "w-5 h-5")}
          />
        </div>

        {/* Label */}
        <span className="text-sm font-medium text-gray-500 max-w-[90%] truncate">
          {label}
        </span>

        {/* Type badge */}
        <span className="text-xs text-gray-400 uppercase tracking-wide">
          {type}
        </span>
      </div>

      {/* Developer notes tooltip indicator */}
      {notes && (
        <div className="absolute top-2 right-2 group">
          <div className="w-5 h-5 rounded-full bg-gray-300/50 flex items-center justify-center cursor-help">
            <span className="text-xs text-gray-500 font-medium">?</span>
          </div>
          <div className="absolute right-0 top-6 w-64 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 shadow-lg">
            <p className="font-medium text-gray-300 mb-1">Developer Note:</p>
            <p>{notes}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Placeholder;

"use client";

import { Star, Quote } from "lucide-react";
import { clsx } from "clsx";
import { Placeholder } from "@/components/Placeholder";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  variant?: "default" | "featured";
}

/**
 * Testimonial card component displaying customer quotes with photos.
 * Includes star ratings and company information.
 */
export function TestimonialCard({
  testimonial,
  className,
  variant = "default",
}: TestimonialCardProps) {
  const { quote, name, company, role, rating = 5, image } = testimonial;

  return (
    <div
      className={clsx(
        "relative flex flex-col h-full",
        "bg-white rounded-2xl",
        "transition-all duration-300",
        variant === "featured"
          ? "p-8 shadow-elevated"
          : "p-6 shadow-card hover:shadow-elevated",
        className
      )}
    >
      {/* Quote icon */}
      <div className="absolute -top-3 -left-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Quote className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Rating stars */}
      {rating > 0 && (
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={clsx(
                "w-5 h-5",
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
              )}
            />
          ))}
        </div>
      )}

      {/* Quote text */}
      <blockquote className="flex-grow mb-6">
        <p className="text-gray-700 leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      {/* Author info */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {image === "placeholder" ? (
            <Placeholder
              type="avatar"
              label={name}
              aspectRatio="1:1"
              width="56px"
              height="56px"
              className="rounded-full"
              notes="Replace with actual customer photo"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-500">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          )}
        </div>

        {/* Name and company */}
        <div className="flex-grow">
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">
            {role && <span>{role}, </span>}
            {company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;

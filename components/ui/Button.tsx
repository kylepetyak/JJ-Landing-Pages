"use client";

import { Loader2 } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";
import type { ButtonProps } from "@/lib/types";

/**
 * Reusable button component with multiple variants and states.
 * Follows the design system with primary (orange) and secondary (blue) variants.
 */
export function Button({
  variant = "primary",
  size = "default",
  children,
  className,
  isLoading = false,
  disabled = false,
  onClick,
  type = "button",
  href,
}: ButtonProps) {
  // Base button styles
  const baseStyles = clsx(
    "inline-flex items-center justify-center gap-2",
    "font-semibold rounded-lg",
    "transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
  );

  // Size variants
  const sizeStyles = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg min-h-[56px]",
  };

  // Variant styles
  const variantStyles = {
    primary: clsx(
      "bg-accent text-white shadow-md",
      "hover:bg-accent-hover hover:shadow-lg hover:-translate-y-0.5",
      "focus:ring-accent"
    ),
    secondary: clsx(
      "bg-white text-primary border-2 border-primary",
      "hover:bg-primary hover:text-white",
      "focus:ring-primary"
    ),
    "outline-white": clsx(
      "bg-transparent text-white border-2 border-white",
      "hover:bg-white hover:text-primary",
      "focus:ring-white"
    ),
  };

  // Combined styles
  const buttonStyles = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  // Button content with loading state
  const content = (
    <>
      {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
      {children}
    </>
  );

  // Render as link if href is provided
  if (href && !disabled && !isLoading) {
    return (
      <Link href={href} className={buttonStyles}>
        {content}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={buttonStyles}
    >
      {content}
    </button>
  );
}

export default Button;

"use client";

import { useState, useCallback, useEffect } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "./Button";
import type { LeadFormData, FormStatus } from "@/lib/types";

interface LeadFormProps {
  className?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  variant?: "default" | "compact" | "dark";
  showMessage?: boolean;
}

/**
 * Lead capture form component with validation and UTM parameter capture.
 * Designed for high conversion with minimal friction.
 */
export function LeadForm({
  className,
  headline = "Get Your Free Assessment",
  subheadline,
  ctaText = "Get Started Now",
  variant = "default",
  showMessage = true,
}: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [honeypot, setHoneypot] = useState("");

  // Capture UTM parameters on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setFormData((prev) => ({
        ...prev,
        utmSource: params.get("utm_source") || undefined,
        utmMedium: params.get("utm_medium") || undefined,
        utmCampaign: params.get("utm_campaign") || undefined,
        utmTerm: params.get("utm_term") || undefined,
        utmContent: params.get("utm_content") || undefined,
      }));
    }
  }, []);

  // Validate form fields
  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Handle input changes
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear error when user starts typing
      if (errors[name as keyof LeadFormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Honeypot check for spam
      if (honeypot) {
        console.log("Bot detected");
        return;
      }

      if (!validateForm()) {
        return;
      }

      setStatus("submitting");

      // Simulate form submission (replace with actual endpoint)
      try {
        // In production, replace this with actual form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form submitted:", formData);
        setStatus("success");

        // Reset form after success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } catch {
        setStatus("error");
      }
    },
    [formData, honeypot, validateForm]
  );

  // Form styles based on variant
  const containerStyles = clsx(
    "rounded-2xl",
    variant === "dark"
      ? "bg-gray-900 text-white p-6 md:p-8"
      : "bg-white shadow-elevated p-6 md:p-8",
    className
  );

  const inputStyles = clsx(
    "w-full px-4 py-3 rounded-lg text-base",
    "border transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-0",
    variant === "dark"
      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary focus:ring-primary/30"
      : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-primary/20"
  );

  const labelStyles = clsx(
    "block text-sm font-medium mb-1.5",
    variant === "dark" ? "text-gray-300" : "text-gray-700"
  );

  // Success state
  if (status === "success") {
    return (
      <div className={containerStyles}>
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
          <h3
            className={clsx(
              "text-xl font-bold mb-2",
              variant === "dark" ? "text-white" : "text-gray-900"
            )}
          >
            Thank You!
          </h3>
          <p className={variant === "dark" ? "text-gray-300" : "text-gray-600"}>
            We&apos;ve received your information and will contact you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={containerStyles}>
      {/* Form header */}
      {headline && (
        <div className="text-center mb-6">
          <h3
            className={clsx(
              "text-xl md:text-2xl font-bold mb-2",
              variant === "dark" ? "text-white" : "text-gray-900"
            )}
          >
            {headline}
          </h3>
          {subheadline && (
            <p
              className={clsx(
                "text-sm",
                variant === "dark" ? "text-gray-400" : "text-gray-500"
              )}
            >
              {subheadline}
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Honeypot field (hidden from users, catches bots) */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="absolute -left-[9999px]"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Name fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className={labelStyles}>
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className={clsx(inputStyles, errors.firstName && "border-red-500")}
              required
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className={labelStyles}>
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Smith"
              className={clsx(inputStyles, errors.lastName && "border-red-500")}
              required
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email field */}
        <div className="mb-4">
          <label htmlFor="email" className={labelStyles}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className={clsx(inputStyles, errors.email && "border-red-500")}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone field */}
        <div className="mb-4">
          <label htmlFor="phone" className={labelStyles}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 555-5555"
            className={clsx(inputStyles, errors.phone && "border-red-500")}
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Company field (optional) */}
        <div className="mb-4">
          <label htmlFor="company" className={labelStyles}>
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className={inputStyles}
          />
        </div>

        {/* Message field (optional) */}
        {showMessage && (
          <div className="mb-6">
            <label htmlFor="message" className={labelStyles}>
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your compliance needs..."
              rows={3}
              className={clsx(inputStyles, "resize-none")}
            />
          </div>
        )}

        {/* Submit button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          isLoading={status === "submitting"}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : ctaText}
        </Button>

        {/* Error message */}
        {status === "error" && (
          <div className="flex items-center gap-2 mt-4 p-3 bg-red-50 rounded-lg text-red-600">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">
              Something went wrong. Please try again or call us directly.
            </p>
          </div>
        )}

        {/* Privacy text */}
        <p
          className={clsx(
            "text-xs text-center mt-4",
            variant === "dark" ? "text-gray-500" : "text-gray-400"
          )}
        >
          Your information is secure and will never be shared.
          <br />
          By submitting, you agree to receive communications from JJ Safety.
        </p>
      </form>
    </div>
  );
}

export default LeadForm;

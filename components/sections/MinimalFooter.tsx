"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { clsx } from "clsx";

interface MinimalFooterProps {
  className?: string;
}

/**
 * Minimal Footer - Legal compliance and contact info only.
 * No navigation links to eliminate exit paths.
 */
export function MinimalFooter({ className }: MinimalFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={clsx("bg-gray-900 py-8 lg:py-12", className)}>
      <div className="container-custom">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-8 border-b border-gray-800">
          {/* Logo and tagline */}
          <div className="text-center lg:text-left">
            <div className="text-2xl font-bold text-white mb-2">
              JJ Safety
            </div>
            <p className="text-gray-400 text-sm">
              Your Contractor Compliance Partner
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-6 lg:gap-8">
            <a
              href="tel:18005551234"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">1-800-555-1234</span>
            </a>

            <a
              href="mailto:info@jjsafety.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@jjsafety.com</span>
            </a>

            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Houston, TX</span>
            </div>
          </div>
        </div>

        {/* Copyright and legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {currentYear} JJ Safety. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-gray-300 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-600 mt-6">
          ISNetworld&reg;, Veriforce&reg;, and Avetta&reg; are registered trademarks of their
          respective owners. JJ Safety is not affiliated with these companies.
        </p>
      </div>
    </footer>
  );
}

export default MinimalFooter;

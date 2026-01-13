import Link from "next/link";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { getAllPlatforms, platformContent } from "@/lib/content";

/**
 * Template selector/preview hub page.
 * This page allows previewing all available landing page templates.
 */
export default function HomePage() {
  const platforms = getAllPlatforms();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">JJ Safety</h1>
              <p className="text-sm text-gray-500">Landing Page Templates</p>
            </div>
            <div className="text-sm text-gray-500">
              Preview Mode
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="container-custom py-12 lg:py-16">
        {/* Page header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Template Preview Hub
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            JJ Safety Landing Page Templates
          </h2>
          <p className="text-lg text-gray-600">
            High-converting landing page templates for ISNetworld, Veriforce, and
            Avetta compliance services. Click any template to preview.
          </p>
        </div>

        {/* Template cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {platforms.map((platform) => {
            const content = platformContent[platform];
            return (
              <Link
                key={platform}
                href={`/${platform}`}
                className="group relative bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
              >
                {/* Card header */}
                <div className="bg-gradient-to-br from-primary to-primary-dark p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">
                    {content.platformName}
                  </h3>
                  <p className="text-white/80 text-sm">
                    Landing Page Template
                  </p>
                </div>

                {/* Card body */}
                <div className="p-6">
                  {/* Sample content preview */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {content.hero.subheadline}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {content.trustMetrics.slice(0, 3).map((metric, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>
                          {metric.value} {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Preview Template</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>
            );
          })}
        </div>

        {/* Info section */}
        <div className="mt-16 lg:mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-soft p-8 lg:p-10">
            <h3 className="text-xl font-bold text-dark mb-4">
              About These Templates
            </h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-4">
                These landing page templates are designed for high conversion
                based on proven principles from Neil Patel&apos;s research (3000+
                landing pages analyzed) and Russell Brunson&apos;s Hook → Story →
                Offer framework.
              </p>
              <h4 className="text-lg font-semibold text-dark mt-6 mb-3">
                Key Features:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>
                    Mobile-first design (optimized for 83% mobile traffic)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>No navigation menu (eliminates exit paths)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>
                    Lead capture forms with validation and UTM tracking
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>
                    Emotion → Logic → Fear page flow for maximum conversion
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>
                    Accessible (WCAG AA compliant) with keyboard navigation
                  </span>
                </li>
              </ul>
              <h4 className="text-lg font-semibold text-dark mt-6 mb-3">
                For Developers:
              </h4>
              <p className="text-gray-600">
                All placeholder content is clearly marked. See the{" "}
                <code className="px-2 py-1 bg-gray-100 rounded text-sm">
                  lib/content.ts
                </code>{" "}
                file for the content structure and{" "}
                <code className="px-2 py-1 bg-gray-100 rounded text-sm">
                  README.md
                </code>{" "}
                for integration documentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="container-custom text-center text-gray-400 text-sm">
          <p>JJ Safety Landing Page Templates - Preview Mode</p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} JJ Safety. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

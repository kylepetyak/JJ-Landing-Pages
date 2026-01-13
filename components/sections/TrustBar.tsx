"use client";

import {
  Users,
  Star,
  ShieldCheck,
  CheckCircle,
  Clock,
  Award,
} from "lucide-react";
import { clsx } from "clsx";
import type { TrustMetric } from "@/lib/types";

interface TrustBarProps {
  metrics: TrustMetric[];
  className?: string;
}

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  users: Users,
  star: Star,
  "shield-check": ShieldCheck,
  "check-circle": CheckCircle,
  clock: Clock,
  award: Award,
};

/**
 * Trust bar section - Displays key metrics/social proof in a prominent band.
 * Creates immediate credibility with large numbers and trust indicators.
 */
export function TrustBar({ metrics, className }: TrustBarProps) {
  return (
    <section className={clsx("bg-primary py-6 lg:py-8", className)}>
      <div className="container-custom">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12">
          {metrics.map((metric, index) => {
            const IconComponent = iconMap[metric.icon] || CheckCircle;
            return (
              <div
                key={index}
                className="flex items-center gap-4 text-white"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold">
                    {metric.value}
                  </div>
                  <div className="text-sm lg:text-base text-white/80">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;

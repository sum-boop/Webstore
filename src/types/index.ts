import type { LucideIcon } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  tech: string[];
}

export type ShowcaseCategory = "Portfolios" | "Landing Pages" | "Web Apps";

interface ShowcaseBase {
  id: string;
  title: string;
  clientRole: string;
  industry: string;
  description: string;
  highlight: string;
  tags: string[];
  demoUrl: string;
}

export type ShowcaseProject =
  | (ShowcaseBase & { category: "Portfolios" })
  | (ShowcaseBase & { category: "Landing Pages" })
  | (ShowcaseBase & { category: "Web Apps" });

export interface PricingTier {
  id: string;
  name: string;
  price: number | null;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaLabel: string;
}

export interface InquiryFormData {
  name: string;
  contact: string;
  projectType: string;
  budget: string;
  details: string;
}

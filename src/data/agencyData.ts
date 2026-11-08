import { AppWindow, Globe, Palette, ShoppingBag } from "lucide-react";
import type { NavLink, PricingTier, ServiceItem, ShowcaseProject } from "@/types";

export const CONTACT = {
  whatsappUrl: "https://wa.me/919999999999",
  phoneHref: "tel:+919999999999",
  phoneDisplay: "+91 99999 99999",
  email: "hello@aistackstudio.com",
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#showcase", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export const SERVICES: readonly ServiceItem[] = [
  {
    id: "custom-websites",
    title: "Custom Websites",
    description: "Hand-coded portfolios, company sites, and landing pages that load fast and convert visitors into clients.",
    icon: Globe,
    features: ["Fully responsive on every device", "SEO-ready structure", "Animated, scroll-driven sections", "Integrated inquiry forms"],
    tech: ["React", "Tailwind CSS", "Vite"],
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Secure dashboards and internal tools with live data, role-based access, and clear admin controls.",
    icon: AppWindow,
    features: ["Role-based authentication", "Real-time data views", "Third-party API integration", "Admin panel for your team"],
    tech: ["React", "TypeScript", "Supabase"],
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    description: "Online stores with a searchable catalog, a streamlined cart, and a checkout that customers trust.",
    icon: ShoppingBag,
    features: ["Searchable product catalog", "Cart and secure checkout", "Payment gateway setup", "Order tracking for customers"],
    tech: ["React", "Tailwind CSS", "Stripe"],
  },
  {
    id: "brand-ui-systems",
    title: "Brand & UI Systems",
    description: "A consistent visual language, from color and type to reusable components, so every page feels like one product.",
    icon: Palette,
    features: ["Custom color and type system", "Reusable component library", "Motion and micro-interaction guidelines", "Accessibility-first design"],
    tech: ["Design Tokens", "Tailwind CSS", "Framer Motion"],
  },
];

export const SHOWCASE_PROJECTS: readonly ShowcaseProject[] = [
  {
    id: "fire-officer-portfolio",
    title: "Industrial Safety Officer Portfolio",
    category: "Portfolios",
    clientRole: "Fire & Safety Officer",
    industry: "Industrial Safety",
    description: "A tactical, dark-themed portfolio presenting certifications, site experience, and emergency response expertise.",
    highlight: "Certifications & site experience",
    tags: ["Tactical UI", "React", "Tailwind CSS"],
    demoUrl: "https://example.com/fire-officer",
  },
  {
    id: "lead-generation-landing",
    title: "Corporate Lead Generation Landing",
    category: "Landing Pages",
    clientRole: "Consulting Firm",
    industry: "Professional Services",
    description: "A focused multi-section landing page with a clear message, social proof, and a streamlined lead capture form.",
    highlight: "Single-page lead funnel",
    tags: ["Landing Page", "Lead Capture", "Analytics"],
    demoUrl: "https://example.com/lead-landing",
  },
  {
    id: "security-command-dashboard",
    title: "Security Command Dashboard",
    category: "Web Apps",
    clientRole: "Security Systems Integrator",
    industry: "Security & Surveillance",
    description: "A command-center style dashboard with a camera wall layout and access control event logs.",
    highlight: "Live camera wall & access logs",
    tags: ["Dashboard", "Access Control", "TypeScript"],
    demoUrl: "https://example.com/security-command",
  },
  {
    id: "operations-dashboard",
    title: "Logistics Operations Dashboard",
    category: "Web Apps",
    clientRole: "Logistics Operator",
    industry: "Logistics",
    description: "An internal web app that tracks shipments in real time and gives managers one clear view of daily operations.",
    highlight: "Real-time shipment tracking",
    tags: ["Dashboard", "Realtime", "API"],
    demoUrl: "https://example.com/operations",
  },
];

export const PRICING_TIERS: readonly PricingTier[] = [
  {
    id: "starter-portfolio",
    name: "Starter Portfolio",
    price: 1499,
    description: "A clean single-page portfolio for professionals who need a credible online presence quickly.",
    features: ["Single-page portfolio", "Fully responsive design", "Basic SEO setup", "Working contact form", "1 revision round"],
    isPopular: false,
    ctaLabel: "Get Started",
  },
  {
    id: "pro-business-landing",
    name: "Pro Business",
    price: 3499,
    description: "A custom-designed, multi-section landing page built to capture leads and grow your business.",
    features: ["Multi-section landing page", "Custom visual design", "Smooth scroll and hover animations", "Complete SEO setup", "Analytics integration", "3 revision rounds"],
    isPopular: true,
    ctaLabel: "Choose Pro",
  },
  {
    id: "enterprise-web-app",
    name: "Enterprise",
    price: null,
    description: "A fully custom web application with secure access, live data, and the admin tools your team needs.",
    features: ["Custom interactive dashboard", "Role-based authentication", "Third-party API integration", "Admin panel for management", "Priority support", "Production deployment included"],
    isPopular: false,
    ctaLabel: "Book a Call",
  },
];

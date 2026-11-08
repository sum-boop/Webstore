import { UserRound, Briefcase, ShoppingBag, LayoutDashboard, CheckCircle2, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { servicesData } from "../data/agencyData";
import type { ServiceItem } from "../types";
const serviceIconMap: Record<string, LucideIcon> = { UserRound, Briefcase, ShoppingBag, LayoutDashboard };
const techStackMap: Record<string, string[]> = {
"Portfolio": ["React", "Tailwind CSS", "Framer Motion"],
"Landing Page": ["React", "Tailwind CSS", "Next.js"],
"E-Commerce": ["React", "Tailwind CSS", "Stripe"],
"Web App": ["React", "TypeScript", "Next.js"]
};
export default function Services() {
return (
<section id="services" className="relative bg-canvas px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="text-center">
<span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-400">Our Core Capabilities</span>
<h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Web Solutions Built for Any Industry & Goal</h2>
<p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">
Every website is custom-crafted from scratch — fully responsive, lightning-fast, and optimized for speed, SEO, and conversion. No templates, no bloat, no compromises.
</p>
</div>
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
      {servicesData.map((service: ServiceItem) => {
        const Icon = serviceIconMap[service.iconName] ?? Briefcase;
        const techs: string[] = techStackMap[service.category] ?? [];

        return (
          <article
            key={service.id}
            className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 transition-all hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 ring-1 ring-indigo-500/30">
                <Icon className="h-6 w-6 text-indigo-400" />
              </div>
              <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs font-medium text-zinc-300">{service.category}</span>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.description}</p>

            <ul className="mt-5 space-y-2">
              {service.features.map((feature: string) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 text-[11px] font-medium text-zinc-400">{service.badgeText}</span>
              {techs.map((tech: string) => (
                <span key={tech} className="rounded-full border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 text-[11px] font-medium text-zinc-400">{tech}</span>
              ))}
            </div>

            <div className="mt-6 pt-2">
              <a
                href="#contact"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 shadow-lg shadow-indigo-500/20"
              >
                Order This Type
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  </div>
</section>
);
}

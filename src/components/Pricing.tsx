import { Check, Zap, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { pricingData } from "../data/agencyData";
import type { PricingPackage } from "../types";
const formatPrice = (value: number): string => ₹${value.toLocaleString("en-IN")};
export default function Pricing() {
return (
<section id="pricing" className="relative bg-canvas px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-400">
<Sparkles className="h-3.5 w-3.5" />
Transparent Packages & Rates
</span>
<h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Clear, Fixed Tiers for Every Project Scale</h2>
<p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">
No hidden fees, no surprise invoices. Every plan ships with fast delivery, clean and scalable code, and full ownership of your website.
</p>
</div>
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
      {pricingData.map((pkg: PricingPackage) => {
        const PkgIcon = pkg.price < 20000 ? Zap : ShieldCheck;

        return (
          <article
            key={pkg.id}
            className={`${pkg.isPopular ? "relative flex flex-col rounded-2xl border-2 border-indigo-500 bg-zinc-900/90 p-8 shadow-[0_0_35px_rgba(99,102,241,0.25)] transition-all" : "flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 transition-all hover:border-zinc-700"}`}
          >
            {pkg.isPopular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">Most Popular</span>
            )}

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 ring-1 ring-indigo-500/30">
              <PkgIcon className="h-5 w-5 text-indigo-400" />
            </div>

            <h3 className="text-lg font-semibold text-white">{pkg.title}</h3>

            <p className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">{formatPrice(pkg.price)}</span>
              <span className="text-sm font-medium text-zinc-400">one-time</span>
            </p>

            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{pkg.description}</p>

            <div className="my-6 h-px w-full bg-zinc-800" />

            <ul className="space-y-3">
              {pkg.features.map((feature: string) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30">
                    <Check className="h-3 w-3 text-emerald-400" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-2">
              <a
                href="#contact"
                onClick={() => sessionStorage.setItem("selectedPackage", pkg.title)}
                className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${pkg.isPopular ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500" : "border border-zinc-800 bg-zinc-950/60 text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900"}`}
              >
                {pkg.ctaLabel}
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

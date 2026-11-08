import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { PRICING_TIERS } from "@/data/agencyData";
import { cn } from "@/lib/utils";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function Pricing() {
  return (
    <section id="pricing" className="section-container bg-canvas">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Transparent Packages & Rates
        </span>
        <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-white md:text-4xl">Clear, Fixed Tiers for Every Project Scale</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.5] text-zinc-400">
          No hidden fees and no surprise invoices. Every plan ships with clean code and full ownership of your website.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRICING_TIERS.map((tier) => (
          <motion.article
            key={tier.id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "relative flex flex-col rounded-2xl p-6 sm:p-8",
              tier.isPopular
                ? "border border-indigo-500/60 bg-indigo-500/5 shadow-glow lg:-my-4"
                : "glass-panel transition-colors hover:border-zinc-700",
            )}
          >
            {tier.isPopular && (
              <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-indigo-500/30">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Most Popular
              </span>
            )}

            <h3 className="text-lg font-semibold text-white">{tier.name}</h3>

            <p className="mt-4 text-4xl font-bold text-white">
              {tier.price === null ? "Custom" : currencyFormatter.format(tier.price)}
              {tier.price !== null && <span className="ml-2 text-sm font-medium text-zinc-400">one-time</span>}
            </p>

            <p className="mt-4 text-sm leading-[1.5] text-zinc-400">{tier.description}</p>

            <div className="my-6 h-px w-full bg-zinc-800" />

            <ul className="space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                    <Check className="h-3 w-3 text-emerald-400" aria-hidden="true" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <a
                href="#contact"
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition",
                  tier.isPopular
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500"
                    : "border border-zinc-700 bg-zinc-950/60 text-zinc-100 hover:border-zinc-600 hover:bg-zinc-900",
                )}
              >
                {tier.ctaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

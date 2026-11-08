import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/agencyData";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="section-container bg-canvas">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Our Core Capabilities
        </span>
        <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-white md:text-4xl">Web Solutions Built for Any Industry & Goal</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.5] text-zinc-400">
          Every website is custom-crafted from scratch: fully responsive, fast, and built to convert. No templates, no bloat.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.id}
              variants={cardVariants}
              className="glass-panel group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-glow sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 ring-1 ring-indigo-500/30">
                <Icon className="h-6 w-6 text-indigo-400" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-[1.5] text-zinc-400">{service.description}</p>

              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                      <Check className="h-3 w-3 text-emerald-400" aria-hidden="true" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tech.map((tech) => (
                  <li key={tech} className="rounded-full bg-zinc-800/60 px-2.5 py-1 text-[11px] font-medium text-zinc-300">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/60 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-indigo-500/50 hover:bg-zinc-900 hover:text-white"
                >
                  Order this service
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

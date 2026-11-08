import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { SHOWCASE_PROJECTS } from "@/data/agencyData";
import { cn } from "@/lib/utils";
import type { ShowcaseCategory, ShowcaseProject } from "@/types";

type FilterLabel = "All" | ShowcaseCategory;

const FILTER_LABELS: readonly FilterLabel[] = ["All", "Portfolios", "Landing Pages", "Web Apps"];

export default function Showcase() {
  const [activeFilter, setActiveFilter] = useState<FilterLabel>("All");

  const filteredProjects: readonly ShowcaseProject[] =
    activeFilter === "All" ? SHOWCASE_PROJECTS : SHOWCASE_PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <section id="showcase" className="section-container bg-canvas">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Proven Results & Case Studies
        </span>
        <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-white md:text-4xl">Featured Websites & Live Client Projects</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.5] text-zinc-400">
          Real-world projects built from scratch for speed, clarity, and conversion.
        </p>
      </div>

      <div role="group" aria-label="Filter projects" className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {FILTER_LABELS.map((label) => {
          const isActive = activeFilter === label;
          return (
            <button
              type="button"
              key={label}
              onClick={() => setActiveFilter(label)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                isActive
                  ? "border-indigo-500 bg-indigo-500 text-white shadow-glow"
                  : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="glass-panel group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-glow-cyan"
            >
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-300">
                    {project.category}
                  </span>
                  <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-2.5 py-0.5 text-[11px] font-medium text-zinc-400">
                    {project.industry}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">{project.clientRole}</p>
                </div>

                <p className="text-sm leading-[1.5] text-zinc-400">{project.description}</p>

                <p className="flex items-center gap-2 text-sm font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  {project.highlight}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-zinc-800/60 px-2.5 py-1 text-[11px] font-medium text-zinc-300">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col gap-2 border-t border-zinc-800/70 p-4 sm:flex-row sm:p-5">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-950/60 px-4 py-2 text-xs font-semibold text-zinc-100 transition hover:border-cyan-500/50 hover:text-cyan-300"
                >
                  View demo
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-cyan-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-500"
                >
                  Request similar
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

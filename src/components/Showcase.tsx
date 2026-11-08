import { useState } from "react";
import { ExternalLink, Sparkles, Filter, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/agencyData";
import type { PortfolioItem } from "../types";
type FilterLabel = "All" | "Portfolios" | "Landing Pages" | "E-Commerce" | "Web Apps";
const filterLabels: FilterLabel[] = ["All", "Portfolios", "Landing Pages", "E-Commerce", "Web Apps"];
const filterTagMap: Record<string, string[]> = {
Portfolios: ["Portfolio", "Portfolios"],
"Landing Pages": ["Landing Page", "Landing Pages", "Landing"],
"E-Commerce": ["E-Commerce", "Ecommerce", "Shop", "Store", "Storefront"],
"Web Apps": ["Web App", "Web Apps", "Dashboard", "TypeScript"]
};
export default function Showcase() {
const [activeFilter, setActiveFilter] = useState<FilterLabel>("All");
const filteredProjects: PortfolioItem[] =
activeFilter === "All"
? portfolioData
: portfolioData.filter((project) => {
const needles = filterTagMap[activeFilter] ?? [];
return project.tags.some((tag) =>
needles.some((needle) => tag.toLowerCase() === needle.toLowerCase())
);
});
return (
<section id="showcase" className="relative bg-canvas px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
<Sparkles className="h-3.5 w-3.5" />
Proven Results & Case Studies
</span>
<h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Featured Websites & Live Client Projects</h2>
<p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">
Real-world projects built for industrial safety officers, security command teams, and professional studios — each crafted from scratch for speed, clarity, and conversion.
</p>
</div>
    <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-400">
        <Filter className="h-3.5 w-3.5" />
        Filter
      </span>
      {filterLabels.map((label: FilterLabel) => (
        <button
          type="button"
          key={label}
          onClick={() => setActiveFilter(label)}
          aria-pressed={activeFilter === label}
          className={`${
            activeFilter === label
              ? "rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] transition"
              : "rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-sm font-medium text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.length === 0 ? (
        <div className="col-span-full rounded-2xl border border-zinc-800 bg-zinc-900/50 p-10 text-center text-sm text-zinc-400">
          No projects in this category yet — check back soon.
        </div>
      ) : (
        filteredProjects.map((project: PortfolioItem) => (
          <article
            key={project.id}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 transition-all hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
          >
            <div className="relative aspect-video overflow-hidden border-b border-zinc-800 bg-zinc-950">
              <img
                src={project.previewImage}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-700/60 bg-zinc-950/80 px-2 py-0.5 text-[10px] font-medium text-zinc-300 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-300">
                  {project.clientRole}
                </span>
                <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-2.5 py-0.5 text-[11px] font-medium text-zinc-400">
                  {project.industry}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.description}</p>

              <div className="mt-auto flex items-center gap-2 pt-5">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:border-cyan-500/40 hover:text-cyan-300"
                >
                  Live Preview
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#contact"
                  onClick={() => sessionStorage.setItem("selectedProject", project.title)}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-cyan-600 px-3 py-2 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-500"
                >
                  Request Similar
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))
      )}
    </div>
  </div>
</section>
);
}

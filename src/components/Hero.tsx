import { ArrowRight, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
export default function Hero() {
return (
<section id="top" className="relative isolate overflow-hidden bg-canvas px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
<div className="absolute top-24 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
</div>
  <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
      <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">Available for new projects</span>
    </div>

    <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
      <span className="block text-white">We Build High-Impact Websites</span>
      <span className="block bg-gradient-to-r from-white via-zinc-200 to-indigo-400 bg-clip-text text-transparent">for Every Business & Profession</span>
    </h1>

    <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
      From tactical professional portfolios and corporate landing pages to online stores and custom web apps — fast, modern, and 100% mobile-ready.
    </p>

    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:from-indigo-500 hover:to-indigo-400"
      >
        Get Your Website
        <ArrowRight className="h-4 w-4" />
      </a>
      <a
        href="#showcase"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition hover:border-zinc-700 hover:bg-zinc-900"
      >
        View Live Work
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>

    <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
      <li className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-sm">
        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
        48-Hour Rapid Delivery
      </li>
      <li className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-sm">
        <Sparkles className="h-4 w-4 text-indigo-400" />
        100% Responsive Design
      </li>
      <li className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-sm">
        <ArrowRight className="h-4 w-4 text-cyan-400" />
        Custom Built & Zero Bloat
      </li>
    </ul>
  </div>
</section>
);
}

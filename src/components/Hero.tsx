import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute right-1/4 top-24 h-80 w-80 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-pulse-led rounded-full bg-emerald-400" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">Live projects available</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
          We build <span className="gradient-text">high-converting</span> digital experiences for modern brands.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-[1.5] text-zinc-400 sm:text-lg">
          Custom websites, web applications, and online stores, hand-coded for speed, built to be fully mobile-ready, and designed to turn visitors into clients.
        </p>

        <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500 hover:shadow-glow"
          >
            Get Your Website
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-3 text-sm font-semibold text-zinc-100 backdrop-blur-xl transition hover:border-zinc-600 hover:bg-zinc-900"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            View Live Work
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <li className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-xl">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            48-Hour Rapid Delivery
          </li>
          <li className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-indigo-400" aria-hidden="true" />
            100% Responsive Design
          </li>
          <li className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-xl">
            <ArrowRight className="h-4 w-4 text-cyan-400" aria-hidden="true" />
            Custom Built & Zero Bloat
          </li>
        </ul>
      </motion.div>
    </section>
  );
}

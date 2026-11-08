import { Code2, Github, Linkedin, MessageSquare, Mail, ArrowUp, Heart } from "lucide-react";
export default function Footer() {
return (
<footer className="bg-zinc-950 border-t-2 border-t-indigo-500/40 pt-16 pb-8 text-zinc-400">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
<div>
<a href="#top" className="inline-flex items-center gap-2" aria-label="AI Stack Studio home">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/30">
<Code2 className="h-4 w-4 text-white" />
</div>
<span className="text-lg font-bold tracking-tight">
<span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">AI STACK</span> <span className="text-zinc-300 font-medium">Studio</span>
</span>
</a>
<p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">Crafting high-impact, custom-coded web platforms for ambitious professionals and companies.</p>
<div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
</span>
<span className="text-xs font-semibold text-emerald-300">Systems Operational & Accepting Projects</span>
</div>
</div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Navigation</h3>
        <ul className="mt-4 space-y-2.5">
          <li>
            <a href="#services" className="text-sm text-zinc-400 transition hover:text-white">Services</a>
          </li>
          <li>
            <a href="#showcase" className="text-sm text-zinc-400 transition hover:text-white">Showcase</a>
          </li>
          <li>
            <a href="#pricing" className="text-sm text-zinc-400 transition hover:text-white">Pricing</a>
          </li>
          <li>
            <a href="#contact" className="text-sm text-zinc-400 transition hover:text-white">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Solutions</h3>
        <ul className="mt-4 space-y-2.5">
          <li>
            <a href="#services" className="text-sm text-zinc-400 transition hover:text-white">Personal Portfolios</a>
          </li>
          <li>
            <a href="#services" className="text-sm text-zinc-400 transition hover:text-white">Corporate Landing Pages</a>
          </li>
          <li>
            <a href="#services" className="text-sm text-zinc-400 transition hover:text-white">E-Commerce Stores</a>
          </li>
          <li>
            <a href="#services" className="text-sm text-zinc-400 transition hover:text-white">Custom Dashboards</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Connect</h3>
        <ul className="mt-4 space-y-2.5">
          <li>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </a>
          </li>
          <li>
            <a href="mailto:hello@aistackstudio.com" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </li>
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-zinc-500">Average response time under 30 minutes during working hours.</p>
      </div>
    </div>

    <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-xs text-zinc-500 md:flex-row">
      <p className="flex items-center gap-1.5">
        © 2026 AI STACK Studio. Zero-Payroll Autonomous Engine.
        <Heart className="h-3.5 w-3.5 text-indigo-400" />
      </p>
      <div className="flex items-center gap-4">
        <a href="#privacy" className="transition hover:text-zinc-300">Privacy Policy</a>
        <a href="#terms" className="transition hover:text-zinc-300">Terms of Service</a>
      </div>
      <a
        href="#top"
        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-indigo-500/40 hover:text-white"
      >
        Back to Top
        <ArrowUp className="h-3.5 w-3.5" />
      </a>
    </div>
  </div>
</footer>
);
}

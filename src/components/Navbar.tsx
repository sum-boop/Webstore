import { useState } from "react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
export default function Navbar() {
const [isOpen, setIsOpen] = useState<boolean>(false);
return (
<header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
<a href="#top" aria-label="AI Stack Studio home" className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/30">
<Sparkles className="h-4 w-4 text-white" />
</div>
<div className="flex items-center gap-1.5 text-lg">
<span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-bold tracking-tight">AI STACK</span>
<span className="text-zinc-300 font-medium">Studio</span>
</div>
</a>
    <nav className="hidden md:flex items-center gap-8">
      <a href="#services" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Services</a>
      <a href="#showcase" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Showcase</a>
      <a href="#pricing" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Pricing</a>
      <a href="#contact" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Contact</a>
    </nav>

    <a
      href="#contact"
      className="hidden md:inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 shadow-lg shadow-indigo-500/20"
    >
      Get a Website
      <ArrowRight className="h-4 w-4" />
    </a>

    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="md:hidden text-zinc-200 hover:text-white"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  </div>

  {isOpen && (
    <div className="md:hidden border-t border-zinc-800/80 bg-zinc-950/95 backdrop-blur-md">
      <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
        <a
          href="#services"
          onClick={() => setIsOpen(false)}
          className="rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
        >
          Services
        </a>
        <a
          href="#showcase"
          onClick={() => setIsOpen(false)}
          className="rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
        >
          Showcase
        </a>
        <a
          href="#pricing"
          onClick={() => setIsOpen(false)}
          className="rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
        >
          Pricing
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="rounded-md px-3 py-2 text-base font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
        >
          Contact
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20"
        >
          Get a Website
          <ArrowRight className="h-4 w-4" />
        </a>
      </nav>
    </div>
  )}
</header>
);
}

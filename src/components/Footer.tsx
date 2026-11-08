import { ArrowUp, Circle, Code2, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/data/agencyData";

const linkClass = "text-sm text-zinc-400 transition hover:text-white";
const socialLinkClass = "inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-500/30 bg-zinc-950 pb-8 pt-16 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" aria-label="AI STACK Studio home" className="inline-flex items-center gap-2.5 rounded-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/30">
                <Code2 className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                <span className="gradient-text">AI STACK</span>{" "}
                <span className="font-medium text-zinc-300">Studio</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-[1.5] text-zinc-400">
              Crafting high-impact, custom-coded web platforms for ambitious professionals and companies.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#services" className={linkClass}>Services</a></li>
              <li><a href="#showcase" className={linkClass}>Work</a></li>
              <li><a href="#pricing" className={linkClass}>Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#privacy" className={linkClass}>Privacy Policy</a></li>
              <li><a href="#terms" className={linkClass}>Terms of Service</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className={socialLinkClass}><Mail className="h-4 w-4" aria-hidden="true" />Email</a></li>
              <li><a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className={socialLinkClass}><MessageCircle className="h-4 w-4" aria-hidden="true" />WhatsApp</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className={socialLinkClass}><Github className="h-4 w-4" aria-hidden="true" />GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className={socialLinkClass}><Linkedin className="h-4 w-4" aria-hidden="true" />LinkedIn</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5">
              <Circle className="h-2.5 w-2.5 fill-emerald-500 text-emerald-500" aria-hidden="true" />
              <span className="text-xs font-semibold text-emerald-300">All systems operational</span>
            </div>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:border-indigo-500/50 hover:text-white"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-900 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} AI STACK Studio. All rights reserved.</p>
          <p>Zero-payroll autonomous engine.</p>
        </div>
      </div>
    </footer>
  );
}

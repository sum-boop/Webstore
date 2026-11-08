import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Mail, MessageCircle, Phone, Send, ShieldCheck, Sparkles } from "lucide-react";
import { CONTACT } from "@/data/agencyData";
import type { InquiryFormData } from "@/types";

type FormStatus = "idle" | "submitted";

const INQUIRY_FIELDS = ["name", "contact", "projectType", "budget", "details"] as const;
type InquiryField = (typeof INQUIRY_FIELDS)[number];

const EMPTY_FORM: InquiryFormData = { name: "", contact: "", projectType: "", budget: "", details: "" };

const PROJECT_TYPES: readonly string[] = ["Portfolio", "Business Website", "E-Commerce Store", "Custom Web App"];
const BUDGET_RANGES: readonly string[] = ["Under $1,500", "$1,500 - $3,500", "$3,500 - $10,000", "$10,000+"];

const TRUST_BADGES: readonly string[] = ["100% Satisfaction Guarantee", "Clean & Scalable Code", "Post-Launch Support"];

const inputClass =
  "w-full rounded-lg border border-zinc-700 bg-zinc-950/60 px-3.5 py-3 text-sm text-white placeholder-zinc-500 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30";
const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400";
const contactCardClass =
  "group flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur-xl transition-all hover:border-indigo-500/50 hover:shadow-glow";
const iconWrapClass = "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-950/60 ring-1 ring-zinc-800";

function isInquiryField(value: string): value is InquiryField {
  return (INQUIRY_FIELDS as readonly string[]).includes(value);
}

export default function Contact() {
  const [formData, setFormData] = useState<InquiryFormData>(EMPTY_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    if (!isInquiryField(name)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setStatus("submitted");
    setFormData(EMPTY_FORM);
  };

  return (
    <section id="contact" className="section-container bg-canvas">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Start Your Project
        </span>
        <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-white md:text-4xl">Let's Build Your High-Impact Website</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.5] text-zinc-400">
          Tell us about your idea and we will reply with a fixed quote, timeline, and next steps.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className={contactCardClass}>
            <div className={iconWrapClass}>
              <MessageCircle className="h-5 w-5 text-emerald-400" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">WhatsApp Chat</h3>
              <p className="mt-1 text-sm text-zinc-400">Instant replies during working hours</p>
            </div>
          </a>
          <a href={CONTACT.phoneHref} className={contactCardClass}>
            <div className={iconWrapClass}>
              <Phone className="h-5 w-5 text-indigo-400" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Direct Phone Call</h3>
              <p className="mt-1 text-sm text-zinc-400">{CONTACT.phoneDisplay}</p>
            </div>
          </a>
          <a href={`mailto:${CONTACT.email}`} className={contactCardClass}>
            <div className={iconWrapClass}>
              <Mail className="h-5 w-5 text-cyan-400" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Email Support</h3>
              <p className="mt-1 text-sm text-zinc-400">{CONTACT.email}</p>
            </div>
          </a>

          <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
            <Clock className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-pulse-led rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-300">Average Response Time: Under 30 Minutes</span>
          </div>

          <ul className="mt-2 flex flex-wrap gap-2">
            {TRUST_BADGES.map((badge) => (
              <li key={badge} className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300">
                <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel p-6 sm:p-8">
          {status === "submitted" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              role="status"
              className="flex flex-col items-center justify-center gap-4 py-12 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30">
                <CheckCircle2 className="h-7 w-7 text-emerald-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">Thank you! Your inquiry is in.</h3>
              <p className="max-w-sm text-sm leading-[1.5] text-zinc-400">
                We will get back to you within 30 minutes with a fixed quote and timeline. For the fastest reply, message us on WhatsApp.
              </p>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Continue on WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                Send another inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>Your Name</label>
                <input type="text" name="name" id="name" autoComplete="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="contact-info" className={labelClass}>Email or Phone</label>
                <input type="text" name="contact" id="contact-info" autoComplete="email" placeholder="you@company.com or +91 99999 99999" required value={formData.contact} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="projectType" className={labelClass}>Project Type</label>
                <select name="projectType" id="projectType" required value={formData.projectType} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select a project type</option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className={labelClass}>Estimated Budget</label>
                <select name="budget" id="budget" required value={formData.budget} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select a budget range</option>
                  {BUDGET_RANGES.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="details" className={labelClass}>Project Details</label>
                <textarea name="details" id="details" rows={4} required placeholder="Tell us about your business, goals, and any reference websites you like." value={formData.details} onChange={handleChange} className={`${inputClass} resize-none`} />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500 hover:shadow-glow"
              >
                Send Inquiry
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

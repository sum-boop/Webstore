import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { MessageSquare, Phone, Mail, Send, Clock, ShieldCheck, Sparkles } from "lucide-react";
import type { InquiryFormData } from "../types";
const inputClass = "w-full rounded-xl border border-zinc-800 bg-zinc-900/90 p-3.5 text-white placeholder-zinc-500 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30";
const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400";
const cardClass = "group flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 transition-all hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]";
const iconWrapClass = "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-950/60 ring-1 ring-zinc-800";
export default function Contact() {
const [formData, setFormData] = useState<InquiryFormData>({ name: "", phone: "", email: "", projectType: "", budgetRange: "", timeline: "", details: "" });
const [submitted, setSubmitted] = useState<boolean>(false);
const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
if (submitted) setSubmitted(false);
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};
const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
e.preventDefault();
setSubmitted(true);
setFormData({ name: "", phone: "", email: "", projectType: "", budgetRange: "", timeline: "", details: "" });
};
return (
<section id="contact" className="relative bg-canvas px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
<div className="mx-auto max-w-7xl">
<div className="text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-400">
<Sparkles className="h-3.5 w-3.5" />
Start Your Project
</span>
<h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Let's Build Your High-Impact Website</h2>
<p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">
Get a free project estimate within 30 minutes. Tell us about your idea and we'll reply with a fixed quote, timeline, and next steps.
</p>
</div>
    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className={cardClass}>
          <div className={iconWrapClass}>
            <MessageSquare className="h-5 w-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">WhatsApp Chat</h3>
            <p className="mt-1 text-sm text-zinc-400">Instant replies during working hours</p>
          </div>
        </a>
        <a href="tel:+919999999999" className={cardClass}>
          <div className={iconWrapClass}>
            <Phone className="h-5 w-5 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Direct Phone Call</h3>
            <p className="mt-1 text-sm text-zinc-400">+91 99999 99999</p>
          </div>
        </a>
        <a href="mailto:hello@aistackstudio.com" className={cardClass}>
          <div className={iconWrapClass}>
            <Mail className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Email Support</h3>
            <p className="mt-1 text-sm text-zinc-400">hello@aistackstudio.com</p>
          </div>
        </a>

        <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <Clock className="h-4 w-4 text-emerald-400" />
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-emerald-300">Average Response Time: Under 30 Minutes</span>
        </div>

        <ul className="mt-2 flex flex-wrap gap-2">
          <li className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300">
            <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
            100% Satisfaction Guarantee
          </li>
          <li className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300">
            <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
            Clean & Scalable Code
          </li>
          <li className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-300">
            <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
            Post-Launch Support
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 sm:p-8">
        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30">
              <Send className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Inquiry Sent Successfully</h3>
            <p className="max-w-sm text-sm text-zinc-400">Thanks for reaching out. We will get back to you within 30 minutes with a fixed quote and timeline.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className={labelClass}>Your Name</label>
              <input type="text" name="name" id="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number</label>
              <input type="tel" name="phone" id="phone" placeholder="+91 99999 99999" required value={formData.phone} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email Address</label>
              <input type="email" name="email" id="email" placeholder="you@company.com" required value={formData.email} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="projectType" className={labelClass}>Project Type</label>
              <select name="projectType" id="projectType" required value={formData.projectType} onChange={handleChange} className={`${inputClass} appearance-none`}>
                <option value="" disabled>Select a project type</option>
                <option value="Portfolio">Portfolio</option>
                <option value="Business Site">Business Site</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Custom Web App">Custom Web App</option>
              </select>
            </div>
            <div>
              <label htmlFor="budgetRange" className={labelClass}>Estimated Budget</label>
              <select name="budgetRange" id="budgetRange" required value={formData.budgetRange} onChange={handleChange} className={`${inputClass} appearance-none`}>
                <option value="" disabled>Select a budget range</option>
                <option value="Under ₹10,000">Under ₹10,000</option>
                <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
                <option value="₹25,000 – ₹75,000">₹25,000 – ₹75,000</option>
                <option value="₹75,000+">₹75,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="timeline" className={labelClass}>Preferred Timeline</label>
              <select name="timeline" id="timeline" required value={formData.timeline} onChange={handleChange} className={`${inputClass} appearance-none`}>
                <option value="" disabled>Select a timeline</option>
                <option value="ASAP (48 hours)">ASAP (48 hours)</option>
                <option value="Within 1 week">Within 1 week</option>
                <option value="2–4 weeks">2–4 weeks</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
            <div>
              <label htmlFor="details" className={labelClass}>Project Details</label>
              <textarea name="details" id="details" rows={4} required placeholder="Tell us about your business, goals, and any reference websites you like." value={formData.details} onChange={handleChange} className={`${inputClass} resize-none`} />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:shadow-[0_0_25px_rgba(99,102,241,0.45)]"
            >
              Send Inquiry
              <Send className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  </div>
</section>
);
}

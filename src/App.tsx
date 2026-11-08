import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
return (
<div className="relative min-h-screen overflow-x-hidden bg-zinc-950 font-sans text-zinc-100 antialiased selection:bg-indigo-500 selection:text-white">
<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(39,39,42,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(39,39,42,0.35)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
<div className="absolute -top-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-600/10 blur-3xl" />
<div className="absolute top-1/2 right-1/4 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl" />
</div>
<Navbar />
<main className="relative">
<Hero />
<Services />
<Showcase />
<Pricing />
<Contact />
</main>
<Footer />
</div>
);
}

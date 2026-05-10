import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { Trust } from "@/components/Trust";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Halcyon — The autonomous financial OS for 2028" },
      { name: "description", content: "Halcyon is the autonomous financial OS — programmable accounts, instant FX in 180 currencies, and AI that compounds your capital while you sleep." },
      { property: "og:title", content: "Halcyon — The autonomous financial OS" },
      { property: "og:description", content: "Programmable money. Borderless settlement. Quantum-ready vault. Built for the next decade of finance." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative bg-background text-foreground">
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Showcase />
        <Trust />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

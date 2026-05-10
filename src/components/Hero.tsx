import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden grain">
      {/* mesh background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 grid-lines opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* floating orbs */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="absolute top-1/4 -left-20 size-96 rounded-full bg-mint/20 blur-3xl float-y"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -300]) }}
        className="absolute bottom-1/4 -right-20 size-[28rem] rounded-full bg-electric/20 blur-3xl float-y"
      />

      <motion.div style={{ y, opacity, scale }} className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 glass rounded-full pl-2 pr-4 py-1.5 mb-8"
        >
          <span className="bg-mint text-primary-foreground rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider">
            v28.04
          </span>
          <span className="text-sm text-muted-foreground flex items-center gap-1.5">
            <Sparkles className="size-3.5 text-mint" />
            Adaptive AI treasury is now live
          </span>
        </motion.div>

        <h1 className="text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-[-0.04em] font-medium">
          {["The future of", "money,", "rendered."].map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="block"
            >
              {i === 1 ? <span className="font-display text-aurora">{line}</span> : <span className="text-gradient">{line}</span>}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10"
        >
          <p className="max-w-md text-lg text-muted-foreground leading-relaxed">
            Halcyon is the autonomous financial OS — programmable accounts, instant FX across 180 currencies, and AI that compounds your capital while you sleep.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#"
              className="group relative inline-flex items-center gap-3 bg-mint text-primary-foreground rounded-full pl-6 pr-2 py-2 font-medium overflow-hidden"
            >
              <span className="absolute inset-0 shimmer" />
              <span className="relative">Get early access</span>
              <span className="relative size-9 rounded-full bg-background/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-4 text-mint" />
              SOC 2 · ISO 27001 · FDIC insured to $2.5M
            </div>
          </div>
        </motion.div>

        {/* metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden glass-strong"
        >
          {[
            { v: "$48.2B", l: "Assets under management" },
            { v: "0.018%", l: "Average FX spread" },
            { v: "180+", l: "Currencies, instant" },
            { v: "99.999%", l: "Uptime, last 36 mo" },
          ].map((m, i) => (
            <div key={i} className="bg-background/40 p-6">
              <div className="font-display text-3xl md:text-4xl text-aurora">{m.v}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">{m.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

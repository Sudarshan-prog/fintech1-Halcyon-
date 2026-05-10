import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Brain, Globe2, Lock, Zap, LineChart, Layers } from "lucide-react";

const features = [
  { icon: Brain, title: "Autonomous treasury", desc: "AI agents reallocate capital across 40+ yield venues every 4 minutes — fully audited, fully reversible.", tag: "AI · Yield" },
  { icon: Globe2, title: "Borderless settlement", desc: "Send $50M to Lagos in 3 seconds. Native rails in 64 countries. Zero correspondent banks.", tag: "Global" },
  { icon: Zap, title: "Programmable money", desc: "Compose payments like code. Triggers, escrows, vesting and recurring flows in plain TypeScript.", tag: "API" },
  { icon: Lock, title: "Quantum-ready vault", desc: "Lattice-based cryptography, MPC custody and biometric multi-sig. Built for the post-RSA era.", tag: "Security" },
  { icon: LineChart, title: "Live market intelligence", desc: "Stream live order books, on-chain flows and macro signals — fused into one decision surface.", tag: "Markets" },
  { icon: Layers, title: "Composable rails", desc: "Stripe, ACH, FedNow, SEPA, PIX, UPI, Lightning, stablecoins — one ledger, one reconciliation.", tag: "Infra" },
];

export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <motion.div style={{ y }} className="absolute top-1/3 right-0 size-96 rounded-full bg-mint/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">// 002 — Platform</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl tracking-tight max-w-2xl leading-[0.95]">
              One platform.<br />Every <em className="text-aurora">primitive</em> of finance.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Twelve years of banking primitives, distilled into six composable surfaces. Build a neobank, a hedge fund, or a global payroll engine in a weekend.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-3xl overflow-hidden">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="group relative bg-background/60 p-8 lg:p-10 hover:bg-surface transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mint/0 via-transparent to-electric/0 group-hover:from-mint/5 group-hover:to-electric/5 transition-all duration-700" />
              <div className="relative">
                <div className="flex items-start justify-between mb-12">
                  <div className="size-12 rounded-2xl glass flex items-center justify-center group-hover:bg-mint group-hover:text-primary-foreground transition-all duration-500">
                    <f.icon className="size-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{f.tag}</span>
                </div>
                <h3 className="font-display text-2xl mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="mt-8 h-px bg-border group-hover:bg-mint transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

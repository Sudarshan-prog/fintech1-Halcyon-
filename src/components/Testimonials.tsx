import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Eva Lindqvist", role: "CFO, Northwind Capital", quote: "Halcyon replaced four vendors and a treasury analyst in our first month. The AI rebalancer alone earned its keep by Tuesday.", initial: "EL" },
  { name: "Marcus Okafor", role: "Founder, Kenta Labs", quote: "We moved $32M across 9 currencies last quarter without a single human in the loop. Reconciliation took eleven seconds.", initial: "MO" },
  { name: "Yuki Tanaka", role: "Head of Treasury, Atlas", quote: "I've used every banking API since 2014. Halcyon is the first one that feels like it was built by people who actually move money.", initial: "YT" },
  { name: "Priya Raman", role: "COO, Lumen Health", quote: "Onboarded payroll for 1,800 people across 14 countries in an afternoon. Our old provider quoted six weeks.", initial: "PR" },
  { name: "Daniel Weiss", role: "Partner, Vanta Ventures", quote: "Every portfolio company we onboard cuts their finance ops headcount by 40%. It's not a tool, it's a multiplier.", initial: "DW" },
  { name: "Sofia Marchetti", role: "CEO, Otto Robotics", quote: "The vault gave our board the confidence to hold treasury onchain. SOC 2, MPC, MAS — all of it, out of the box.", initial: "SM" },
  { name: "Omar Haddad", role: "VP Finance, Skyline", quote: "We saved $1.4M in FX spreads in year one. The dashboard is a piece of art. The execution is even better.", initial: "OH" },
  { name: "Hannah Petrov", role: "Treasurer, Mercury Coop", quote: "Programmable escrows let us launch a marketplace in eleven days. Halcyon is the rails and the engine.", initial: "HP" },
];

const RADIUS = 520;
const DURATION = 40;

export function Testimonials() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-20 relative">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">// 005 — Voices</span>
        <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
          Operators who already<br />live in <em className="text-aurora">2028</em>.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          12,000 teams orbit Halcyon every day. Here's what a few of them are saying.
        </p>
      </div>

      {/* 3D stage */}
      <div
        className="relative mx-auto h-[520px] w-full"
        style={{
          WebkitPerspective: "1600px",
          perspective: "1600px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* edge fades */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-30 pointer-events-none" />

        {/* floor reflection ring */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[1100px] h-40 rounded-[100%] border border-mint/10 pointer-events-none"
          style={{ transform: "translate(-50%, 60%) rotateX(75deg)" }} />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: 360 }}
          transition={{ duration: DURATION, ease: "linear", repeat: Infinity }}
        >
          {testimonials.map((t, i) => {
            const angle = (i / testimonials.length) * 360;
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <TestimonialCard t={t} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group glass-strong rounded-2xl p-6 shadow-elevated hover:shadow-glow w-[300px]"
    >
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="size-3 fill-mint text-mint" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-foreground/90">
        "{t.quote}"
      </p>
      <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-3">
        <div className="size-9 rounded-full bg-aurora flex items-center justify-center font-mono text-[11px] font-bold text-primary-foreground shrink-0">
          {t.initial}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-medium truncate">{t.name}</div>
          <div className="text-[11px] text-muted-foreground truncate">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, ArrowDownRight, ArrowUpRight } from "lucide-react";

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.95]);

  const tickers = [
    { sym: "BTC", val: "97,842.10", chg: "+2.41%", up: true },
    { sym: "ETH", val: "3,914.22", chg: "+1.18%", up: true },
    { sym: "EUR", val: "1.0824", chg: "−0.32%", up: false },
    { sym: "GOLD", val: "2,710.40", chg: "+0.84%", up: true },
    { sym: "SPY", val: "598.21", chg: "+0.42%", up: true },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">// 003 — Live</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
            Markets, <em className="text-aurora">alive</em> on your dashboard.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            A single canvas for every position you hold, every basis point you earn, and every flow leaving your balance sheet — refreshing 60 times per second.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px bg-border/50 rounded-2xl overflow-hidden max-w-md">
            {[
              { l: "Latency", v: "12ms" },
              { l: "Data sources", v: "240+" },
              { l: "Refresh rate", v: "60 Hz" },
              { l: "Decisions/sec", v: "1.2M" },
            ].map((s) => (
              <div key={s.l} className="bg-background/40 p-5">
                <div className="font-mono text-xs text-muted-foreground uppercase">{s.l}</div>
                <div className="font-display text-2xl text-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          style={{
            rotate,
            scale,
            WebkitPerspective: "1500px",
            perspective: "1500px",
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-aurora opacity-20 blur-3xl rounded-[2rem]" />
          <div
            className="relative glass-strong rounded-[2rem] p-6 shadow-elevated"
            style={{
              WebkitTransformStyle: "preserve-3d",
              transformStyle: "preserve-3d",
            }}
          >
            {/* header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-destructive" />
                <div className="size-2 rounded-full bg-gold" />
                <div className="size-2 rounded-full bg-mint" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">halcyon.app/portfolio</span>
              <span className="font-mono text-[10px] text-mint flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-mint pulse-ring relative" />
                LIVE
              </span>
            </div>

            {/* big number */}
            <div className="mb-2">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Net worth · USD</div>
              <div className="flex items-baseline gap-3 mt-2">
                <span className="font-display text-5xl md:text-6xl">$2,418,902</span>
                <span className="text-mint font-mono text-sm flex items-center gap-1">
                  <TrendingUp className="size-4" /> +18.4%
                </span>
              </div>
            </div>

            {/* sparkline svg */}
            <svg viewBox="0 0 400 100" className="w-full h-24 mt-4">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.88 0.18 155)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="oklch(0.88 0.18 155)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                d="M0,70 C40,68 60,40 100,45 S160,75 200,55 S260,20 300,30 S360,15 400,10"
                fill="none"
                stroke="oklch(0.88 0.18 155)"
                strokeWidth="2"
              />
              <path
                d="M0,70 C40,68 60,40 100,45 S160,75 200,55 S260,20 300,30 S360,15 400,10 L400,100 L0,100 Z"
                fill="url(#g)"
              />
            </svg>

            {/* tickers */}
            <div className="mt-6 space-y-2">
              {tickers.map((t, i) => (
                <motion.div
                  key={t.sym}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-2 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-aurora/30 flex items-center justify-center font-mono text-[10px] font-bold">
                      {t.sym}
                    </div>
                    <span className="font-medium text-sm">{t.sym}/USD</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm">{t.val}</span>
                    <span className={`font-mono text-xs flex items-center gap-1 w-16 justify-end ${t.up ? "text-mint" : "text-destructive"}`}>
                      {t.up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                      {t.chg}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -left-8 -bottom-6 glass-strong rounded-2xl p-4 w-56 hidden md:block float-y"
          >
            <div className="font-mono text-[10px] uppercase text-muted-foreground">AI Decision · 12s ago</div>
            <div className="text-sm mt-1">Rebalanced <span className="text-mint">+$48,210</span> from cash to T-bills</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-aurora opacity-20 blur-3xl rounded-[3rem] pointer-events-none" />
        <div className="relative glass-strong rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden grain">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[40rem] rounded-full bg-mint/15 blur-3xl pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">Limited 2028 cohort</span>
            <h2 className="mt-6 font-display text-5xl md:text-8xl leading-[0.95] tracking-tight">
              Step into the<br /><em className="text-aurora">next decade</em> of money.
            </h2>
            <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
              We're onboarding 1,200 teams this quarter. Reserve your seat — first 100 get a dedicated treasury strategist for life.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="glass rounded-full pl-2 pr-2 py-2 flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="founder@yourcompany.com"
                  className="bg-transparent outline-none px-4 py-1 text-sm w-full sm:w-72 placeholder:text-muted-foreground"
                />
                <button className="group bg-mint text-primary-foreground rounded-full pl-5 pr-2 py-2 text-sm font-medium flex items-center gap-2">
                  Request access
                  <span className="size-7 rounded-full bg-background/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </button>
              </div>
            </div>
            <p className="mt-6 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
              No credit pull · 90s onboarding · Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

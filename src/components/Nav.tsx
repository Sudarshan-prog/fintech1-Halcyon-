import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Nav() {
  const { scrollY } = useScroll();
  const padY = useTransform(scrollY, [0, 120], [20, 10]);
  const width = useTransform(scrollY, [0, 200], ["96%", "72%"]);
  const blur = useTransform(scrollY, [0, 120], [0, 1]);

  return (
    <motion.header
      style={{ paddingTop: padY, paddingBottom: padY }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <motion.nav
        style={{ width }}
        className="pointer-events-auto glass-strong rounded-full px-6 py-3 flex items-center justify-between relative"
      >
        <a href="#" className="flex items-center gap-2">
          <div className="relative size-7 rounded-md bg-aurora">
            <div className="absolute inset-0 rounded-md bg-background/30" />
            <div className="absolute inset-[3px] rounded-[5px] bg-aurora" />
          </div>
          <span className="font-display text-xl tracking-tight">Halcyon</span>
          <span className="font-mono text-[10px] text-muted-foreground ml-1">/28</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {["Platform", "Markets", "Vault", "Pricing", "Docs"].map((l) => (
            <li key={l}>
              <a href="#" className="hover:text-foreground transition-colors relative group">
                {l}
                <span className="absolute -bottom-1 left-0 w-full h-px bg-mint scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="group flex items-center gap-1.5 bg-mint text-primary-foreground rounded-full pl-4 pr-2 py-1.5 text-sm font-medium hover:shadow-glow transition-all"
        >
          Open account
          <span className="size-6 rounded-full bg-background/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
            <ArrowUpRight className="size-3.5" />
          </span>
        </a>
      </motion.nav>
    </motion.header>
  );
}

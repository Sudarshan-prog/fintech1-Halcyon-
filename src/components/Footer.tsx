export function Footer() {
  return (
    <footer className="relative border-t border-border/50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-md bg-aurora" />
              <span className="font-display text-2xl">Halcyon</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              The autonomous financial OS for the next decade. Built in San Francisco, regulated globally.
            </p>
          </div>
          {[
            { t: "Platform", l: ["Accounts", "Treasury", "FX", "Cards", "API"] },
            { t: "Company", l: ["About", "Manifesto", "Careers", "Press"] },
            { t: "Resources", l: ["Docs", "Status", "Security", "Changelog"] },
          ].map((c) => (
            <div key={c.t}>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-4">{c.t}</div>
              <ul className="space-y-3">
                {c.l.map((it) => (
                  <li key={it}>
                    <a href="#" className="text-sm hover:text-mint transition-colors">{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="font-display text-[clamp(4rem,18vw,16rem)] leading-tight tracking-[-0.05em] text-aurora opacity-90 -mb-8 select-none">
          Halcyon
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border/50 text-xs text-muted-foreground font-mono">
          <span>© 2028 Halcyon Financial, Inc. · All rights reserved</span>
          <span>v28.04.0218 · uptime 99.999%</span>
        </div>
      </div>
    </footer>
  );
}

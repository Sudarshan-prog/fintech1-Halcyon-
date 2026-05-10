const items = ["Stripe", "Goldman", "Apple", "OpenAI", "BlackRock", "Visa", "Coinbase", "Plaid", "Ramp", "Mercury"];

export function Marquee() {
  return (
    <section className="relative py-12 border-y border-border/50 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex items-center gap-3 mb-6 max-w-7xl mx-auto px-6">
        <span className="size-1.5 rounded-full bg-mint animate-pulse" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by 12,000+ teams moving capital at scale
        </span>
      </div>
      <div className="flex marquee gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display text-4xl md:text-5xl text-muted-foreground/60 hover:text-foreground transition-colors">
            {it}
          </span>
        ))}
      </div>
    </section>
  );
}

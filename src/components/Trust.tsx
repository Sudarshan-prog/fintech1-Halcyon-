import { ShieldCheck, Fingerprint, Eye, KeyRound } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: ShieldCheck, k: "SOC 2 Type II", v: "Continuously audited since 2021" },
  { icon: Fingerprint, k: "Biometric multi-sig", v: "FaceID + Yubikey for every transfer over $10k" },
  { icon: KeyRound, k: "MPC custody", v: "Keys split across 3 sovereign jurisdictions" },
  { icon: Eye, k: "Open ledger", v: "Every basis point traceable, exportable, reconciled" },
];

export function Trust() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint">// 004 — Trust</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Built like a bank.<br />Audited like an <em className="text-aurora">aircraft</em>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Halcyon holds a US national trust charter, EU EMI license and a Singapore MAS Major Payment Institution license. Every line of code touching your money is reviewed by a third-party security firm before deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
            >
              <it.icon className="size-6 text-mint mb-4" />
              <div className="font-display text-xl">{it.k}</div>
              <div className="text-xs text-muted-foreground mt-2 leading-relaxed">{it.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

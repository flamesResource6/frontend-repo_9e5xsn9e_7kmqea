import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$59",
    cadence: "/mo",
    tagline: "For small teams getting started",
    features: ["100 bookings/mo", "Email support", "Basic CRM", "Payments"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$159",
    cadence: "/mo",
    tagline: "For growing operators",
    features: ["Unlimited bookings", "Advanced CRM", "Automations", "Priority support"],
    cta: "Get demo",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    tagline: "For large & multi-branch",
    features: ["SLA & SSO", "Multi-location", "Dedicated success", "Advanced security"],
    cta: "Talk to sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free, scale when you’re ready. Cancel anytime.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-2xl border ${t.highlight ? 'border-white/20 bg-white/[0.07] shadow-[0_30px_80px_-20px_rgba(255,255,255,0.08)]' : 'border-white/10 bg-white/[0.03]'} p-6`}
            >
              {t.highlight && (
                <div className="absolute -top-3 right-4 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">Popular</div>
              )}
              <div className="flex items-end gap-2">
                <div className="text-3xl font-semibold text-white">{t.price}</div>
                <div className="text-white/60">{t.cadence}</div>
              </div>
              <div className="mt-2 text-white/90 font-medium">{t.name}</div>
              <div className="text-sm text-white/60">{t.tagline}</div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-medium ${t.highlight ? 'bg-white text-black' : 'border border-white/10 text-white hover:bg-white/10'}`}>
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

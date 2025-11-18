import { motion } from "framer-motion";
import { Calendar, Cog, Rocket } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book a demo",
    desc: "See Sokoni in action and map it to your workflow.",
  },
  {
    icon: Cog,
    title: "Configure in days",
    desc: "Import products, set pricing, connect payments.",
  },
  {
    icon: Rocket,
    title: "Go live",
    desc: "Launch your site and start taking bookings.",
  },
];

export default function Flow() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Get started in three simple steps</h2>
          <p className="mt-3 text-white/70">A clear path from demo to launch—no heavy lift required.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

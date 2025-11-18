import { motion } from "framer-motion";

const logos = [
  'Aurora Tours',
  'Wayfinder',
  'Nomad Co.',
  'HighPeak',
  'BlueLagoon',
  'DesertLine'
];

export default function Customers() {
  return (
    <section id="customers" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Trusted by modern tour brands</h2>
          <p className="mt-3 text-white/70">Teams use Sokoni to streamline operations and deliver memorable experiences.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((name) => (
            <div key={name} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center text-sm text-white/70">
              {name}
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-white/80">“Sokoni simplified our bookings and manifests into one seamless flow. Our team saves hours every week.”</p>
              <footer className="mt-4 text-sm text-white/60">Operations Lead, Customer {i}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section id="bookings" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Bookings, ops, and CRM in one flow</h2>
            <p className="mt-3 text-white/70">Turn complex operations into a smooth, automated pipeline—reserve capacity, take payments, schedule departures, and keep travelers informed.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {[
                'Live availability calendar',
                'Deposits & refunds',
                'Room & seat allocation',
                'Automated emails & SMS',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4"
          >
            <div className="aspect-video rounded-xl bg-black/40 border border-white/10" />
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/70">
              <div className="rounded-lg bg-white/[0.06] px-3 py-2">Calendar</div>
              <div className="rounded-lg bg-white/[0.06] px-3 py-2">Manifests</div>
              <div className="rounded-lg bg-white/[0.06] px-3 py-2">Payments</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

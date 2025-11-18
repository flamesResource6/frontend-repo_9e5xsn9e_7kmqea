import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[78vh] min-h-[560px] overflow-hidden rounded-3xl border border-white/10 bg-black/60">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-10 lg:px-16 w-full">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
              >
                The operating system for modern tour companies
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 text-base md:text-lg text-white/80 max-w-xl"
              >
                Sokoni is a comprehensive platform for tours, bookings, and customer management. Centralize operations, automate workflows, and deliver delightful travel experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-5 py-3 text-sm font-medium text-white shadow-[0_20px_45px_-10px_rgba(251,146,60,0.6)]">
                  Start free trial
                </button>
                <button className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors">
                  Book a demo
                </button>
              </motion.div>

              <div className="mt-6 flex items-center gap-6 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  Live availability sync
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  Integrated payments
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-400" />
                  CRM & automations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

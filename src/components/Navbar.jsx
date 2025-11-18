import { Menu, Ticket, Plane, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg shadow-orange-500/30 flex items-center justify-center">
            <Plane className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-white font-semibold text-lg leading-none">sokoni</div>
            <div className="text-xs text-white/60 -mt-0.5">Tour Management</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#bookings" className="text-white/70 hover:text-white transition-colors">Bookings</a>
          <a href="#customers" className="text-white/70 hover:text-white transition-colors">Customers</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10 transition-colors">
            <Users className="h-4 w-4" />
            Sign in
          </button>
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_25px_-10px_rgba(251,146,60,0.7)]"
          >
            <Ticket className="h-4 w-4" />
            Get started
          </motion.button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

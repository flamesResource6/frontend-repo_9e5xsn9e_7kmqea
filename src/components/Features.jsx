import { CalendarCheck, CreditCard, MapPin, UsersRound, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Smart Bookings",
    desc: "Real-time inventory, flexible pricing, and automated confirmations across web and agents.",
  },
  {
    icon: UsersRound,
    title: "Customer CRM",
    desc: "Profiles, notes, segments, and lifecycle automations to nurture travelers at scale.",
  },
  {
    icon: CreditCard,
    title: "Payments & Invoicing",
    desc: "Multi-currency payments, deposits, refunds, and automated invoicing with reconciliation.",
  },
  {
    icon: MapPin,
    title: "Itinerary Builder",
    desc: "Drag-and-drop builder with templates, add-ons, and supplier management in one place.",
  },
  {
    icon: BarChart3,
    title: "Operations Dashboard",
    desc: "Staff assignments, departures, manifests, and exceptions—always in sync.",
  },
  {
    icon: Globe,
    title: "Omnichannel",
    desc: "Sell via website, marketplace, and agents. Unified inventory and pricing everywhere.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Everything you need to run tours</h2>
          <p className="mt-3 text-white/70">A focused toolkit designed for clarity, speed, and reliability.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
              <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shadow-sm">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

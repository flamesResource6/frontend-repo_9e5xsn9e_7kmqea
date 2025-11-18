export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/60">© 2025 sokoni — Tour Management Platform</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#pricing" className="text-white/60 hover:text-white">Pricing</a>
          <a href="#customers" className="text-white/60 hover:text-white">Customers</a>
          <a href="#" className="text-white/60 hover:text-white">Privacy</a>
          <a href="#" className="text-white/60 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

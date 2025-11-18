import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Customers from './components/Customers';
import Pricing from './components/Pricing';
import Flow from './components/Flow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white">
      {/* subtle, minimalist glow backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.06)_0%,rgba(17,24,39,0)_60%)]" />

      <div className="relative">
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 space-y-16 md:space-y-24 pb-20">
          <Hero />
          <Features />
          <Showcase />
          <Customers />
          <Pricing />
          <Flow />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App

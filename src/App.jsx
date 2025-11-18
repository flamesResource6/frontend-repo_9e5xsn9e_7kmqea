import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white">
      {/* glow backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(251,146,60,0.18)_0%,rgba(17,24,39,0)_60%)]" />

      <div className="relative">
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 space-y-16 md:space-y-24 pb-20">
          <Hero />
          <Features />
          <Showcase />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App

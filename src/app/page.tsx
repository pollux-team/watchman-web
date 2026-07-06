import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import CarouselView from "@/components/CarouselView";
import Privacy from "@/components/Privacy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />

      {/* Features — id needed for navbar scroll link */}
      <div id="features">
        <Features />
      </div>

      {/* App Tour — id needed for navbar IntersectionObserver */}
      <div id="app-tour">
        <CarouselView />
      </div>

      <Privacy />
      <CTA />
      <Footer />
    </main>
  );
}

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatementSection from "@/components/sections/StatementSection";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorks from "@/components/sections/HowItWorks";
import StatsSection from "@/components/sections/StatsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import PrizesSection from "@/components/sections/PrizesSection";
import VenueSection from "@/components/sections/VenueSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCta from "@/components/sections/FinalCta";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function App() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <Hero />
      <StatementSection />
      <AboutSection />
      <HowItWorks />
      <StatsSection />
      <TimelineSection />
      <PrizesSection />
      <VenueSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}

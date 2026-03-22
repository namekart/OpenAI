import { useEffect } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Integrations } from "@/components/sections/Integrations";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Benefits } from "@/components/sections/Benefits";
import { VoiceHighlight } from "@/components/sections/VoiceHighlight";
import { Industries } from "@/components/sections/Industries";
import { GetInTouch } from "@/components/sections/GetInTouch";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#contact") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Integrations />
        <HowItWorks />
        <Features />
        <Benefits />
        <VoiceHighlight />
        <Industries />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Integrations } from "@/components/sections/Integrations";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { VoiceHighlight } from "@/components/sections/VoiceHighlight";
import { Benefits } from "@/components/sections/Benefits";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { GetInTouch } from "@/components/sections/GetInTouch";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Integrations />
        <HowItWorks />
        <Features />
        <ProductShowcase />
        <VoiceHighlight />
        <Benefits />
        <Industries />
        <Testimonials />
        <GetInTouch />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

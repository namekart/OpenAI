import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PricingSection } from "@/components/sections/PricingSection";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

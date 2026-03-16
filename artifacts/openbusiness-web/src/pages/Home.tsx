import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CRMProduct } from "@/components/sections/CRMProduct";
import { ERPProduct } from "@/components/sections/ERPProduct";
import { GlobalCTA } from "@/components/sections/GlobalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30">
      <Navbar />
      <main className="flex-1">
        <CRMProduct />
        
        {/* Separator / Transition */}
        <div className="h-px w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
        
        <ERPProduct />
        <GlobalCTA />
      </main>
      <Footer />
    </div>
  );
}

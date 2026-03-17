import { Link, useLocation } from "wouter";
import { BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-lg"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
            <BrainCircuit className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            OpenBusiness<span className="text-primary">.ai</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/crm"
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/crm") ? "text-white" : "text-muted-foreground hover:text-white"
            )}
          >
            CRM Intelligence
          </Link>
          <Link
            href="/erp"
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/erp") ? "text-teal-400" : "text-muted-foreground hover:text-white"
            )}
          >
            ERP Intelligence
          </Link>
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/") && location === "/" ? "text-white" : "text-muted-foreground hover:text-white"
            )}
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
          <Button>Book Demo</Button>
        </div>
      </div>
    </header>
  );
}

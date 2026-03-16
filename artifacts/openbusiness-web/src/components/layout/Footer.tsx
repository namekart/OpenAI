import { BrainCircuit } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card/50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                OpenBusiness
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The intelligence layer for your existing business systems. Don't replace your CRM or ERP, just make them smarter.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              <li><button className="text-sm text-muted-foreground hover:text-primary transition-colors">CRM Intelligence</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-primary transition-colors">ERP Intelligence</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-primary transition-colors">Integrations</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-primary transition-colors">Security</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><button className="text-sm text-muted-foreground hover:text-primary transition-colors">About</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><button className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</button></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OpenBusiness.ai. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social placeholder icons could go here */}
            <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

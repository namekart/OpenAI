import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Activity } from "lucide-react";

export function GlobalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* CRM CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-gradient-to-br from-[#111827] to-[#0A0D14] border border-primary/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Make your CRM intelligent.</h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-sm">
                Stop doing manual data entry. Start closing more deals with AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => {}}>Start Using OpenBusiness</Button>
                <Button variant="outline" onClick={() => {}}>Book Demo</Button>
              </div>
            </div>
          </motion.div>

          {/* ERP CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 rounded-3xl bg-gradient-to-br from-[#06080C] to-[#040608] border border-teal-500/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-teal-500/5 group-hover:bg-teal-500/10 transition-colors" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-teal-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Make your ERP intelligent.</h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-sm">
                Operate your business with intelligence. Reduce complexity and automate workflows today.
              </p>
              <div className="flex gap-4">
                <Button variant="erp" onClick={() => {}}>Schedule a Demo</Button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

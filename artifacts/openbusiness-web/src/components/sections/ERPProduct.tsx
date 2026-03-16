import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MockWindow } from "@/components/ui/mock-window";
import { 
  BarChart3, Settings2, PackageSearch, Workflow, 
  AlertTriangle, LineChart, Zap, ArrowRight, Activity, TrendingUp
} from "lucide-react";

export function ERPProduct() {
  return (
    <section id="erp-intel" className="relative pt-32 pb-24 overflow-hidden border-t border-white/5 bg-[#080B12]">
      {/* Background glow ERP */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] opacity-30 pointer-events-none mix-blend-screen">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-glow-erp.png`} 
          alt="Abstract Glow ERP" 
          className="w-full h-full object-cover rounded-full blur-3xl opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-6 border border-teal-500/20">
              <Activity className="w-4 h-4" />
              <span>OpenBusiness ERP Intelligence</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gradient">
              Add AI Intelligence to <br className="hidden md:block"/> <span className="text-gradient-erp">Your ERP</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Connect to your existing ERP systems to monitor operations in real-time, automate complex workflows, and gain predictive business insights.
            </p>
            <Button size="lg" variant="erp" className="w-full sm:w-auto group" onClick={() => {}}>
              Schedule a Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* ERP MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-32 relative"
        >
           <MockWindow title="Operations Command Center" className="flex flex-col h-[500px]">
            {/* Top metrics bar */}
            <div className="bg-[#0A0D14] border-b border-white/5 p-4 flex justify-between items-center overflow-x-auto gap-4">
              {[
                { label: "Global Inventory Val", val: "$4.2M", up: true },
                { label: "Active Workflows", val: "1,204", up: true },
                { label: "Supply Chain Alerts", val: "3", up: false, alert: true },
                { label: "Fulfillment Rate", val: "98.4%", up: true },
              ].map((m, i) => (
                <div key={i} className="shrink-0">
                  <div className="text-xs text-muted-foreground mb-1">{m.label}</div>
                  <div className={`text-xl font-bold flex items-center gap-2 ${m.alert ? 'text-amber-400' : 'text-white'}`}>
                    {m.val}
                    {!m.alert && (m.up ? <TrendingUp className="w-3 h-3 text-teal-500" /> : <TrendingUp className="w-3 h-3 text-destructive rotate-180" />)}
                    {m.alert && <AlertTriangle className="w-4 h-4" />}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Main Area */}
            <div className="flex-1 flex bg-[#06080C]">
              {/* Chart area mock */}
              <div className="flex-1 p-6 border-r border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-medium">Supply Chain Efficiency Forecast</h3>
                  <div className="text-xs bg-white/5 px-2 py-1 rounded text-muted-foreground">30 Days</div>
                </div>
                {/* Abstract visualization of a chart */}
                <div className="h-48 w-full border-b border-l border-white/10 relative flex items-end justify-around pb-2 px-2">
                  {[40, 60, 45, 80, 75, 90, 85, 100].map((h, i) => (
                    <div key={i} className="w-[8%] rounded-t-sm bg-gradient-to-t from-teal-500/20 to-teal-500/80" style={{ height: `${h}%` }}></div>
                  ))}
                  <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-white/10"></div>
                  <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-white/10"></div>
                </div>
              </div>
              
              {/* Alert Feed */}
              <div className="w-80 p-4 bg-[#0A0D14] flex flex-col gap-3">
                <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-teal-400" /> AI Interventions
                </h3>
                {[
                  { title: "Low Stock: SK-102", action: "Auto-reordered 500 units based on predicted demand.", time: "10m ago" },
                  { title: "Invoice Discrepancy", action: "Flagged INV-8992 for manual review. 15% variance.", time: "1h ago" },
                  { title: "Route Optimization", action: "Rerouted 3 shipments avoiding storm path.", time: "3h ago" },
                ].map((alert, i) => (
                  <div key={i} className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                    <div className="text-sm font-medium text-white mb-1">{alert.title}</div>
                    <div className="text-xs text-muted-foreground mb-2">{alert.action}</div>
                    <div className="text-[10px] text-muted-foreground/50">{alert.time}</div>
                  </div>
                ))}
              </div>
            </div>
           </MockWindow>
        </motion.div>

        {/* ERP INTEGRATIONS */}
        <div className="text-center mb-32">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Seamlessly connects to</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-70">
            {['SAP', 'Oracle NetSuite', 'Microsoft Dynamics 365', 'Odoo', 'ERPNext'].map(erp => (
              <div key={erp} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                <span className="font-medium">{erp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ERP FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-3xl bg-card border border-white/10 hover:border-teal-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6">
              <PackageSearch className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Operational Intelligence</h3>
            <p className="text-muted-foreground text-sm">
              Monitor inventory levels intelligently, track performance metrics across departments, and receive predictive alerts before bottlenecks occur.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 rounded-3xl bg-card border border-white/10 hover:border-teal-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6">
              <Workflow className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Workflow Automation</h3>
            <p className="text-muted-foreground text-sm">
              Automate complex approval flows, trigger notifications based on custom rules, and let AI handle repetitive data entry and routing.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-8 rounded-3xl bg-card border border-white/10 hover:border-teal-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Decision Support</h3>
            <p className="text-muted-foreground text-sm">
              Generate instant business reports, query your operational data using natural language, and make executive decisions with AI-backed confidence.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

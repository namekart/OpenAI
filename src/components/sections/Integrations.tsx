import { motion } from "framer-motion";

export function Integrations() {
  const logos = [
    { name: "Salesforce", color: "text-[#00A1E0]" },
    { name: "HubSpot", color: "text-[#FF7A59]" },
    { name: "Zoho CRM", color: "text-[#2C365D]" },
    { name: "MS Dynamics", color: "text-[#002050]" },
    { name: "Odoo", color: "text-[#714B67]" },
    { name: "ERPNext", color: "text-[#0089FF]" }
  ];

  return (
    <section className="py-16 bg-white/[0.02] border-y border-white/[0.05] relative overflow-hidden" id="integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-8"
        >
          Works with the tools your business already uses
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
            >
              <span className={`font-bold text-lg tracking-tight text-white/80 ${logo.color.replace('text-', 'hover:text-')} transition-colors`}>
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Left: CRM/ERP box */}
            <div className="px-6 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-center min-w-[160px]">
              <p className="text-xs text-muted-foreground mb-1">Your Systems</p>
              <p className="text-sm font-semibold text-white">CRM / ERP</p>
              <div className="mt-2 flex justify-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#00A1E0]" />
                <span className="w-2 h-2 rounded-full bg-[#FF7A59]" />
                <span className="w-2 h-2 rounded-full bg-[#0089FF]" />
              </div>
            </div>
            {/* Arrow */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="hidden md:block w-12 h-[2px] bg-gradient-to-r from-white/20 to-primary" />
              <span className="text-primary text-lg md:-rotate-0 rotate-90">→</span>
            </div>
            {/* Center: OpenBusiness.ai hub */}
            <div className="px-8 py-5 rounded-xl bg-primary/10 border border-primary/30 text-center min-w-[200px] shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <div className="w-8 h-8 rounded-lg bg-primary/20 mx-auto mb-2 flex items-center justify-center">
                <span className="text-primary text-xs font-bold">AI</span>
              </div>
              <p className="text-sm font-bold text-white">OpenBusiness.ai</p>
              <p className="text-xs text-primary mt-1">Intelligence Layer</p>
            </div>
            {/* Arrow */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-accent text-lg md:-rotate-0 rotate-90">→</span>
              <div className="hidden md:block w-12 h-[2px] bg-gradient-to-r from-accent to-white/20" />
            </div>
            {/* Right: Outputs */}
            <div className="px-6 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-center min-w-[160px]">
              <p className="text-xs text-muted-foreground mb-2">AI Outputs</p>
              <div className="space-y-1">
                <p className="text-xs text-white bg-white/5 rounded px-2 py-0.5">Insights</p>
                <p className="text-xs text-white bg-white/5 rounded px-2 py-0.5">Automation</p>
                <p className="text-xs text-white bg-white/5 rounded px-2 py-0.5">Voice</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          No migration required. No data lock-in. Just AI on top of what you already have.
        </motion.p>
      </div>
    </section>
  );
}

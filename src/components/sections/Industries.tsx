import { motion } from "framer-motion";
import { Cloud, Factory, Building2, Briefcase, ShoppingBag, Stethoscope } from "lucide-react";

export function Industries() {
  const industries = [
    { name: "B2B SaaS", icon: <Cloud className="w-6 h-6" />, desc: "Churn prediction, trial conversion, and automated onboarding across systems" },
    { name: "Manufacturing", icon: <Factory className="w-6 h-6" />, desc: "Procurement optimization, vendor cost tracking, and supply chain alerts" },
    { name: "Professional Services", icon: <Briefcase className="w-6 h-6" />, desc: "Client revenue risk detection, project health monitoring, and billing automation" },
    { name: "Mid-Market Enterprise", icon: <Building2 className="w-6 h-6" />, desc: "Cross-department coordination, revenue forecasting, and operations intelligence" },
    { name: "Retail & E-Commerce", icon: <ShoppingBag className="w-6 h-6" />, desc: "Customer retention, inventory-to-billing sync, and reorder automation" },
    { name: "Healthcare", icon: <Stethoscope className="w-6 h-6" />, desc: "Patient engagement, billing reconciliation, and appointment follow-ups" },
  ];

  return (
    <section className="py-12 border-t border-white/[0.05] bg-[#080C16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3"
          >
            Industry fit
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-3"
          >
            Built for companies with 200+ employees
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto text-sm"
          >
            Every company running 2+ business systems has revenue leaking through the gaps. OpenBusiness.ai connects the dots across industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group flex flex-col items-center text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] text-primary flex items-center justify-center mb-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {ind.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{ind.name}</h3>
              <p className="text-[10px] text-muted-foreground leading-relaxed hidden lg:block">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

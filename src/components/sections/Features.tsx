import { motion } from "framer-motion";
import { ShieldAlert, TrendingDown, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

export function Features() {
  const useCases = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      title: "Churn Prevention",
      subtitle: "Detect at-risk accounts before it's too late",
      desc: "AI detects when a high-value customer's support tickets spike while their renewal is 30 days out — and acts across 4 systems in seconds.",
      color: "from-primary/20 to-transparent",
      borderColor: "group-hover:border-primary/50",
      shadowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      actions: [
        "Flags account as at-risk in Salesforce",
        "Drafts personalized retention email for CSM",
        "Creates escalation ticket in Freshdesk",
        "Blocks automated renewal invoice in ERP",
      ],
      systems: ["CRM", "Support", "Billing", "ERP"],
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-accent" />,
      title: "Cost Optimization",
      subtitle: "Catch vendor overspend automatically",
      desc: "AI notices a purchase order where pricing has drifted 15% above market — then surfaces comparisons and drafts a renegotiation email.",
      color: "from-accent/20 to-transparent",
      borderColor: "group-hover:border-accent/50",
      shadowColor: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
      actions: [
        "Surfaces price comparison from market data",
        "Drafts renegotiation email for procurement",
        "Queues for review and approval",
        "Tracks savings after renegotiation",
      ],
      systems: ["ERP", "Web Data", "Email"],
    },
    {
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      title: "Deal-to-Onboarding",
      subtitle: "2 days and 4 people — now done in seconds",
      desc: "A sales rep closes a deal in HubSpot. The AI automatically provisions the customer, creates invoices, and triggers onboarding — across every system.",
      color: "from-emerald-500/20 to-transparent",
      borderColor: "group-hover:border-emerald-500/50",
      shadowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      actions: [
        "Provisions customer in your product",
        "Creates invoice in NetSuite / Tally",
        "Sets up onboarding sequence in CS platform",
        "Sends welcome email automatically",
      ],
      systems: ["CRM", "Billing", "CS Platform", "Email"],
    },
  ];

  return (
    <section className="py-16 bg-background" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3"
          >
            Autonomous Use Cases
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Other tools show dashboards. <span className="text-gradient-primary">We fix the problems.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            OpenBusiness.ai detects problems across your CRM, support, and billing systems — then takes graduated action autonomously. Here's what that looks like in practice.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {useCases.map((uc, index) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 ${uc.borderColor} ${uc.shadowColor} flex flex-col`}
            >
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${uc.color} opacity-50 pointer-events-none transition-opacity duration-300 group-hover:opacity-100`} />

              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  {uc.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{uc.title}</h3>
                <p className="text-xs text-primary font-medium mb-3">{uc.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {uc.desc}
                </p>

                {/* AI Actions Mockup */}
                <div className="mt-auto rounded-xl bg-black/40 border border-white/10 overflow-hidden">
                  <div className="bg-white/5 px-3 py-2 border-b border-white/10 flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground font-medium">AI Actions (Autonomous)</span>
                    <div className="flex gap-1">
                      {uc.systems.map((sys) => (
                        <span key={sys} className="text-[8px] px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground border border-white/10">{sys}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 space-y-2">
                    {uc.actions.map((action, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-white/80">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

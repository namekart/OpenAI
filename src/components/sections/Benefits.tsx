import { motion } from "framer-motion";
import { Plug, Clock, Languages, ArrowRight } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: <Plug className="w-7 h-7 text-blue-400" />,
      iconBg: "bg-blue-500/10 border-blue-500/20",
      title: "No migration required",
      desc: "Connect to your existing CRM and ERP. OpenBusiness.ai adds AI intelligence on top — no data export, no disruption, no learning curve for your team.",
      link: "How it integrates"
    },
    {
      icon: <Clock className="w-7 h-7 text-violet-400" />,
      iconBg: "bg-violet-500/10 border-violet-500/20",
      title: "Reduce manual work",
      desc: "Automate data entry, follow-ups, and task logging. Your team focuses on high-value work while AI handles repetitive data tasks and customer communications.",
      link: "See automation"
    },
    {
      icon: <Languages className="w-7 h-7 text-indigo-400" />,
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
      title: "Multilingual engagement",
      desc: "Engage customers globally with voice and text agents that understand and respond in 50+ languages natively — without extra configuration or setup.",
      link: "Explore voice AI"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Why businesses choose OpenBusiness.ai
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Real outcomes that matter, built on the tools your team already trusts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/[0.02] border border-white/[0.06] p-8 rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${b.iconBg}`}>
                {b.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{b.desc}</p>
              <div className="mt-6 flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                <span>{b.link}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

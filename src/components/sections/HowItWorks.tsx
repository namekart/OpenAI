import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Connect",
      desc: "Connect your existing CRM or ERP in minutes via secure API."
    },
    {
      num: "02",
      title: "Understand",
      desc: "AI learns your business context, workflows, and data patterns."
    },
    {
      num: "03",
      title: "Intelligentize",
      desc: "Get real-time insights, smart automation, and deploy voice agents."
    },
    {
      num: "04",
      title: "Accelerate",
      desc: "Your team moves faster, customers get better service automatically."
    }
  ];

  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3"
          >
            Simple setup
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            How it works — 4 steps to AI-enabled business systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            No migration, no disruption. Just connect your existing tools and let AI start working for your team immediately.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="w-24 h-24 mx-auto bg-background border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse opacity-50" />
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

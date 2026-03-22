import { motion } from "framer-motion";
import { Eye, HandHelping, Zap, ArrowRight, Car } from "lucide-react";

export function Benefits() {
  const modes = [
    {
      icon: <Eye className="w-7 h-7 text-blue-400" />,
      iconBg: "bg-blue-500/10 border-blue-500/20",
      title: "Monitor Mode",
      timeline: "Week 1-4",
      desc: "AI observes all connected systems and sends a daily digest — \"5 accounts at risk, here's why, here's my recommendation.\" Your team validates the AI's judgment and corrects false positives.",
      humanRole: "Validates & corrects",
      trustLevel: "Building",
      trustColor: "bg-blue-500",
      trustWidth: "w-1/3",
    },
    {
      icon: <HandHelping className="w-7 h-7 text-violet-400" />,
      iconBg: "bg-violet-500/10 border-violet-500/20",
      title: "Assist Mode",
      timeline: "Month 2+",
      desc: "AI drafts the actions — pre-writes retention emails, pre-creates CRM tasks, pre-flags accounts for review. One click to approve and execute. The AI did 90% of the work.",
      humanRole: "Reviews & approves",
      trustLevel: "Established",
      trustColor: "bg-violet-500",
      trustWidth: "w-2/3",
    },
    {
      icon: <Zap className="w-7 h-7 text-emerald-400" />,
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      title: "Autonomous Mode",
      timeline: "Month 4+",
      desc: "For patterns the AI has been right about repeatedly, it just acts — updates CRM, notifies CSMs, pauses renewals, creates escalations — and sends a summary of what it did.",
      humanRole: "Gets summary, can override",
      trustLevel: "Earned",
      trustColor: "bg-emerald-500",
      trustWidth: "w-full",
    },
  ];

  return (
    <section className="py-16 bg-background" id="trust-ramp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3"
          >
            The Trust Ramp
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            From watching to acting — <span className="text-gradient-primary">at your pace</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Think of it like self-driving cars — Level 2 before Level 5. We prove we're right 50 times, then you gradually unlock autonomous action. You're always in control.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/[0.02] border border-white/[0.06] p-5 rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center ${mode.iconBg}`}>
                  {mode.icon}
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground font-medium">{mode.timeline}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{mode.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{mode.desc}</p>

              {/* Trust meter */}
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-muted-foreground">Trust Level: <span className="text-white font-medium">{mode.trustLevel}</span></span>
                  <span className="text-[10px] text-muted-foreground">Human: <span className="text-white font-medium">{mode.humanRole}</span></span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
                    className={`h-full rounded-full ${mode.trustColor} ${mode.trustWidth}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Car className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-white">Why this is a moat, not just a feature</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Once the AI has run for six months and proven reliable, switching away means going back to manual operations. The lock-in is behavioral, not contractual — every month, the AI earns more trust and handles more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

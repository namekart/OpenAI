import { motion } from "framer-motion";
import { LineChart, LayoutDashboard, Mic2 } from "lucide-react";

export function Features() {
  const pillars = [
    {
      icon: <LineChart className="w-6 h-6 text-primary" />,
      title: "CRM Intelligence",
      desc: "AI identifies follow-ups, drafts responses, summarizes interactions, and surfaces hidden opportunities in your pipeline.",
      color: "from-primary/20 to-transparent",
      borderColor: "group-hover:border-primary/50",
      shadowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      mockup: (
        <div className="mt-4 rounded-xl bg-black/40 border border-white/10 overflow-hidden">
          <div className="bg-white/5 px-3 py-2 border-b border-white/10 flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground font-medium">CRM · Pipeline View</span>
            <span className="text-[10px] text-primary">AI Active</span>
          </div>
          <div className="p-3 space-y-2">
            {[
              { name: "Acme Corp", stage: "Proposal", score: 92, color: "bg-green-500" },
              { name: "TechFlow Inc", stage: "Demo", score: 71, color: "bg-primary" },
              { name: "Retail Co", stage: "Follow-up", score: 45, color: "bg-yellow-500" },
            ].map((deal) => (
              <div key={deal.name} className="flex items-center justify-between bg-white/[0.03] rounded-lg px-3 py-2">
                <div>
                  <p className="text-[11px] font-medium text-white">{deal.name}</p>
                  <p className="text-[9px] text-muted-foreground">{deal.stage}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${deal.color}`} style={{width: `${deal.score}%`}} />
                  </div>
                  <span className="text-[10px] text-white font-mono">{deal.score}</span>
                </div>
              </div>
            ))}
            <div className="mt-2 p-2 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-[10px] text-primary font-medium">✦ AI: Draft follow-up for Retail Co now</p>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-accent" />,
      title: "ERP Intelligence",
      desc: "Monitor operations, surface workflow actions, predict inventory needs, and reduce manual data entry across your business.",
      color: "from-accent/20 to-transparent",
      borderColor: "group-hover:border-accent/50",
      shadowColor: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
      mockup: (
        <div className="mt-4 rounded-xl bg-black/40 border border-white/10 overflow-hidden">
          <div className="bg-white/5 px-3 py-2 border-b border-white/10 flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground font-medium">ERP · Operations</span>
            <span className="text-[10px] text-accent">3 Alerts</span>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="bg-white/[0.03] rounded-lg p-2 text-center">
                <p className="text-base font-bold text-white">847</p>
                <p className="text-[9px] text-muted-foreground">Orders Today</p>
              </div>
              <div className="bg-accent/10 rounded-lg p-2 text-center border border-accent/20">
                <p className="text-base font-bold text-accent">-12%</p>
                <p className="text-[9px] text-muted-foreground">Stock Level</p>
              </div>
            </div>
            <div className="flex h-12 items-end gap-1">
              {[60, 80, 55, 90, 70, 85, 65].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-accent/20 to-accent/50 rounded-t-sm" style={{height: `${h}%`}} />
              ))}
            </div>
            <div className="mt-2 p-2 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-[10px] text-accent font-medium">✦ AI: Reorder Product A — 3 days until stockout</p>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Mic2 className="w-6 h-6 text-indigo-400" />,
      title: "Voice AI Agents",
      desc: "Automate outbound calls, multilingual conversations, appointment reminders, and customer engagement at scale.",
      color: "from-indigo-500/20 to-transparent",
      borderColor: "group-hover:border-indigo-500/50",
      shadowColor: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
      mockup: (
        <div className="mt-4 rounded-xl bg-black/40 border border-white/10 overflow-hidden">
          <div className="bg-white/5 px-3 py-2 border-b border-white/10 flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground font-medium">Voice · Live Session</span>
            <span className="text-[10px] text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" /> Live</span>
          </div>
          <div className="p-3">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] text-indigo-400 font-bold">AI</span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-white font-medium">Calling 45 leads · EN / ES / AR</p>
                <div className="flex gap-0.5 mt-1 items-end h-4">
                  {[3,6,4,8,5,9,4,7,3,6].map((h,i) => (
                    <motion.div key={i} animate={{height:[`${h}px`,`${h*2}px`,`${h}px`]}} transition={{duration:0.8,repeat:Infinity,delay:i*0.1}} className="w-1 bg-indigo-400 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] rounded-lg p-2 mb-2">
              <p className="text-[10px] text-muted-foreground">Transcript:</p>
              <p className="text-[10px] text-white mt-0.5">"Your appointment is confirmed for Friday at 2 PM..."</p>
            </div>
            <div className="flex gap-1">
              <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-300 text-[9px] border border-green-500/20">Positive</span>
              <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-[9px] border border-primary/20">Confirmed</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-background" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3"
          >
            Platform capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Spot opportunities, automate, and collect insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            OpenBusiness.ai sits above your CRM and ERP as an intelligent operating layer — turning static databases into proactive, AI-driven business engines.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 ${pillar.borderColor} ${pillar.shadowColor} flex flex-col`}
            >
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${pillar.color} opacity-50 pointer-events-none transition-opacity duration-300 group-hover:opacity-100`} />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>
                <div className="mt-auto">
                  {pillar.mockup}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Sparkles, Shield, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-ambient-glow.png`}
          alt="Ambient Glow"
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
      </div>

      {/* Central radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>AI Workforce for Your Business Stack</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
          >
            An AI Workforce That <span className="text-gradient-primary">Operates Across</span> Your Entire Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            It doesn't just tell you what's wrong — <span className="text-white font-medium">it fixes it.</span> OpenBusiness.ai detects revenue risks across your CRM, support desk, and billing systems, then takes action autonomously.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <HoverBorderGradient
              as="a"
              href="/#contact"
              containerClassName="rounded-full"
              className="bg-[#0A0E1A] text-white flex items-center justify-center px-6 py-3 font-semibold text-base gap-2"
            >
              Get Your 48-Hour Report
              <ArrowRight className="w-4 h-4" />
            </HoverBorderGradient>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mt-6 justify-center lg:justify-start">
              <span className="flex items-center gap-1.5"><span className="text-green-400 font-bold">&#10003;</span> 3 integrations, 5 min setup</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-1.5"><span className="text-primary font-bold">48hrs</span> to first insights</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-1.5"><span className="text-accent font-bold">10x</span> ROI on saved accounts</span>
            </div>
          </motion.div>
        </div>

        {/* Revenue Health Command Center Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex-1 w-full relative h-[420px] hidden md:block"
        >
          {/* Main Dashboard Mockup */}
          <div className="absolute inset-0 z-20 glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col bg-[#0F1423]">
            {/* Window Header */}
            <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="mx-auto px-4 py-1 rounded-md bg-white/5 text-[10px] text-muted-foreground flex items-center gap-2">
                app.openbusiness.ai / command-center
              </div>
            </div>

            <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
              {/* Revenue Health Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-white">Revenue Health — Q1 FY26</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">Live</span>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Target", val: "₹4.2 Cr", sub: "Annual" },
                  { label: "Forecast", val: "₹3.8 Cr", sub: "90% conf." },
                  { label: "At-Risk", val: "₹40L", sub: "8 accounts", alert: true },
                ].map((stat, i) => (
                  <div key={i} className={`rounded-lg p-3 border ${stat.alert ? 'bg-red-500/5 border-red-500/20' : 'bg-white/5 border-white/10'}`}>
                    <p className="text-[10px] text-muted-foreground mb-1">{stat.label}</p>
                    <p className={`text-lg font-bold leading-none ${stat.alert ? 'text-red-400' : 'text-white'}`}>{stat.val}</p>
                    <p className="text-[9px] text-muted-foreground mt-0.5">{stat.sub}</p>
                  </div>
                ))}
              </div>

              {/* At-Risk Account */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-3 h-3 text-amber-400" />
                  <span className="text-[10px] font-semibold text-amber-400">CRITICAL — Churn Risk Detected</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-white">TechNova Solutions — ₹15L ARR</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-400">High Risk</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[9px] text-muted-foreground">
                  <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-400" /> 8 support tickets in 14 days</span>
                  <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-amber-400" /> Renewal in 30 days</span>
                  <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-orange-400" /> Invoice overdue 22 days</span>
                  <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-yellow-400" /> Champion inactive 45 days</span>
                </div>
              </div>

              {/* AI Actions */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span className="text-[10px] font-bold text-primary">AI Actions This Week</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { text: "12 follow-up emails sent — 3 replied", icon: CheckCircle2 },
                    { text: "₹4.2L recovered from overdue payments", icon: TrendingUp },
                    { text: "2 renewals paused for review", icon: Shield },
                  ].map((action, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] text-white/80">
                      <action.icon className="w-3 h-3 text-green-400 shrink-0" />
                      <span>{action.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 z-30"
          >
            <div className="glass-card p-3 rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00A1E0]/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#00A1E0]" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground">Connected</p>
                <p className="text-xs font-semibold text-white">Salesforce CRM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-2 z-30"
          >
            <div className="glass-card p-3 rounded-xl flex items-center gap-3 border-accent/30 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-[10px] text-accent">Revenue Risk</p>
                <p className="text-xs font-semibold text-white">₹40L At-Risk</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[20%] -right-8 z-30"
          >
            <div className="glass-card p-3 rounded-xl flex items-center gap-3 border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
              </div>
              <div>
                <p className="text-[10px] text-green-400">AI Recovered</p>
                <p className="text-xs font-semibold text-white">₹4.2L This Week</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

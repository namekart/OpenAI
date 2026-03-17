import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BrainCircuit, ArrowRight, Zap, BarChart3, Sparkles, Activity, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

const PRODUCTS = [
  {
    href: "/crm",
    accent: "primary",
    accentHex: "#6366f1",
    accentTw: "primary",
    icon: <Sparkles className="w-7 h-7 text-indigo-400" />,
    badge: "CRM Intelligence",
    headline: "Add an AI Brain to Your CRM",
    sub: "OpenBusiness.ai connects to your existing CRM and automatically surfaces insights, drafts communications, suggests next actions, and automates follow-ups.",
    integrations: ["Salesforce", "HubSpot", "Zoho", "Dynamics", "Pipedrive"],
    features: [
      { icon: <Zap className="w-4 h-4" />, label: "AI Lead Prioritization" },
      { icon: <BarChart3 className="w-4 h-4" />, label: "Deal Insights" },
      { icon: <BrainCircuit className="w-4 h-4" />, label: "Communication AI" },
      { icon: <Sparkles className="w-4 h-4" />, label: "Auto Follow-ups" },
    ],
    cta: "Explore CRM Intelligence",
    ctaClass: "bg-indigo-600 hover:bg-indigo-500 text-white",
    borderClass: "border-indigo-500/20 hover:border-indigo-500/40",
    glowClass: "from-indigo-900/20 via-transparent to-transparent",
    dotClass: "bg-indigo-500",
  },
  {
    href: "/erp",
    accentHex: "#14b8a6",
    accentTw: "teal-400",
    icon: <Activity className="w-7 h-7 text-teal-400" />,
    badge: "ERP Intelligence",
    headline: "Add AI Intelligence to Your ERP",
    sub: "OpenBusiness.ai connects to your ERP systems and helps you monitor operations, automate workflows, and gain real-time insights — without replacing anything.",
    integrations: ["Odoo", "SAP", "NetSuite", "ERPNext", "Dynamics"],
    features: [
      { icon: <BarChart3 className="w-4 h-4" />, label: "Operational Intelligence" },
      { icon: <Zap className="w-4 h-4" />, label: "Workflow Automation" },
      { icon: <BrainCircuit className="w-4 h-4" />, label: "Decision Support" },
      { icon: <Activity className="w-4 h-4" />, label: "Performance Tracking" },
    ],
    cta: "Explore ERP Intelligence",
    ctaClass: "bg-teal-500 hover:bg-teal-400 text-black font-semibold",
    borderClass: "border-teal-500/20 hover:border-teal-500/40",
    glowClass: "from-teal-900/20 via-transparent to-transparent",
    dotClass: "bg-teal-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative pt-40 pb-24 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-indigo-900/30 via-transparent to-transparent rounded-full blur-3xl" />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground mb-8"
            >
              <BrainCircuit className="w-4 h-4 text-primary" />
              AI Intelligence Layer — No Migration Required
            </motion.div>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="text-6xl sm:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Make Your Business<br />
              <span className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">Systems Smarter</span>
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              OpenBusiness.ai is an AI intelligence layer that connects to your existing CRM and ERP systems — enhancing them with insights, automation, and AI-powered assistance. No replacement needed.
            </motion.p>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/crm">
                <button className="inline-flex items-center justify-center h-12 px-8 text-base rounded-lg font-medium bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-[0.98]">
                  Explore CRM Intelligence <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
              <Link href="/erp">
                <button className="inline-flex items-center justify-center h-12 px-8 text-base rounded-lg font-medium border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all active:scale-[0.98]">
                  Explore ERP Intelligence
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Product Cards */}
        <section className="pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.href}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className={cn(
                  "group relative rounded-3xl border bg-gradient-to-br from-[#0d1117] to-[#080b12] overflow-hidden transition-all duration-300",
                  p.borderClass
                )}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.glowClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 p-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      {p.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{p.badge}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-3 leading-snug">{p.headline}</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{p.sub}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {p.features.map((f) => (
                      <div key={f.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-white/50">{f.icon}</span>
                        {f.label}
                      </div>
                    ))}
                  </div>

                  {/* Integrations */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {p.integrations.map((name) => (
                      <span key={name} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full ${p.dotClass}`} />
                        {name}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href={p.href}>
                    <button className={cn(
                      "inline-flex items-center justify-center h-10 px-4 py-2 rounded-lg font-medium transition-all active:scale-[0.98]",
                      p.ctaClass
                    )}>
                      {p.cta} <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trust bar */}
        <section className="pb-24 text-center px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Works on top of your existing systems</p>
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-40">
              {["Salesforce", "HubSpot", "Zoho CRM", "SAP", "NetSuite", "Odoo", "Pipedrive", "Dynamics"].map((name) => (
                <span key={name} className="text-sm font-medium text-white">{name}</span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

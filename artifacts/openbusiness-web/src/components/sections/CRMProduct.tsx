import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MockWindow } from "@/components/ui/mock-window";
import { 
  Sparkles, TrendingUp, BellRing, Mail, CheckCircle2, 
  Database, Target, Activity, ShieldCheck, ArrowRight, BrainCircuit
} from "lucide-react";

export function CRMProduct() {
  return (
    <section id="crm-intel" className="relative pt-32 pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-40 pointer-events-none mix-blend-screen">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-glow-crm.png`} 
          alt="Abstract Glow" 
          className="w-full h-full object-cover rounded-full blur-3xl opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span>OpenBusiness CRM Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gradient">
              Add an <span className="text-gradient-primary">AI Brain</span> to <br className="hidden md:block"/> Your CRM
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Keep your existing CRM. Add AI intelligence. Automatically surface insights, draft communications, suggest next actions, and automate follow-ups.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto group" onClick={() => {}}>
                Book Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => {}}>
                Connect Your CRM
              </Button>
            </div>
          </motion.div>
        </div>

        {/* HERO MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-32 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20 pointer-events-none bottom-0 h-40" />
          <MockWindow title="OpenBusiness CRM Intelligence" className="h-[600px] flex">
            {/* Sidebar */}
            <div className="w-64 border-r border-white/5 bg-black/20 p-4 hidden md:flex flex-col gap-6">
              <div className="space-y-1">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Intelligence</div>
                {['Overview', 'Pipeline Health', 'Lead Prioritization', 'Communications'].map((item, i) => (
                  <div key={item} className={`px-3 py-2 rounded-lg text-sm ${i===0 ? 'bg-primary/20 text-primary font-medium' : 'text-muted-foreground hover:bg-white/5 cursor-pointer'}`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Main Content */}
            <div className="flex-1 bg-[#0A0D14] p-6 overflow-hidden relative">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Pipeline Insights</h2>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Sync Active
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { label: "High Risk Deals", val: "4", trend: "-2 from last week", icon: Target, col: "text-amber-400" },
                  { label: "Suggested Actions", val: "12", trend: "Ready to review", icon: BrainCircuit, col: "text-primary" },
                  { label: "Win Probability Avg", val: "68%", trend: "+5% vs last month", icon: TrendingUp, col: "text-emerald-400" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-white/5 ${stat.col}`}><stat.icon className="w-4 h-4" /></div>
                      <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.val}</div>
                    <div className="text-xs text-muted-foreground">{stat.trend}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">Prioritized Actions</h3>
                {[
                  { company: "Acme Corp", action: "Draft follow-up email", reason: "No response in 4 days. Probability dropping.", score: 89 },
                  { company: "Globex Inc", action: "Schedule technical review", reason: "Stakeholders recently visited pricing page.", score: 94 },
                  { company: "Soylent", action: "Send ROI calculation", reason: "Competitor mention detected in last call notes.", score: 76 },
                ].map((act, i) => (
                  <div key={i} className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10">
                        <span className="text-sm font-bold text-white">{act.company.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-medium text-white flex items-center gap-2">
                          {act.company} 
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Score: {act.score}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{act.reason}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="secondary" onClick={() => {}}>{act.action}</Button>
                  </div>
                ))}
              </div>
            </div>
          </MockWindow>
        </motion.div>

        {/* INTEGRATIONS */}
        <div className="text-center mb-32">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Works with the CRM tools your team already uses</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-70">
            {['Salesforce', 'HubSpot', 'Zoho CRM', 'Microsoft Dynamics', 'Pipedrive'].map(crm => (
              <div key={crm} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-medium">{crm}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground text-sm">
            Connect your CRM in minutes. No migration required.
          </p>
        </div>

        {/* FEATURE 1: Sales Intelligence */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <Target className="w-4 h-4" /> AI Sales Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Focus on the deals that actually matter.</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              OpenBusiness AI analyzes your pipeline health, scores leads based on historical win data, and alerts you when opportunities require attention.
            </p>
            <ul className="space-y-4">
              {[
                { title: "AI Lead Prioritization", desc: "Identify the most promising leads automatically." },
                { title: "Deal Insights", desc: "AI analyzes pipeline health and suggests actions." },
                { title: "Opportunity Alerts", desc: "Get pinged before deals go cold." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <MockWindow title="Lead Scoring Engine">
              <div className="p-6 bg-[#0A0D14] space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div className="font-medium text-sm text-muted-foreground">Lead Name</div>
                  <div className="font-medium text-sm text-muted-foreground">AI Score</div>
                </div>
                {[
                  { name: "Acme Corp Renewal", score: 98, color: "text-emerald-400", bg: "bg-emerald-400/10" },
                  { name: "TechNova Q3 Expansion", score: 85, color: "text-emerald-400", bg: "bg-emerald-400/10" },
                  { name: "Initech Initial Pitch", score: 42, color: "text-amber-400", bg: "bg-amber-400/10" },
                  { name: "Stark Ind. Follow-up", score: 12, color: "text-destructive", bg: "bg-destructive/10" },
                ].map((lead, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                    <div className="font-medium">{lead.name}</div>
                    <div className={`px-2 py-1 rounded-md text-xs font-bold ${lead.bg} ${lead.color}`}>
                      {lead.score} / 100
                    </div>
                  </div>
                ))}
              </div>
            </MockWindow>
          </motion.div>
        </div>

        {/* FEATURE 2: Communication Assistant */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 md:order-1">
            <MockWindow title="Compose">
              <div className="p-1 bg-[#1A1D24]">
                <div className="bg-[#0A0D14] rounded-lg p-4 h-[300px] flex flex-col relative">
                  <div className="flex border-b border-white/10 pb-3 mb-3 text-sm">
                    <span className="text-muted-foreground w-12">To:</span>
                    <span className="text-white">client@acmecorp.com</span>
                  </div>
                  <div className="flex border-b border-white/10 pb-3 mb-3 text-sm">
                    <span className="text-muted-foreground w-12">Subj:</span>
                    <span className="text-white">Following up on our Q3 goals</span>
                  </div>
                  <div className="text-sm text-muted-foreground flex-1 relative">
                    <p className="mb-4">Hi Sarah,</p>
                    <p className="mb-4">Great speaking with you yesterday. As discussed, I've attached the ROI projections tailored to your Q3 expansion goals.</p>
                    <p className="opacity-50">Let me know if you have time Thursday for a quick review.</p>
                    
                    {/* AI Suggestion popover mock */}
                    <div className="absolute bottom-2 right-2 p-3 rounded-xl bg-primary shadow-lg shadow-primary/20 flex flex-col gap-2 max-w-[200px] animate-pulse">
                      <div className="text-xs text-primary-foreground font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> AI Suggestion
                      </div>
                      <div className="text-xs text-primary-foreground/90">
                        Based on notes, mention the "security compliance" requirement she asked about.
                      </div>
                      <button className="text-xs bg-white text-primary px-2 py-1 rounded font-medium mt-1">Apply Suggestion</button>
                    </div>
                  </div>
                </div>
              </div>
            </MockWindow>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-6">
              <Mail className="w-4 h-4" /> AI Communication
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Write better emails, faster.</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let AI draft context-aware follow-ups, summarize long email threads, and generate meeting notes instantly based on your CRM data.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {['Generate follow-ups', 'Draft responses', 'Summarize threads', 'Create meeting notes'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/5">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* FEATURE 3: Automated Follow-ups & Data */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-3xl bg-card border border-white/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <BellRing className="w-32 h-32 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Never let a deal go cold</h3>
            <p className="text-muted-foreground mb-6 relative z-10 max-w-sm">
              Smart task automation, deal inactivity alerts, and suggested reminders ensure every opportunity is tracked to conclusion.
            </p>
            <div className="space-y-3 relative z-10">
              <div className="p-3 rounded-lg bg-white/5 flex items-center gap-3 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                <span className="text-sm font-medium">Alert: "Widget Co" inactive for 14 days</span>
                <Button size="sm" variant="secondary" className="ml-auto" onClick={() => {}}>Nudge</Button>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 rounded-3xl bg-card border border-white/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Database className="w-32 h-32 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Keep CRM data pristine</h3>
            <p className="text-muted-foreground mb-6 relative z-10 max-w-sm">
              AI automatically detects duplicates, enriches contacts with missing data, and maintains perfect data hygiene without manual entry.
            </p>
            <div className="space-y-3 relative z-10">
              <div className="p-3 rounded-lg bg-white/5 flex items-center gap-3 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <div className="text-sm">
                  <div className="font-medium">Data Health Score: 99%</div>
                  <div className="text-muted-foreground text-xs">24 duplicates merged automatically today</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

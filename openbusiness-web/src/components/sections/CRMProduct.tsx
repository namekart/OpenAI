import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MockWindow } from "@/components/ui/mock-window";
import {
  Sparkles, TrendingUp, Mail, CheckCircle2, Database,
  Target, AlertTriangle, ArrowRight, BrainCircuit, Clock,
  BarChart3, Zap, Star, ShieldCheck
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const fadeLeft = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const fadeRight = { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } } };

export function CRMProduct() {
  return (
    <section id="crm-intel" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-40 pointer-events-none mix-blend-screen">
        <img src={`${import.meta.env.BASE_URL}images/hero-glow-crm.png`} alt="" className="w-full h-full object-cover rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── HERO ── */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4" /> OpenBusiness CRM Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Add an <span className="text-gradient-primary">AI Brain</span> to Your CRM
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Keep your existing CRM. Add AI intelligence on top. Surface insights, draft emails, detect at-risk deals, and automate follow-ups — without changing your workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="group w-full sm:w-auto">
                Book Demo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Connect Your CRM</Button>
            </div>
          </motion.div>
        </div>

        {/* ── HERO MOCKUP ── */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mb-28 relative">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
          <MockWindow title="OpenBusiness CRM Intelligence" className="h-[560px] flex">
            <div className="w-52 border-r border-white/5 bg-black/20 p-4 hidden md:flex flex-col gap-1.5">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Intelligence</div>
              {['Overview', 'Lead Priority', 'Deal Risk', 'Communications', 'Data Health'].map((item, i) => (
                <div key={item} className={`px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${i === 0 ? 'bg-primary/20 text-primary font-medium' : 'text-muted-foreground hover:bg-white/5'}`}>{item}</div>
              ))}
            </div>
            <div className="flex-1 bg-[#0A0D14] p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Pipeline Overview</h2>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" /> Salesforce Synced
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Hot Leads", val: "9", icon: Star, color: "text-amber-400", bg: "bg-amber-400/10" },
                  { label: "At-Risk Deals", val: "4", icon: AlertTriangle, color: "text-red-400", bg: "bg-red-400/10" },
                  { label: "AI Actions", val: "12", icon: Zap, color: "text-primary", bg: "bg-primary/10" },
                ].map((s, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className={`w-8 h-8 rounded-lg ${s.bg} flex items-center justify-center mb-3`}>
                      <s.icon className={`w-4 h-4 ${s.color}`} />
                    </div>
                    <div className="text-2xl font-bold mb-0.5">{s.val}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">AI Prioritized Actions</div>
                {[
                  { co: "Acme Corp", reason: "No response in 4 days — probability dropping", action: "Draft follow-up", score: 96, tag: "Hot", tc: "text-amber-400", bc: "bg-amber-400/10" },
                  { co: "Globex Inc", reason: "Visited pricing page 3× this week", action: "Schedule demo", score: 91, tag: "Warm", tc: "text-emerald-400", bc: "bg-emerald-400/10" },
                  { co: "Soylent Co", reason: "Competitor mentioned in last call notes", action: "Send analysis", score: 74, tag: "Risk", tc: "text-red-400", bc: "bg-red-400/10" },
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10 shrink-0 text-xs font-bold">{a.co[0]}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-medium text-sm text-white">{a.co}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${a.bc} ${a.tc}`}>{a.tag}</span>
                      </div>
                      <div className="text-xs text-muted-foreground truncate">{a.reason}</div>
                    </div>
                    <button className={`text-xs px-2 py-1 rounded-lg ${a.bc} ${a.tc} font-medium shrink-0`}>{a.action}</button>
                  </div>
                ))}
              </div>
            </div>
          </MockWindow>
        </motion.div>

        {/* ── INTEGRATIONS ── */}
        <div className="text-center mb-28">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">Works with the CRM tools your team already uses</p>
          <div className="flex flex-wrap justify-center items-center gap-3 mb-5">
            {['Salesforce', 'HubSpot', 'Zoho CRM', 'Microsoft Dynamics', 'Pipedrive'].map(crm => (
              <div key={crm} className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:border-primary/30 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">{crm}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Connect in minutes. No migration. No data exported.</p>
        </div>

        {/* ── SECTION 1: AI Sales Intelligence (Lead Priority + Deal Risk + Next Steps) ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-semibold mb-5 border border-amber-400/20">
              <Target className="w-3.5 h-3.5" /> AI Sales Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Know which deals need attention — right now.</h2>
            <p className="text-muted-foreground mb-7 text-lg leading-relaxed">
              AI analyzes every signal in your CRM — activity, engagement, deal age, communication patterns — and tells your team exactly where to focus: which leads are hot, which deals are at risk, and what to do next.
            </p>
            <div className="space-y-4">
              {[
                { icon: Star, label: "Lead Prioritization", desc: "AI scores every lead in real time based on engagement signals, response history, and deal size." },
                { icon: AlertTriangle, label: "Deal Risk Detection", desc: "Flags deals showing warning signs: long inactivity, missing decision-makers, declining communication." },
                { icon: BrainCircuit, label: "Next-Step Suggestions", desc: "Based on deal stage and history, AI recommends the exact action: send pricing, schedule demo, loop in manager." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white mb-0.5">{item.label}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
            <MockWindow title="AI Sales Intelligence">
              <div className="p-5 bg-[#0A0D14] space-y-3">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Lead Priority Queue</div>
                {[
                  { name: "Acme Corp — Enterprise", signals: "Email 4× · Pricing page visit", score: 98, tag: "Hot", tc: "text-amber-400", bc: "bg-amber-400/10" },
                  { name: "TechNova — Q3 Expansion", signals: "Demo done · Follow-up sent", score: 85, tag: "Hot", tc: "text-amber-400", bc: "bg-amber-400/10" },
                  { name: "BlueOcean — Pilot Deal", signals: "1 reply, no recent activity", score: 47, tag: "Warm", tc: "text-emerald-400", bc: "bg-emerald-400/10" },
                  { name: "Initech — Cold Intro", signals: "No activity in 12 days", score: 18, tag: "Cold", tc: "text-muted-foreground", bc: "bg-white/5" },
                ].map((lead, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-white truncate">{lead.name}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{lead.signals}</div>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${lead.bc} ${lead.tc} shrink-0`}>{lead.score}</span>
                  </div>
                ))}
                <div className="mt-3 p-3 rounded-xl bg-red-400/5 border border-red-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                    <span className="text-xs font-semibold text-red-400">At-Risk: Contoso Deal — $48K</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground mb-2">No contact in 18 days. Decision-maker not engaged.</div>
                  <div className="w-full bg-white/10 rounded-full h-1">
                    <div className="bg-red-400 h-1 rounded-full w-[87%]" />
                  </div>
                  <div className="text-[10px] text-red-400 mt-1">Risk Score: 87%</div>
                </div>
              </div>
            </MockWindow>
          </motion.div>
        </div>

        {/* ── SECTION 2: AI Communication (Email drafting + Summaries + Text improvement) ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="order-2 md:order-1">
            <MockWindow title="AI Communication Assistant">
              <div className="p-4 bg-[#0A0D14] space-y-3">
                <div className="bg-white/5 rounded-xl p-3 text-xs space-y-2 border border-white/10">
                  <div className="flex gap-2 pb-2 border-b border-white/10">
                    <span className="text-muted-foreground w-10">To:</span>
                    <span className="text-white">sarah@acmecorp.com</span>
                  </div>
                  <div className="text-muted-foreground/80 leading-relaxed pt-1">
                    Hi Sarah, great speaking last week. I've attached the ROI projections for your Q3 expansion. Let me know if Thursday works for a walkthrough.
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-2.5">
                    <Sparkles className="w-3.5 h-3.5" /> AI Writing Tools
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {['Improve Tone', 'Make Concise', 'Add CTA', 'Translate'].map(btn => (
                      <button key={btn} className="text-[11px] px-2 py-1.5 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors">{btn}</button>
                    ))}
                  </div>
                </div>
                <div className="bg-white/[0.02] rounded-xl p-3 border border-white/5 text-xs">
                  <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-primary" /> AI Suggestion
                  </div>
                  <div className="text-muted-foreground/70 mb-2 leading-relaxed">Based on call notes — mention the security compliance requirement she raised on Tuesday's call.</div>
                  <button className="text-xs px-3 py-1 rounded-lg bg-primary text-white font-medium">Apply Suggestion</button>
                </div>
                <div className="bg-white/[0.02] rounded-xl p-3 border border-white/5 text-xs space-y-1.5">
                  <div className="font-semibold text-white mb-1">📋 Meeting Summary — Acme Corp, Mar 15</div>
                  <div className="text-muted-foreground/70 leading-relaxed space-y-1">
                    <div>• Decision-maker confirmed budget of $45K approved</div>
                    <div>• Security compliance is a hard requirement</div>
                    <div>• <span className="text-primary">Next: Send security whitepaper by Friday</span></div>
                  </div>
                </div>
              </div>
            </MockWindow>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 border border-primary/20">
              <Mail className="w-3.5 h-3.5" /> AI Communication Assistant
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Draft better emails. Summarize every call. Faster.</h2>
            <p className="text-muted-foreground mb-7 text-lg leading-relaxed">
              AI sits alongside your CRM and helps your team communicate at a higher level — generating emails, refining tone, and turning voice notes or call transcripts into clean, actionable summaries.
            </p>
            <div className="space-y-4">
              {[
                { icon: Sparkles, label: "Improve This Text", desc: "Write a rough draft, click AI — get a clearer, professional version instantly." },
                { icon: Mail, label: "AI-Drafted Follow-ups", desc: "Generate full follow-up emails, proposals, and confirmations from CRM context in one click." },
                { icon: CheckCircle2, label: "Call & Meeting Summaries", desc: "Upload a voice note or transcript. AI outputs bullet-point summaries with next steps added to your CRM automatically." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white mb-0.5">{item.label}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── SECTION 3: Automation + Data Quality (side-by-side cards) ── */}
        <div className="grid md:grid-cols-2 gap-8 mb-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}
            className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-emerald-400/30 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5"><Clock className="w-40 h-40 text-emerald-400" /></div>
            <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-5">
              <Clock className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Smart Follow-up Automation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              No deal ever goes cold by accident. Describe your rule in plain English — "if no reply in 3 days, notify the owner" — and AI converts it into a live automation. It also triggers reminders when deals stall at a stage for too long, and auto-schedules CSV imports with intelligent field mapping.
            </p>
            <div className="space-y-2">
              {[
                { text: "Auto-reminders when deals go quiet", active: true },
                { text: "Natural language automation setup", active: true },
                { text: "AI-assisted CSV column mapping on import", active: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>
            {/* Mini mockup */}
            <div className="mt-6 p-3 rounded-xl bg-emerald-400/5 border border-emerald-400/20 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-white font-medium">Widget Co — inactive 14 days</span>
                <button className="ml-auto px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-400 font-medium">Nudge</button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-muted-foreground">Nexus Labs — Proposal stage, 8 days</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
            className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-teal-400/30 transition-colors relative overflow-hidden"
            transition={{ delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5"><Database className="w-40 h-40 text-teal-400" /></div>
            <div className="w-10 h-10 rounded-xl bg-teal-400/10 flex items-center justify-center mb-5">
              <Database className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3">AI Data Intelligence</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              CRM data gets messy over time. AI continuously audits your records — detecting duplicates, flagging incomplete contacts, and identifying outdated information — so your team always works from a clean, reliable source of truth. Plus, AI surfaces performance patterns across your deals so managers get insights without building reports.
            </p>
            <div className="space-y-2">
              {[
                "Duplicate contact detection and auto-merge",
                "Incomplete and outdated record flagging",
                "Sales trend insights from your deal history",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            {/* Mini mockup */}
            <div className="mt-6 p-3 rounded-xl bg-teal-400/5 border border-teal-400/20 text-xs space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span className="text-white font-medium">Data Health Score: 94%</span>
              </div>
              <div className="text-muted-foreground/70">38 duplicates merged · 12 records enriched today</div>
              <div className="flex items-center gap-2 mt-1">
                <TrendingUp className="w-3 h-3 text-emerald-400" />
                <span className="text-muted-foreground/70">"Deals with demos convert 40% more often"</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── BUSINESS IMPACT STATS ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1117] to-[#080b12] p-10 md:p-14"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Transform your CRM into a revenue engine.</h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">No new CRM. No migration. AI intelligence layered on top of what you already use.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, stat: "40%", label: "More deals closed", sub: "Teams using AI lead scoring close significantly more" },
              { icon: Clock, stat: "3×", label: "Faster follow-ups", sub: "AI drafts emails in seconds, not minutes" },
              { icon: Database, stat: "94%", label: "Cleaner CRM data", sub: "Average data health score after 30 days" },
              { icon: Zap, stat: "Zero", label: "Deals forgotten", sub: "Automated reminders ensure every opportunity is tracked" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
                <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

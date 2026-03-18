import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, GitMerge, Headphones, CheckCircle2, AlertTriangle, Sparkles, X } from "lucide-react";

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "AI Insights Dashboard", icon: <Activity className="w-4 h-4" /> },
    { id: 1, label: "Workflow Automation", icon: <GitMerge className="w-4 h-4" /> },
    { id: 2, label: "Voice Agent Control", icon: <Headphones className="w-4 h-4" /> },
  ];

  return (
    <section className="py-12 relative overflow-hidden" id="product">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">The AI Control Center for Your Business</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unified interface that sits on top of your fragmented tools, turning raw data into proactive intelligence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mockup Container */}
        <div className="relative mx-auto max-w-5xl rounded-2xl bg-[#0F1423] border border-white/10 shadow-2xl overflow-hidden aspect-[16/9] sm:aspect-auto sm:h-[460px] flex flex-col mb-8">
          {/* Mac-style Window Header */}
          <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="mx-auto px-4 py-1 rounded-md bg-white/5 text-[10px] text-muted-foreground flex items-center gap-2">
              <Activity className="w-3 h-3" /> app.openbusiness.ai
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-6 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div
                  key="tab1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <div className="md:col-span-2 space-y-6">
                    <div className="h-48 bg-white/5 border border-white/10 rounded-xl p-5">
                      <h4 className="text-sm font-medium text-white mb-4">Pipeline Health (Salesforce + Dynamics)</h4>
                      <div className="flex h-24 items-end gap-2">
                        {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="h-32 bg-accent/10 border border-accent/20 rounded-xl p-5">
                        <AlertTriangle className="w-5 h-5 text-accent mb-2" />
                        <h4 className="text-xs text-muted-foreground mb-1">AI Alert</h4>
                        <p className="text-sm font-medium text-white">3 High-value deals lack next steps in HubSpot.</p>
                      </div>
                      <div className="h-32 bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mb-2" />
                        <h4 className="text-xs text-muted-foreground mb-1">Insight</h4>
                        <p className="text-sm font-medium text-white">Support ticket resolution up 24% this week.</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-1 bg-white/5 border border-white/10 rounded-xl p-5">
                    <h4 className="text-sm font-medium text-white mb-4">Recommended Actions</h4>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-3 bg-background rounded-lg border border-white/5 flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                          <div>
                            <p className="text-xs text-white">Draft email to Acme Corp</p>
                            <p className="text-[10px] text-muted-foreground">Based on recent Zoho meeting</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  key="tab2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex items-center justify-center"
                >
                  <div className="relative w-full max-w-2xl h-full flex flex-col md:flex-row items-center justify-center gap-4">
                    {/* Visual Flow Representation */}
                    <div className="w-32 p-4 bg-white/5 border border-white/10 rounded-xl text-center z-10">
                      <span className="text-xs text-muted-foreground">Trigger</span>
                      <p className="text-sm font-medium text-white mt-1">New Lead (HubSpot)</p>
                    </div>
                    <div className="hidden md:block w-8 h-[2px] bg-primary relative">
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="w-40 p-4 bg-primary/10 border border-primary/30 rounded-xl text-center shadow-[0_0_20px_rgba(59,130,246,0.1)] z-10">
                      <Sparkles className="w-4 h-4 text-primary mx-auto mb-1" />
                      <span className="text-xs text-primary">AI Action</span>
                      <p className="text-sm font-medium text-white mt-1">Qualify & Score</p>
                    </div>
                    <div className="hidden md:block w-8 h-[2px] bg-accent relative">
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <div className="flex flex-col gap-4 z-10">
                      <div className="w-32 p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                        <span className="text-xs text-muted-foreground">Action</span>
                        <p className="text-sm font-medium text-white mt-1">Route to Sales</p>
                      </div>
                      <div className="w-32 p-4 bg-white/5 border border-white/10 rounded-xl text-center">
                        <span className="text-xs text-muted-foreground">Action</span>
                        <p className="text-sm font-medium text-white mt-1">Schedule AI Call</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="tab3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full max-w-xl mx-auto flex flex-col justify-center"
                >
                  <div className="bg-background border border-white/10 rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <Headphones className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white">Sarah (AI Agent)</h4>
                          <p className="text-xs text-green-400">● On call with John Doe</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <h4 className="text-sm font-medium text-white">02:45</h4>
                        <p className="text-xs text-muted-foreground">Duration</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="bg-white/5 rounded-lg p-3 rounded-tl-none w-[80%]">
                         <p className="text-xs text-muted-foreground">John Doe</p>
                         <p className="text-sm text-white mt-1">I'm interested in the new property listings downtown.</p>
                      </div>
                      <div className="bg-indigo-500/10 rounded-lg p-3 rounded-tr-none w-[80%] ml-auto border border-indigo-500/20">
                         <p className="text-xs text-indigo-400 text-right">Sarah (AI)</p>
                         <p className="text-sm text-white mt-1">Great! I see from your file you prefer 2-bedroom layouts. I have 3 matches. Shall I email the details or book a viewing?</p>
                      </div>
                    </div>

                    <div className="flex justify-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center cursor-pointer hover:bg-red-500/30">
                        <X className="w-5 h-5" />
                      </div>
                      <div className="h-12 px-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Live Sentiment: <span className="text-green-400 font-medium ml-1">Positive</span></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Product Gallery Grid */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-white text-center mb-4 opacity-70">More from the platform</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "AI Pipeline View", tag: "CRM", bgTag: "bg-blue-500/20", textTag: "text-blue-400", borderTag: "border-blue-500/20", gradient: "from-blue-500/20 to-blue-500/60" },
              { title: "Activity Summary", tag: "CRM", bgTag: "bg-blue-500/20", textTag: "text-blue-400", borderTag: "border-blue-500/20", gradient: "from-blue-500/20 to-blue-500/60" },
              { title: "Workflow Builder", tag: "Automation", bgTag: "bg-violet-500/20", textTag: "text-violet-400", borderTag: "border-violet-500/20", gradient: "from-violet-500/20 to-violet-500/60" },
              { title: "Voice Campaigns", tag: "Voice", bgTag: "bg-indigo-500/20", textTag: "text-indigo-400", borderTag: "border-indigo-500/20", gradient: "from-indigo-500/20 to-indigo-500/60" },
              { title: "ERP Analytics", tag: "ERP", bgTag: "bg-violet-500/20", textTag: "text-violet-400", borderTag: "border-violet-500/20", gradient: "from-violet-500/20 to-violet-500/60" },
              { title: "Unified Control", tag: "Platform", bgTag: "bg-blue-500/20", textTag: "text-blue-400", borderTag: "border-blue-500/20", gradient: "from-blue-500/20 to-blue-500/60" },
            ].map((panel, i) => (
              <div key={i} className="rounded-xl bg-[#0F1423] border border-white/10 overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="bg-white/5 px-3 py-2 border-b border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-white">{panel.title}</span>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full ${panel.bgTag} ${panel.textTag} border ${panel.borderTag}`}>{panel.tag}</span>
                </div>
                <div className="p-4 h-32 flex flex-col justify-between">
                  <div className="flex gap-2">
                    {[1,2,3].map(j => <div key={j} className="h-2 flex-1 bg-white/10 rounded" />)}
                  </div>
                  <div className="flex items-end gap-1 h-16">
                    {[55,80,45,90,65,75,50,85].map((h, k) => (
                      <div key={k} className={`flex-1 rounded-t bg-gradient-to-t ${panel.gradient}`} style={{height: `${h}%`}} />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 w-1/2 bg-white/10 rounded" />
                    <div className="h-2 w-1/4 bg-primary/30 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

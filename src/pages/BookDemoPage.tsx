import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2, Zap, Users, Shield } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function BookDemoPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const inputClass =
    "w-full px-3 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/25 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all text-sm";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Background effects */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/8 blur-[160px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/8 blur-[140px] rounded-full" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* ── LEFT SIDE ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Highlighted headline badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-4"
              >
                <span className="inline-block px-5 py-3 rounded-xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border border-white/10 whitespace-nowrap">
                  <span className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase">
                    Book Your Demo
                  </span>
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl font-extrabold text-white mb-4 uppercase tracking-tight leading-tight"
              >
                Join 500+ teams who run smarter, every day
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-lg"
              >
                With OpenBusiness.ai, your team gets AI-powered CRM insights, automated ERP workflows, and human-sounding voice agents — without replacing a single tool.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                {[
                  { icon: Zap, text: "Set up in under 5 minutes — no migration needed" },
                  { icon: Users, text: "Dedicated onboarding specialist for your team" },
                  { icon: Shield, text: "Enterprise-grade security & compliance" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-white/80 font-medium">{item.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 pt-6 border-t border-white/[0.06]"
              >
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-xs text-muted-foreground">Teams onboarded</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <div className="text-2xl font-bold text-white">4.9/5</div>
                    <div className="text-xs text-muted-foreground">Average rating</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <div className="text-2xl font-bold text-white">&lt;24h</div>
                    <div className="text-xs text-muted-foreground">Response time</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT SIDE: Single Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 shadow-2xl shadow-black/30 overflow-hidden">
                {/* Glow effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 blur-[60px] rounded-full pointer-events-none" />

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 gap-5 text-center relative z-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Demo Request Received!</h3>
                    <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                      Thanks for your interest in OpenBusiness.ai. Our team will reach out within 24 hours to schedule your personalized demo.
                    </p>
                    <a
                      href="/"
                      className="mt-2 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all"
                    >
                      Back to Homepage
                    </a>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    onSubmit={handleSubmit}
                    className="space-y-3 relative z-10"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="firstName" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                          First Name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="Alex"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="lastName" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                          Last Name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Martin"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                        Work Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="alex.martin@company.com"
                        className={inputClass}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                        Phone Number <span className="text-primary">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={inputClass}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className={inputClass}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={2}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your current setup or what you'd like to see in the demo..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/5 border border-red-400/20 rounded-xl px-4 py-3">
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-[0_0_24px_rgba(59,130,246,0.4)] hover:shadow-[0_0_36px_rgba(59,130,246,0.6)] transition-all duration-300 group"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Book My Demo
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

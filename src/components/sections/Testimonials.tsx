import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      company: "TECHFLOW",
      quote: "We integrated OpenBusiness.ai in days and it immediately surfaced insights we didn't know were hiding in our data. Our reps don't chase data anymore — AI does it for them.",
      author: "Sarah Jenkins",
      role: "VP of Sales, TechFlow",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      company: "KCME GROUP",
      quote: "Voice campaign outbound closed appointments by 40% week over week with zero manual effort by staff without changing our CRM.",
      author: "Marcus Chen",
      role: "Operations Director, KCME Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      company: "AUTOPARTS",
      quote: "We kept HubSpot but added AI that summarizes multilingual outreach automatically. Game-changer for our team.",
      author: "Elena Rodriguez",
      role: "Customer Success Lead, AutoParts Direct",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-12 bg-background relative" id="company">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4"
          >
            Trusted by product and operations teams
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            See why teams that use OpenBusiness.ai
            <br />
            add AI to all of their existing systems.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/[0.08] p-5 rounded-2xl relative flex flex-col"
            >
              {/* Company Logo Badge */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/[0.06] border border-white/10">
                  <span className="text-sm font-bold text-white/50 tracking-widest">{r.company}</span>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="text-white/90 text-sm leading-relaxed flex-1">"{r.quote}"</p>
              <div className="flex items-center gap-4 mt-4">
                <img src={r.image} alt={r.author} className="w-10 h-10 rounded-full object-cover grayscale opacity-80" />
                <div>
                  <h4 className="text-sm font-bold text-white">{r.author}</h4>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-white/[0.06]">
          {[
            { val: "500+", label: "Businesses Connected" },
            { val: "50M+", label: "AI Interactions" },
            { val: "99.9%", label: "Platform Uptime" },
            { val: "50+", label: "Languages Supported" },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-1">{m.val}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

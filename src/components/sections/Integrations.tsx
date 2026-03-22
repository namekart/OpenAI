import { motion } from "framer-motion";

const BLUE = "#3B82F6";
const VIOLET = "#8B5CF6";

const DURATION = 1;
const CYCLE = 4;
const REPEAT_DELAY = CYCLE - DURATION;

function FlowParticle({
  dir,
  color,
  delay,
}: {
  dir: "fwd" | "ret";
  color: string;
  delay: number;
}) {
  const isFwd = dir === "fwd";
  return (
    <>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${color}cc 40%, ${color} 50%, ${color}cc 60%, transparent 100%)`,
        }}
        animate={{ x: isFwd ? ["-110%", "110%"] : ["110%", "-110%"] }}
        transition={{
          duration: DURATION,
          delay,
          repeat: Infinity,
          repeatDelay: REPEAT_DELAY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 6px 2px ${color}`,
          left: isFwd ? 0 : "auto",
          right: isFwd ? "auto" : 0,
        }}
        animate={
          isFwd
            ? { left: ["-6px", "calc(100% + 6px)"] }
            : { right: ["-6px", "calc(100% + 6px)"] }
        }
        transition={{
          duration: DURATION,
          delay,
          repeat: Infinity,
          repeatDelay: REPEAT_DELAY,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

function AnimatedConnector({
  fwdColor,
  retColor,
  fwdDelay,
  retDelay,
}: {
  fwdColor: string;
  retColor: string;
  fwdDelay: number;
  retDelay: number;
}) {
  return (
    <div className="hidden md:flex items-center gap-1 shrink-0">
      <div className="relative w-16 h-0.5 overflow-hidden rounded-full">
        <div className="absolute inset-0 bg-white/10" />
        <FlowParticle dir="fwd" color={fwdColor} delay={fwdDelay} />
        <FlowParticle dir="ret" color={retColor} delay={retDelay} />
      </div>
      <motion.span
        style={{ color: fwdColor }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-lg leading-none"
      >
        &rarr;
      </motion.span>
    </div>
  );
}

export function Integrations() {
  const logos = [
    { name: "Salesforce", color: "text-[#00A1E0]" },
    { name: "HubSpot", color: "text-[#FF7A59]" },
    { name: "Zoho", color: "text-[#2C365D]" },
    { name: "Zendesk", color: "text-[#03363D]" },
    { name: "Freshdesk", color: "text-[#25C16F]" },
    { name: "Tally", color: "text-[#E84C3D]" },
    { name: "Stripe", color: "text-[#635BFF]" },
    { name: "Slack", color: "text-[#E01E5A]" },
  ];

  return (
    <section
      className="py-16 bg-white/2 border-y border-white/5 relative overflow-hidden"
      id="integrations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-8"
        >
          Connects to the systems your business already runs
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default"
            >
              <span
                className={`font-bold text-base tracking-tight text-white/80 ${logo.color.replace(
                  "text-",
                  "hover:text-"
                )} transition-colors`}
              >
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Left: Your Systems */}
            <motion.div
              className="px-6 py-4 rounded-xl bg-white/3 border border-white/10 text-center min-w-40"
              animate={{
                borderColor: ["rgba(255,255,255,0.1)", `${BLUE}50`, "rgba(255,255,255,0.1)"],
              }}
              transition={{ duration: CYCLE, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            >
              <p className="text-xs text-muted-foreground mb-1">Your Systems</p>
              <p className="text-sm font-semibold text-white">CRM + Support + Billing</p>
              <div className="mt-2 flex justify-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#00A1E0]" />
                <span className="w-2 h-2 rounded-full bg-[#25C16F]" />
                <span className="w-2 h-2 rounded-full bg-[#E84C3D]" />
              </div>
            </motion.div>

            <AnimatedConnector
              fwdColor={BLUE}
              retColor={VIOLET}
              fwdDelay={0}
              retDelay={3}
            />

            {/* Center: OpenBusiness.ai hub */}
            <motion.div
              className="px-8 py-5 rounded-xl bg-primary/10 border border-primary/30 text-center min-w-50 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59,130,246,0.1)",
                  "0 0 40px rgba(59,130,246,0.35)",
                  "0 0 20px rgba(59,130,246,0.1)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-8 h-8 rounded-lg bg-primary/20 mx-auto mb-2 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-primary text-xs font-bold">AI</span>
              </motion.div>
              <p className="text-sm font-bold text-white">OpenBusiness.ai</p>
              <p className="text-xs text-primary mt-1">AI Workforce</p>
            </motion.div>

            <AnimatedConnector
              fwdColor={VIOLET}
              retColor={BLUE}
              fwdDelay={1}
              retDelay={2}
            />

            {/* Right: Outputs */}
            <motion.div
              className="px-6 py-4 rounded-xl bg-white/3 border border-white/10 text-center min-w-40"
              animate={{
                borderColor: ["rgba(255,255,255,0.1)", `${VIOLET}50`, "rgba(255,255,255,0.1)"],
              }}
              transition={{ duration: CYCLE, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <p className="text-xs text-muted-foreground mb-2">AI Outputs</p>
              <div className="space-y-1">
                {["Detect", "Decide", "Act"].map((item, i) => (
                  <motion.p
                    key={item}
                    className="text-xs text-white bg-white/5 rounded px-2 py-0.5"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1 + i * 0.3 }}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          3 integrations. 5 minutes. No migration required — just AI on top of what you already have.
        </motion.p>
      </div>
    </section>
  );
}

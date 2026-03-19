import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                Legal
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-3">Privacy Policy</h1>
              <p className="text-muted-foreground text-sm">Last updated: March 19, 2026</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground text-sm leading-relaxed">

              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
                <p>OpenBusiness.ai ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, website, and services.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
                <p className="mb-3">We may collect the following types of information:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-white">Account Information:</strong> Name, email address, company name, and password when you register.</li>
                  <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our platform, including features used and actions taken.</li>
                  <li><strong className="text-white">CRM & ERP Data:</strong> Data you connect or sync through integrations with third-party tools (e.g., Salesforce, HubSpot). We access only what is necessary to provide our services.</li>
                  <li><strong className="text-white">Voice Data:</strong> Call recordings and transcripts processed by our Voice Agent feature, used solely to provide the service.</li>
                  <li><strong className="text-white">Device & Log Data:</strong> IP address, browser type, operating system, and pages visited.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To provide, operate, and improve our services</li>
                  <li>To process transactions and send related information</li>
                  <li>To send product updates, technical notices, and support messages</li>
                  <li>To respond to your comments, questions, and requests</li>
                  <li>To monitor and analyze usage and trends to improve your experience</li>
                  <li>To detect, investigate, and prevent fraudulent or unauthorized activity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Data Sharing</h2>
                <p>We do not sell your personal data. We may share information with:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li><strong className="text-white">Service Providers:</strong> Third-party vendors who assist in operating our platform (e.g., cloud hosting, analytics) under confidentiality agreements.</li>
                  <li><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
                  <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
                <p>We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting us at <a href="mailto:hello@openbusiness.ai" className="text-primary hover:underline">hello@openbusiness.ai</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">6. Security</h2>
                <p>We implement industry-standard security measures including encryption in transit (TLS) and at rest, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">7. Your Rights</h2>
                <p>Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at <a href="mailto:hello@openbusiness.ai" className="text-primary hover:underline">hello@openbusiness.ai</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">8. Cookies</h2>
                <p>We use cookies and similar tracking technologies to improve your experience. You can control cookies through your browser settings. Disabling cookies may affect certain features of the platform.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">9. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by posting a notice on our website. Continued use of the platform after changes constitutes acceptance.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">10. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us at:<br />
                  <a href="mailto:hello@openbusiness.ai" className="text-primary hover:underline">hello@openbusiness.ai</a>
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

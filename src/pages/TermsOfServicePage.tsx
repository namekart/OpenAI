import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-3">Terms of Service</h1>
              <p className="text-muted-foreground text-sm">Last updated: March 19, 2026</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground text-sm leading-relaxed">

              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                <p>By accessing or using OpenBusiness.ai ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
                <p>OpenBusiness.ai provides an AI-powered intelligence layer for CRM and ERP systems, including CRM Intelligence, ERP Intelligence, and Voice Agent features. We reserve the right to modify, suspend, or discontinue any part of the service at any time.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. Account Registration</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You must provide accurate and complete information when creating an account.</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                  <li>You must notify us immediately of any unauthorized use of your account.</li>
                  <li>You must be at least 18 years old to use the Platform.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Acceptable Use</h2>
                <p className="mb-3">You agree not to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use the Platform for any unlawful purpose or in violation of any regulations</li>
                  <li>Attempt to gain unauthorized access to any part of the Platform</li>
                  <li>Interfere with or disrupt the integrity or performance of the Platform</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the Platform</li>
                  <li>Use the Platform to transmit spam, malware, or other harmful content</li>
                  <li>Resell or sublicense access to the Platform without our written consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property</h2>
                <p>All content, features, and functionality of the Platform — including but not limited to software, text, graphics, and logos — are owned by OpenBusiness.ai and protected by intellectual property laws. You may not copy, reproduce, or distribute any part of the Platform without prior written permission.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">6. Your Data</h2>
                <p>You retain ownership of all data you submit to the Platform. By using the Platform, you grant us a limited license to process your data solely to provide the services. We will handle your data in accordance with our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">7. Third-Party Integrations</h2>
                <p>The Platform integrates with third-party services (e.g., Salesforce, HubSpot). Your use of such integrations is subject to those third parties' terms and privacy policies. We are not responsible for the actions or content of third-party services.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">8. Payment & Billing</h2>
                <p>Paid plans are billed in advance on a monthly or annual basis. All fees are non-refundable unless otherwise stated. We reserve the right to change pricing with 30 days' notice. Failure to pay may result in suspension of your account.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">9. Disclaimer of Warranties</h2>
                <p>The Platform is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the Platform will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">10. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, OpenBusiness.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform, even if we have been advised of the possibility of such damages.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">11. Termination</h2>
                <p>We reserve the right to suspend or terminate your account at our discretion if you violate these Terms. You may also terminate your account at any time by contacting us. Upon termination, your right to use the Platform ceases immediately.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">12. Changes to Terms</h2>
                <p>We may update these Terms from time to time. We will notify you of material changes via email or platform notice. Continued use of the Platform after changes constitutes your acceptance of the updated Terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">13. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:<br />
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

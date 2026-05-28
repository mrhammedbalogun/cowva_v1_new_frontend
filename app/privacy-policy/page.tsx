import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Cowva",
  description:
    "Cowva's Privacy Policy explains how we collect, use, and protect personal data on our vaccination records management platform.",
}

const LAST_UPDATED = "28 May 2026"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-gray-300">
      {/* Nav */}
      <header className="border-b border-[#00B5AD]/10 bg-[#0A1628]/95 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/logofull.png" alt="Cowva" width={120} height={38} className="h-9 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-sm text-[#00B5AD] hover:text-[#00B5AD]/80 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-b from-[#0D1B2A] to-[#0A1628] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-lg">
            We are committed to protecting your personal information and your right to privacy.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* 1 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            1. Who We Are
          </h2>
          <p className="mb-3">
            Cowva is a vaccination records management platform developed and operated by the <strong className="text-white">Cowva Tech Team</strong>,
            based in Nigeria. Our platform is available at{" "}
            <a href="https://cowva.com" className="text-[#00B5AD] hover:underline">cowva.com</a> and{" "}
            <a href="https://app.cowva.com" className="text-[#00B5AD] hover:underline">app.cowva.com</a>.
          </p>
          <p className="mb-3">
            We serve two groups of users: <strong className="text-white">Health Facilities</strong> (pharmacies,
            clinics, hospitals, and immunisation centres) and their <strong className="text-white">Patients</strong>
            (individuals whose vaccination records are managed on the platform).
          </p>
          <p>
            For questions about this policy, contact us at:{" "}
            <a href="mailto:support@cowva.com" className="text-[#00B5AD] hover:underline">support@cowva.com</a>
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            2. Information We Collect
          </h2>
          <p className="mb-4">We collect the following categories of personal data:</p>

          <div className="space-y-4">
            <div className="bg-[#0D1B2A] border border-[#00B5AD]/15 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">2.1 Patient / End-User Data</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Full name (surname, first name, other names)</li>
                <li>Email address</li>
                <li>Phone number and WhatsApp number</li>
                <li>Date of birth and gender</li>
                <li>Vaccination records — vaccine names, brands, dates, doses, batch numbers</li>
                <li>Shot schedules and next vaccination dates</li>
                <li>Adverse event (AEFI) reports linked to immunisation</li>
                <li>Unique platform identifier (INO ID)</li>
              </ul>
            </div>

            <div className="bg-[#0D1B2A] border border-[#00B5AD]/15 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">2.2 Health Facility Data</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Facility name, address, state, and contact details</li>
                <li>Administrator and staff names, emails, and phone numbers</li>
                <li>Subscription and billing information (invoices and payment references)</li>
                <li>Branch locations and operating hours</li>
              </ul>
            </div>

            <div className="bg-[#0D1B2A] border border-[#00B5AD]/15 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">2.3 Usage and Technical Data</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>System access logs (login events, actions performed)</li>
                <li>IP address and browser/device type</li>
                <li>Reminder delivery logs (SMS, WhatsApp, email)</li>
                <li>Report download history</li>
              </ul>
            </div>

            <div className="bg-[#0D1B2A] border border-[#00B5AD]/15 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">2.4 Contact Form Data</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Name, email address, phone number, and message content submitted via our contact form</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            3. How We Use Your Information
          </h2>
          <p className="mb-4">We use collected data strictly for the following purposes:</p>
          <ul className="space-y-3">
            {[
              { title: "Providing the Platform", desc: "To create and manage user accounts, store vaccination records, and deliver the core functionality of the platform." },
              { title: "Sending Reminders", desc: "To send automated vaccination reminders via SMS, WhatsApp, or email on behalf of the health facility managing your records." },
              { title: "Payment Processing", desc: "To process subscription payments and vaccination record download fees via Paystack, our payment partner." },
              { title: "Report Generation", desc: "To generate and deliver vaccination record PDF reports to patients upon request and payment." },
              { title: "Customer Support", desc: "To respond to enquiries and support requests submitted via our contact form or email." },
              { title: "Platform Improvement", desc: "To analyse aggregated, anonymised usage data to improve the platform. We do not sell personal data." },
              { title: "Legal Compliance", desc: "To comply with applicable Nigerian law including the Nigeria Data Protection Act (NDPA) 2023 and any healthcare data obligations." },
            ].map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="text-[#00B5AD] mt-1 flex-shrink-0">✦</span>
                <span><strong className="text-white">{item.title}:</strong> {item.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            4. Email Communications
          </h2>
          <p className="mb-4">
            We send transactional and operational emails using <strong className="text-white">Mailgun</strong> (via our domain <em>mg.cowva.com</em>).
            These emails include:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-sm">
            <li>Account registration and email verification</li>
            <li>Password reset links</li>
            <li>Vaccination record download links (following payment)</li>
            <li>Vaccination reminder notifications</li>
            <li>Subscription and billing notifications</li>
          </ul>
          <p className="mb-3">
            We do <strong className="text-white">not</strong> send unsolicited marketing emails. All emails are triggered
            by actions you or your health facility take on the platform.
          </p>
          <p>
            You may opt out of non-essential email communications by contacting us at{" "}
            <a href="mailto:support@cowva.com" className="text-[#00B5AD] hover:underline">support@cowva.com</a>.
            Transactional emails (e.g., download links, password resets) cannot be disabled as they are
            essential to platform operation.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            5. How We Share Your Information
          </h2>
          <p className="mb-4">
            We do <strong className="text-white">not</strong> sell, rent, or trade personal data. We share data only with the following
            trusted service providers, solely for the purpose of delivering our services:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#00B5AD]/20">
                  <th className="text-left py-3 pr-6 text-white font-semibold">Provider</th>
                  <th className="text-left py-3 pr-6 text-white font-semibold">Purpose</th>
                  <th className="text-left py-3 text-white font-semibold">Data Shared</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#00B5AD]/10">
                {[
                  { provider: "Mailgun", purpose: "Transactional email delivery", data: "Name, email address" },
                  { provider: "Paystack", purpose: "Payment processing", data: "Name, email, payment amount" },
                  { provider: "Termii", purpose: "SMS reminder delivery", data: "Phone number, reminder message" },
                  { provider: "Sendchamp / Meta WhatsApp", purpose: "WhatsApp reminder delivery", data: "WhatsApp number, reminder message" },
                  { provider: "Amazon Web Services (AWS)", purpose: "Cloud hosting and file storage", data: "All platform data (encrypted at rest)" },
                ].map((row) => (
                  <tr key={row.provider}>
                    <td className="py-3 pr-6 text-[#00B5AD] font-medium">{row.provider}</td>
                    <td className="py-3 pr-6">{row.purpose}</td>
                    <td className="py-3 text-gray-400">{row.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            All third-party providers are contractually bound to process data only for the stated purpose and
            in compliance with applicable data protection laws.
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            6. Data Retention
          </h2>
          <p className="mb-3">
            We retain personal data for as long as it is necessary to provide our services and comply with
            legal obligations:
          </p>
          <ul className="space-y-2 text-sm">
            <li><span className="text-white font-medium">Patient vaccination records:</span> Retained for the lifetime of the account. Patients may request deletion subject to applicable health record retention laws.</li>
            <li><span className="text-white font-medium">Health facility account data:</span> Retained for the duration of the subscription and for 3 years thereafter for audit and legal purposes.</li>
            <li><span className="text-white font-medium">Communication logs:</span> Retained for up to 2 years for support and compliance purposes.</li>
            <li><span className="text-white font-medium">Contact form submissions:</span> Retained for up to 12 months.</li>
          </ul>
        </section>

        {/* 7 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            7. Your Rights
          </h2>
          <p className="mb-4">
            Under the Nigeria Data Protection Act (NDPA) 2023 and applicable regulations, you have the
            following rights:
          </p>
          <ul className="space-y-3">
            {[
              { right: "Right of Access", desc: "Request a copy of the personal data we hold about you." },
              { right: "Right to Rectification", desc: "Request correction of inaccurate or incomplete data." },
              { right: "Right to Erasure", desc: "Request deletion of your personal data, subject to legal retention requirements." },
              { right: "Right to Restriction", desc: "Request that we limit how we use your data in certain circumstances." },
              { right: "Right to Data Portability", desc: "Request your data in a machine-readable format." },
              { right: "Right to Object", desc: "Object to processing of your personal data for certain purposes." },
              { right: "Right to Withdraw Consent", desc: "Where processing is based on consent, you may withdraw it at any time." },
            ].map((item) => (
              <li key={item.right} className="flex gap-3 text-sm">
                <span className="text-[#00B5AD] mt-0.5 flex-shrink-0">→</span>
                <span><strong className="text-white">{item.right}:</strong> {item.desc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            To exercise any of these rights, email us at{" "}
            <a href="mailto:support@cowva.com" className="text-[#00B5AD] hover:underline">support@cowva.com</a>.
            We will respond within 30 days.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            8. Data Security
          </h2>
          <p className="mb-3">
            We implement industry-standard security measures to protect your personal data:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>All data in transit is encrypted using TLS/SSL (HTTPS)</li>
            <li>Database backups are encrypted at rest on Amazon RDS (AWS)</li>
            <li>Access to the production environment is restricted to authorised personnel only</li>
            <li>User passwords are stored as salted cryptographic hashes — never in plain text</li>
            <li>Platform sessions expire after 1 hour of inactivity</li>
            <li>Media files are stored in private AWS S3 buckets</li>
          </ul>
          <p className="mt-4 text-sm">
            While we take all reasonable precautions, no method of transmission over the internet is 100%
            secure. If you discover a security vulnerability, please report it immediately to{" "}
            <a href="mailto:support@cowva.com" className="text-[#00B5AD] hover:underline">support@cowva.com</a>.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            9. Cookies
          </h2>
          <p className="mb-3">
            The Cowva web application (<em>app.cowva.com</em>) uses session cookies strictly necessary for
            authentication and platform operation. We do not use advertising, tracking, or third-party
            analytics cookies.
          </p>
          <p className="text-sm">
            The marketing website (<em>cowva.com</em>) does not use cookies beyond standard browser caching
            for performance. No personal data is collected through cookies on this website.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            10. Children&apos;s Privacy
          </h2>
          <p className="mb-3">
            Our platform may process vaccination records for children under the age of 18. Such records are
            created and managed by a registered health facility or a parent/guardian acting on the
            child&apos;s behalf.
          </p>
          <p className="text-sm">
            We do not knowingly allow children under 18 to create independent accounts on the platform
            without the consent of a parent, guardian, or registered health facility.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            11. International Data Transfers
          </h2>
          <p>
            Cowva is operated from Nigeria. Our cloud infrastructure (AWS) is hosted in the EU West (Ireland)
            region. By using our platform, you consent to your data being processed in these jurisdictions.
            We ensure all transfers comply with the Nigeria Data Protection Act 2023 and applicable
            international data transfer standards.
          </p>
        </section>

        {/* 12 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            12. Changes to This Policy
          </h2>
          <p className="mb-3">
            We may update this Privacy Policy from time to time to reflect changes in our practices or
            applicable law. When we make material changes, we will update the &quot;Last updated&quot; date
            at the top of this page and, where appropriate, notify users via email.
          </p>
          <p className="text-sm">
            Continued use of the platform after the effective date of any changes constitutes acceptance
            of the revised policy.
          </p>
        </section>

        {/* 13 */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-[#00B5AD]/20">
            13. Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle
            your personal data, please contact us:
          </p>
          <div className="bg-[#0D1B2A] border border-[#00B5AD]/20 rounded-xl p-6 space-y-2 text-sm">
            <p><span className="text-white font-medium">Company:</span> Cowva</p>
            <p>
              <span className="text-white font-medium">Email:</span>{" "}
              <a href="mailto:support@cowva.com" className="text-[#00B5AD] hover:underline">support@cowva.com</a>
            </p>
            <p>
              <span className="text-white font-medium">Website:</span>{" "}
              <a href="https://cowva.com" className="text-[#00B5AD] hover:underline">https://cowva.com</a>
            </p>
            <p><span className="text-white font-medium">Country:</span> Nigeria</p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#00B5AD]/10 bg-[#0a1520] py-8 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500 space-y-2">
          <p>© 2026 Cowva. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link href="/privacy-policy" className="text-[#00B5AD]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link href="/#contact" className="hover:text-gray-400 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

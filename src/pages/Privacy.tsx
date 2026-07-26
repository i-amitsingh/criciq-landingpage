interface Props {
  onNavigate: (page: string) => void
}

const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: `We collect information you provide directly to us when you register for the CricIQ beta, use our application, or contact us for support. This includes:\n\n• Account information: name, email address, and password.\n• Profile information: your role (player, coach, or academy), cricket level, and location.\n• Usage data: videos and session recordings you upload for analysis, along with metadata such as timestamps and device type.\n• Device information: device model, operating system, unique device identifiers, and mobile network information.\n• Log data: IP address, browser type, pages visited, and time spent in the application.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `SportZengage Technology Pvt. Ltd. uses the information we collect to:\n\n• Provide, maintain, and improve the CricIQ platform and its AI analysis features.\n• Process and deliver your cricket analysis reports.\n• Send you technical notices, updates, security alerts, and support messages.\n• Respond to your comments and questions.\n• Monitor and analyse usage trends to improve our product.\n• Detect, investigate, and prevent fraudulent transactions and other illegal activities.\n• Personalise your experience and deliver relevant coaching insights.\n\nWe do not sell your personal data to third parties.`,
  },
  {
    title: '3. Video and Analysis Data',
    body: `Videos you upload are processed by our AI systems to generate analysis reports. Uploaded videos are stored securely and are accessible only to you and authorised SportZengage personnel for quality assurance purposes. We may use anonymised, aggregated data derived from analysis sessions to improve our AI models. We will never share your identifiable video footage with third parties without your explicit consent.`,
  },
  {
    title: '4. Data Sharing',
    body: `We may share your information with:\n\n• Service providers: third-party vendors who perform services on our behalf, such as cloud hosting (AWS, Google Cloud), analytics, and customer support tools. These providers are bound by data processing agreements.\n• Legal compliance: when required by law, court order, or governmental authority.\n• Business transfers: in connection with a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity.\n\nWe require all third-party service providers to maintain confidentiality and security of your information.`,
  },
  {
    title: '5. Data Retention',
    body: `We retain your account information and analysis data for as long as your account is active or as needed to provide you with our services. You may request deletion of your account and associated data at any time by contacting us at privacy@criciq.app. Upon verified request, we will delete your personal data within 30 days, except where we are required by law to retain certain information.`,
  },
  {
    title: '6. Security',
    body: `We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorised access. These measures include encryption of data in transit (TLS/HTTPS), encryption at rest for uploaded videos and reports, access controls limiting data access to authorised personnel, and regular security audits. However, no security system is impenetrable, and we cannot guarantee the security of our systems with absolute certainty.`,
  },
  {
    title: '7. Your Rights',
    body: `Depending on your jurisdiction, you may have rights including:\n\n• Access: the right to request a copy of your personal data.\n• Correction: the right to request correction of inaccurate data.\n• Deletion: the right to request erasure of your personal data.\n• Portability: the right to receive your data in a machine-readable format.\n• Objection: the right to object to certain processing of your data.\n\nTo exercise any of these rights, contact us at privacy@criciq.app. We will respond to your request within 30 days.`,
  },
  {
    title: '8. Children\'s Privacy',
    body: `CricIQ is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at privacy@criciq.app.`,
  },
  {
    title: '9. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. For significant changes, we will also send a notification to your registered email address. Your continued use of CricIQ after the effective date of the revised Privacy Policy constitutes your acceptance of the terms.`,
  },
  {
    title: '10. Contact Us',
    body: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:\n\nSportZengage Technology Pvt. Ltd.\nBengaluru, Karnataka, India\nEmail: privacy@criciq.app\nGeneral: hello@criciq.app`,
  },
]

export default function Privacy({ onNavigate }: Props) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Header */}
      <section className="border-b border-neutral-200 bg-neutral-50 px-4 pb-12 pt-32 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-sm font-semibold text-brand-500">Legal</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Last updated: <span className="font-semibold">1 July 2026</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            This Privacy Policy describes how SportZengage Technology Pvt. Ltd. ("we", "us", or "our") collects, uses, and shares information about you when you use CricIQ ("the Service"). By using CricIQ, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-3 text-lg font-extrabold text-neutral-900 dark:text-white">{s.title}</h2>
              <div className="whitespace-pre-line text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <section className="border-t border-neutral-200 px-4 py-10 dark:border-neutral-800">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600 dark:hover:text-brand-400"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </button>
          <p className="text-xs text-neutral-400">© 2026 SportZengage Technology Pvt. Ltd.</p>
        </div>
      </section>
    </div>
  )
}

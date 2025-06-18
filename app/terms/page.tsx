import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Mugisha Moses Portfolio",
  description: "Terms of service and legal information for Mugisha Moses's design portfolio website.",
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-32">
      <h1 className="text-4xl md:text-5xl font-bricolage font-semibold mb-8">Terms of Service</h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-neutral-400 mb-8">Last updated: June 13, 2025</p>

        <h2 className="text-2xl font-medium mt-12 mb-4">1. Introduction</h2>
        <p>
          These Terms of Service ("Terms") govern your use of the website located at mugishamoses.design ("Site") operated
          by Mugisha Moses Design ("we", "us", or "our"). By accessing or using the Site, you agree to be bound by these
          Terms. If you disagree with any part of the Terms, you may not access the Site.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">2. Intellectual Property</h2>
        <p>
          The Site and its original content, features, and functionality are and will remain the exclusive property of
          Mugisha Moses Design and its licensors. The Site is protected by copyright, trademark, and other laws of both
          the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any
          product or service without the prior written consent of Mugisha Moses Design.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">3. User Content</h2>
        <p>
          Our Site may allow you to post, link, store, share and otherwise make available certain information, text,
          graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or
          through the Site, including its legality, reliability, and appropriateness.
        </p>
        <p className="mt-4">
          By posting Content on or through the Site, you represent and warrant that: (i) the Content is yours (you own
          it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii)
          the posting of your Content on or through the Service does not violate the privacy rights, publicity rights,
          copyrights, contract rights or any other rights of any person.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">4. Links To Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Mugisha
          Moses Design. Mugisha Moses Design has no control over, and assumes no responsibility for, the content, privacy
          policies, or practices of any third party web sites or services. You further acknowledge and agree that Mugisha
          Moses Design shall not be responsible or liable, directly or indirectly, for any damage or loss caused or
          alleged to be caused by or in connection with use of or reliance on any such content, goods or services
          available on or through any such web sites or services.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">5. Termination</h2>
        <p>
          We may terminate or suspend your access to the Site immediately, without prior notice or liability, for any
          reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by
          their nature should survive termination shall survive termination, including, without limitation, ownership
          provisions, warranty disclaimers, indemnity and limitations of liability.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">6. Disclaimer</h2>
        <p>
          Your use of the Site is at your sole risk. The Site is provided on an "AS IS" and "AS AVAILABLE" basis. The
          Site is provided without warranties of any kind, whether express or implied, including, but not limited to,
          implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of
          performance.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">7. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the United States, without regard
          to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be
          considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by
          a court, the remaining provisions of these Terms will remain in effect.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">8. Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to
          access or use our Site after those revisions become effective, you agree to be bound by the revised terms. If
          you do not agree to the new terms, please stop using the Site.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">9. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>By email: legal@mugishamoses.design</li>
          <li>By visiting the contact page on our website: mugishamoses.design/contact</li>
        </ul>
      </div>
    </div>
  )
}

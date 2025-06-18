import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Alex Morgan Portfolio",
  description: "Privacy policy and data protection information for Alex Morgan's design portfolio website.",
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-32">
      <h1 className="text-4xl md:text-5xl font-bricolage font-semibold mb-8">Privacy Policy</h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-neutral-400 mb-8">Last updated: June 13, 2025</p>

        <h2 className="text-2xl font-medium mt-12 mb-4">1. Introduction</h2>
        <p>
          This Privacy Policy explains how Alex Morgan Design ("we", "our", or "us") collects, uses, and shares your
          personal information when you visit alexmorgan.design (the "Site"). By using the Site, you agree to the
          collection and use of information in accordance with this policy.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">2. Information We Collect</h2>
        <p>
          We collect several different types of information for various purposes to provide and improve our Service to
          you:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>
            <strong>Personal Data:</strong> While using our Site, we may ask you to provide certain personally
            identifiable information that can be used to contact or identify you ("Personal Data"). This may include,
            but is not limited to:
          </li>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Cookies and Usage Data</li>
          </ul>
        </ul>

        <h2 className="text-2xl font-medium mt-12 mb-4">3. How We Use Your Information</h2>
        <p>We use the collected data for various purposes:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our Service</li>
          <li>To monitor the usage of our Service</li>
          <li>To detect, prevent and address technical issues</li>
          <li>
            To provide you with news, special offers and general information about other services and events which we
            offer
          </li>
        </ul>

        <h2 className="text-2xl font-medium mt-12 mb-4">4. Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our Site and hold certain information.
          Cookies are files with small amount of data which may include an anonymous unique identifier.
        </p>
        <p className="mt-4">
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
          you do not accept cookies, you may not be able to use some portions of our Site.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">5. Data Security</h2>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet,
          or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
          protect your Personal Data, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">6. Your Data Protection Rights</h2>
        <p>
          We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal
          Data. If you wish to be informed what Personal Data we hold about you and if you want it to be removed from
          our systems, please contact us.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">7. Changes To This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-4">8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>By email: privacy@alexmorgan.design</li>
          <li>By visiting the contact page on our website: alexmorgan.design/contact</li>
        </ul>
      </div>
    </div>
  )
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mugisha Moses - Resume/CV",
  description: "Print-friendly version of Mugisha Moses's resume/CV",
}

export default function PrintResumePage() {
  return (
    <div className="bg-white text-black p-8 max-w-4xl mx-auto print:p-0 print:max-w-none">
      <div className="mb-8 print:mb-6">
        <h1 className="text-3xl font-bold mb-2 print:text-2xl">Mugisha Moses</h1>
        <p className="text-lg text-gray-700 print:text-base">UI/UX Designer & Digital Product Specialist</p>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
          <p>hello@mugishamoses.design</p>
          <p>+1 (555) 123-4567</p>
          <p>San Francisco, CA</p>
          <p>linkedin.com/in/mugishamoses-uxdesigner</p>
        </div>
      </div>

      <div className="mb-8 print:mb-6">
        <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1 print:text-lg">Professional Summary</h2>
        <p className="text-gray-800">
          Experienced UI/UX designer with over 8 years of expertise in creating intuitive, engaging, and
          conversion-focused digital experiences. Specialized in user-centered design methodologies, design systems, and
          strategic thinking to solve complex user problems and drive business growth.
        </p>
      </div>

      <div className="mb-8 print:mb-6">
        <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1 print:text-lg">Experience</h2>
        <div className="space-y-6 print:space-y-4">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Senior UI/UX Designer</h3>
                <p className="text-gray-700">InnovateTech Solutions</p>
              </div>
              <p className="text-gray-600 text-sm">Jan 2021 - Present</p>
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-800 space-y-1 print:text-sm">
              <li>
                Led the redesign of the company's flagship product, resulting in a 35% increase in user engagement
              </li>
              <li>Established and maintained a comprehensive design system used across multiple products</li>
              <li>Conducted user research and usability testing to inform design decisions</li>
              <li>Collaborated with cross-functional teams to ensure seamless implementation of designs</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">UI/UX Designer</h3>
                <p className="text-gray-700">Digital Craft Agency</p>
              </div>
              <p className="text-gray-600 text-sm">Mar 2018 - Dec 2020</p>
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-800 space-y-1 print:text-sm">
              <li>Designed user interfaces for web and mobile applications across various industries</li>
              <li>Created wireframes, prototypes, and high-fidelity mockups for client projects</li>
              <li>Collaborated with developers to ensure accurate implementation of designs</li>
              <li>Participated in client meetings to present design concepts and gather feedback</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Junior UI Designer</h3>
                <p className="text-gray-700">WebFront Studios</p>
              </div>
              <p className="text-gray-600 text-sm">Jun 2016 - Feb 2018</p>
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-800 space-y-1 print:text-sm">
              <li>Assisted senior designers in creating user interfaces for websites and applications</li>
              <li>Designed visual assets, icons, and illustrations for various digital products</li>
              <li>Contributed to the development of brand guidelines and style guides</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8 print:mb-6">
        <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1 print:text-lg">Education</h2>
        <div className="space-y-4 print:space-y-2">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Master of Fine Arts in Interaction Design</h3>
                <p className="text-gray-700">California College of the Arts</p>
              </div>
              <p className="text-gray-600 text-sm">2014 - 2016</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">Bachelor of Arts in Graphic Design</h3>
                <p className="text-gray-700">University of California, Los Angeles</p>
              </div>
              <p className="text-gray-600 text-sm">2010 - 2014</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 print:mb-6">
        <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1 print:text-lg">Skills</h2>
        <div className="grid grid-cols-2 gap-4 print:text-sm">
          <div>
            <h3 className="font-bold mb-2">Design</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>User Interface Design</li>
              <li>User Experience Design</li>
              <li>Interaction Design</li>
              <li>Wireframing & Prototyping</li>
              <li>Design Systems</li>
              <li>Visual Design</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Tools & Technologies</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>Figma</li>
              <li>Adobe Creative Suite</li>
              <li>Sketch</li>
              <li>InVision</li>
              <li>HTML/CSS</li>
              <li>Principle</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8 print:mb-6">
        <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1 print:text-lg">Certifications</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 print:text-sm">
          <li>Certified User Experience Professional (CUXP)</li>
          <li>Google UX Design Professional Certificate</li>
          <li>Interaction Design Foundation UX Master Certification</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1 print:text-lg">References</h2>
        <p className="text-gray-800 print:text-sm">Available upon request</p>
      </div>

      <div className="mt-8 text-center text-gray-600 text-sm print:hidden">
        <p>This resume is also available online at mugishamoses.design/resume</p>
      </div>
    </div>
  )
}

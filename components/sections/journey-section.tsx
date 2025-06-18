export function JourneySection() {
  const timeline = [
    {
      period: "2023 - Present",
      role: "Senior UX Designer",
      company: "Leading UX strategy for enterprise products at TechCorp",
      description:
        "Spearheading design initiatives for B2B SaaS products, managing a team of 3 designers, and establishing design systems that scale across multiple product lines.",
      color: "accent-blue",
      achievements: [
        "Led 5 major product launches",
        "Increased team productivity by 40%",
        "Established company-wide design system",
      ],
    },
    {
      period: "2020 - 2023",
      role: "UX/UI Designer",
      company: "Designed user-centered experiences at DigitalWave Agency",
      description:
        "Worked with diverse clients from startups to Fortune 500 companies, delivering end-to-end design solutions across various industries including fintech, healthcare, and e-commerce.",
      color: "accent-purple",
      achievements: [
        "Completed 25+ client projects",
        "Achieved 95% client satisfaction",
        "Mentored 2 junior designers",
      ],
    },
    {
      period: "2018 - 2020",
      role: "UI Designer",
      company: "Created visual interfaces for mobile apps at AppStudio",
      description:
        "Focused on mobile-first design approaches, creating intuitive interfaces for iOS and Android applications with emphasis on user engagement and retention.",
      color: "accent-teal",
      achievements: [
        "Designed 15+ mobile apps",
        "Improved app store ratings by 30%",
        "Reduced user onboarding time by 50%",
      ],
    },
    {
      period: "2016 - 2018",
      role: "Graphic Designer",
      company: "Developed brand identities and marketing materials",
      description:
        "Started my design journey creating visual identities, marketing collateral, and digital assets. This foundation in visual design principles shaped my approach to UI/UX design.",
      color: "neutral-500",
      achievements: [
        "Created 50+ brand identities",
        "Managed print and digital campaigns",
        "Learned design fundamentals",
      ],
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bricolage font-semibold mb-12 animate-on-scroll">My Journey</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Timeline */}
        <div className="lg:col-span-1 animate-on-scroll">
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 border-l border-neutral-700 last:border-l-0">
                <div
                  className={`absolute left-0 top-0 w-3 h-3 rounded-full bg-${item.color} -translate-x-1.5 shadow-lg`}
                ></div>
                <div className={`text-sm text-${item.color} mb-2 font-medium`}>{item.period}</div>
                <h3 className="text-lg font-medium mb-1">{item.role}</h3>
                <p className="text-neutral-400 text-sm mb-3">{item.company}</p>
                <ul className="space-y-1">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="text-xs text-neutral-500 flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full bg-${item.color}`}></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="lg:col-span-2 animate-on-scroll">
          <div className="space-y-6">
            <p className="text-lg text-neutral-300">
              My journey into UX/UI design began with a fascination for the intersection of art, psychology, and
              technology. After completing my degree in Graphic Design, I quickly realized that creating meaningful
              digital experiences was where my true passion lay.
            </p>

            <p className="text-neutral-400">
              Starting as a graphic designer, I was drawn to the problem-solving aspects of design. I found myself
              constantly asking "why?" and "how might we improve this?" which naturally led me toward user experience
              design. I pursued additional education in UX methodologies and human-computer interaction, applying these
              principles to increasingly complex projects.
            </p>

            <p className="text-neutral-400">
              Working across various industries—from fintech to healthcare to e-commerce—has given me a versatile
              perspective on design challenges. I've learned that great design isn't just about aesthetics; it's about
              deeply understanding user needs and business goals to create solutions that serve both.
            </p>

            <p className="text-neutral-400">
              Today, I specialize in creating intuitive, accessible, and conversion-focused digital experiences. I'm
              particularly passionate about design systems that scale, research-driven decision making, and the
              psychology behind user behavior.
            </p>

            <div className="pt-6">
              <div className="bg-surface-foreground/50 rounded-lg p-6 border-l-4 border-accent-blue">
                <p className="text-neutral-300 italic">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <p className="text-sm text-neutral-500 mt-2">— Steve Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { BookOpen, Headphones, Camera, Bike } from "lucide-react"

export function BeyondDesignSection() {
  const interests = [
    {
      icon: BookOpen,
      title: "Reading",
      description:
        "I'm an avid reader of design theory, psychology, and science fiction. Books help me gain new perspectives and inspire creative thinking.",
      color: "accent-blue",
    },
    {
      icon: Headphones,
      title: "Music Production",
      description:
        "In my free time, I create electronic music. The process of layering sounds has surprising parallels to building complex user interfaces.",
      color: "accent-purple",
    },
    {
      icon: Camera,
      title: "Photography",
      description:
        "Street photography helps me observe human behavior and train my eye for composition, balance, and visual storytelling.",
      color: "accent-teal",
    },
    {
      icon: Bike,
      title: "Cycling",
      description:
        "Long-distance cycling clears my mind and often leads to my best design ideas. There's nothing like the open road for creative thinking.",
      color: "orange-400",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Beyond Design</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          Getting to know the person behind the designer. My interests and hobbies shape my creative perspective.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, index) => (
          <div
            key={interest.title}
            className="bg-surface-foreground rounded-xl2 p-6 border border-white/5 animate-on-scroll group hover:border-white/10 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-lg bg-${interest.color}/20 flex items-center justify-center group-hover:bg-${interest.color}/30 transition flex-shrink-0`}
              >
                <interest.icon className={`w-6 h-6 text-${interest.color}`} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 group-hover:text-white transition-colors">{interest.title}</h3>
                <p className="text-neutral-400">{interest.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-xl2 p-8 glass-morphism animate-on-scroll">
        <div className="text-center">
          <h3 className="text-xl font-medium mb-4">My Design Philosophy</h3>
          <p className="text-lg text-neutral-300 italic">
            "I believe that my diverse interests make me a better designer. Creativity doesn't exist in a vacuum—it's
            nourished by experiences, perspectives, and passions outside of our professional work."
          </p>
        </div>
      </div>
    </section>
  )
}

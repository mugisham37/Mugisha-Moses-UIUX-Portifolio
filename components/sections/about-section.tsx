import Link from "next/link"
import { ArrowRight, Award, GraduationCap, Users } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll" style={{ animationDelay: "2.7s" }}>
          <h2 className="text-3xl font-bricolage font-semibold mb-6">About Me</h2>
          <p className="text-lg text-neutral-400 mb-6">
            I'm a passionate UI/UX designer with over 7 years of experience creating digital experiences that not only
            look beautiful but also solve real user problems and drive business results.
          </p>
          <p className="text-neutral-400 mb-8">
            My approach combines user-centered design principles with business strategy to create products that users
            love and companies profit from. I believe great design is invisible – it just works.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-blue/20 flex items-center justify-center">
                <Award className="w-4 h-4 text-accent-blue" />
              </div>
              <span className="text-neutral-300">Certified UX Professional (CXL Institute)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-accent-purple" />
              </div>
              <span className="text-neutral-300">Master's in Human-Computer Interaction</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-teal/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-accent-teal" />
              </div>
              <span className="text-neutral-300">Led design teams at 3 startups</span>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-medium text-accent-blue hover:text-accent-blue/80 transition group magnetic-hover"
            >
              Learn More About Me
              <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
        <div className="animate-on-scroll" style={{ animationDelay: "2.9s" }}>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-xl2 flex items-center justify-center overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Mugisha Moses"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl2 bg-accent-blue flex items-center justify-center text-white floating-animation">
              <Award className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

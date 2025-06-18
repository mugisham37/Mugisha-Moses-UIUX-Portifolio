import Image from "next/image"

export function ClientsSection() {
  const clients = [
    { name: "Google", logo: "https://cdn.worldvectorlogo.com/logos/google-2015.svg" },
    { name: "Adobe", logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg" },
    { name: "Spotify", logo: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg" },
    { name: "Airbnb", logo: "https://cdn.worldvectorlogo.com/logos/airbnb.svg" },
    { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" },
    { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
    { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
    { name: "Uber", logo: "https://cdn.worldvectorlogo.com/logos/uber-2.svg" },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Clients & Collaborations</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          I've had the privilege of working with innovative companies across various industries, 
          helping them create exceptional digital experiences that drive business growth.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-on-scroll">
        {clients.map((client) => (
          <div
            key={client.name}
            className="bg-surface-foreground rounded-lg p-6 flex items-center justify-center border border-white/5 hover:border-white/10 transition-all duration-300 group"
          >
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={160}
              height={80}
              className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

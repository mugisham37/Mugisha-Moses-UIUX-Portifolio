export type Locale = "en" | "es" | "fr" | "de" | "ja"

export interface Translations {
  [key: string]: string | Translations
}

export const translations: Record<Locale, Translations> = {
  en: {
    common: {
      navigation: {
        home: "Home",
        about: "About",
        services: "Services",
        work: "Work",
        process: "Process",
        blog: "Blog",
        resources: "Resources",
        testimonials: "Testimonials",
        contact: "Contact",
      },
      buttons: {
        learnMore: "Learn More",
        viewAll: "View All",
        getInTouch: "Get in Touch",
        sendMessage: "Send Message",
        downloadCV: "Download CV",
        viewProject: "View Project",
        readMore: "Read More",
      },
      footer: {
        rights: "All rights reserved",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
      },
    },
    home: {
      hero: {
        title: "Creating digital experiences that convert",
        subtitle: "UI/UX Designer specializing in intuitive, engaging, and conversion-focused digital experiences",
        cta: "View My Work",
      },
      about: {
        title: "About Me",
        description:
          "I'm a UI/UX designer with over 8 years of experience creating digital products that solve real user problems and drive business growth.",
      },
      services: {
        title: "Services",
        description: "Specialized design services tailored to your project needs",
      },
      work: {
        title: "Featured Work",
        description: "Selected projects I've worked on",
      },
      testimonials: {
        title: "Client Testimonials",
        description: "What my clients say about working with me",
      },
    },
    contact: {
      title: "Get in Touch",
      description: "Fill out the form below with some information about your project",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        budget: "Budget Range",
        timeline: "Project Timeline",
        message: "Project Details",
        submit: "Send Message",
      },
      success: "Message sent successfully!",
      error: "There was an error sending your message.",
    },
  },
  es: {
    common: {
      navigation: {
        home: "Inicio",
        about: "Sobre Mí",
        services: "Servicios",
        work: "Proyectos",
        process: "Proceso",
        blog: "Blog",
        resources: "Recursos",
        testimonials: "Testimonios",
        contact: "Contacto",
      },
      buttons: {
        learnMore: "Saber Más",
        viewAll: "Ver Todo",
        getInTouch: "Contactar",
        sendMessage: "Enviar Mensaje",
        downloadCV: "Descargar CV",
        viewProject: "Ver Proyecto",
        readMore: "Leer Más",
      },
      footer: {
        rights: "Todos los derechos reservados",
        privacyPolicy: "Política de Privacidad",
        termsOfService: "Términos de Servicio",
      },
    },
    home: {
      hero: {
        title: "Creando experiencias digitales que convierten",
        subtitle:
          "Diseñador UI/UX especializado en experiencias digitales intuitivas, atractivas y enfocadas en la conversión",
        cta: "Ver Mi Trabajo",
      },
      about: {
        title: "Sobre Mí",
        description:
          "Soy un diseñador UI/UX con más de 8 años de experiencia creando productos digitales que resuelven problemas reales de los usuarios e impulsan el crecimiento del negocio.",
      },
      services: {
        title: "Servicios",
        description: "Servicios de diseño especializados adaptados a las necesidades de tu proyecto",
      },
      work: {
        title: "Proyectos Destacados",
        description: "Proyectos seleccionados en los que he trabajado",
      },
      testimonials: {
        title: "Testimonios de Clientes",
        description: "Lo que mis clientes dicen sobre trabajar conmigo",
      },
    },
    contact: {
      title: "Contacto",
      description: "Completa el formulario con información sobre tu proyecto",
      form: {
        name: "Nombre",
        email: "Correo Electrónico",
        company: "Empresa",
        budget: "Presupuesto",
        timeline: "Cronograma",
        message: "Detalles del Proyecto",
        submit: "Enviar Mensaje",
      },
      success: "¡Mensaje enviado con éxito!",
      error: "Hubo un error al enviar tu mensaje.",
    },
  },
  fr: {
    // French translations (abbreviated for brevity)
    common: {
      navigation: {
        home: "Accueil",
        about: "À Propos",
        services: "Services",
        work: "Projets",
        process: "Processus",
        blog: "Blog",
        resources: "Ressources",
        testimonials: "Témoignages",
        contact: "Contact",
      },
      buttons: {
        learnMore: "En Savoir Plus",
        viewAll: "Voir Tout",
        getInTouch: "Me Contacter",
        sendMessage: "Envoyer",
        downloadCV: "Télécharger CV",
        viewProject: "Voir le Projet",
        readMore: "Lire Plus",
      },
      footer: {
        rights: "Tous droits réservés",
        privacyPolicy: "Politique de Confidentialité",
        termsOfService: "Conditions d'Utilisation",
      },
    },
    // Additional French translations would go here
  },
  de: {
    // German translations (abbreviated for brevity)
    common: {
      navigation: {
        home: "Startseite",
        about: "Über Mich",
        services: "Dienstleistungen",
        work: "Projekte",
        process: "Prozess",
        blog: "Blog",
        resources: "Ressourcen",
        testimonials: "Referenzen",
        contact: "Kontakt",
      },
      buttons: {
        learnMore: "Mehr Erfahren",
        viewAll: "Alle Anzeigen",
        getInTouch: "Kontaktieren",
        sendMessage: "Nachricht Senden",
        downloadCV: "Lebenslauf Herunterladen",
        viewProject: "Projekt Ansehen",
        readMore: "Weiterlesen",
      },
      footer: {
        rights: "Alle Rechte vorbehalten",
        privacyPolicy: "Datenschutzrichtlinie",
        termsOfService: "Nutzungsbedingungen",
      },
    },
    // Additional German translations would go here
  },
  ja: {
    // Japanese translations (abbreviated for brevity)
    common: {
      navigation: {
        home: "ホーム",
        about: "私について",
        services: "サービス",
        work: "プロジェクト",
        process: "プロセス",
        blog: "ブログ",
        resources: "リソース",
        testimonials: "お客様の声",
        contact: "お問い合わせ",
      },
      buttons: {
        learnMore: "詳細を見る",
        viewAll: "すべて見る",
        getInTouch: "お問い合わせ",
        sendMessage: "メッセージを送信",
        downloadCV: "履歴書をダウンロード",
        viewProject: "プロジェクトを見る",
        readMore: "続きを読む",
      },
      footer: {
        rights: "全著作権所有",
        privacyPolicy: "プライバシーポリシー",
        termsOfService: "利用規約",
      },
    },
    // Additional Japanese translations would go here
  },
}

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split(".")
  let current: any = translations[locale]

  for (const k of keys) {
    if (current[k] === undefined) {
      console.warn(`Translation key not found: ${key} for locale ${locale}`)
      return key
    }
    current = current[k]
  }

  if (typeof current !== "string") {
    console.warn(`Translation key is not a string: ${key} for locale ${locale}`)
    return key
  }

  return current
}

export type AnimationVariant =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "zoomIn"
  | "scaleIn"
  | "blurIn"
  | "rotateIn"
  | "bounceIn"

export type AnimationOptions = {
  duration?: number
  delay?: number
  easing?: string
  once?: boolean
  threshold?: number
  rootMargin?: string
}

export const defaultAnimationOptions: AnimationOptions = {
  duration: 800,
  delay: 0,
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  once: true,
  threshold: 0.1,
  rootMargin: "0px",
}

export const getAnimationStyles = (
  variant: AnimationVariant,
  options: AnimationOptions = {},
): { initial: string; animate: string; transition: string } => {
  const mergedOptions = { ...defaultAnimationOptions, ...options }
  const { duration, delay, easing } = mergedOptions

  const transition = `transition-all duration-${duration} delay-${delay} ${easing}`

  switch (variant) {
    case "fadeIn":
      return {
        initial: "opacity-0",
        animate: "opacity-100",
        transition,
      }
    case "fadeInUp":
      return {
        initial: "opacity-0 translate-y-8",
        animate: "opacity-100 translate-y-0",
        transition,
      }
    case "fadeInDown":
      return {
        initial: "opacity-0 -translate-y-8",
        animate: "opacity-100 translate-y-0",
        transition,
      }
    case "fadeInLeft":
      return {
        initial: "opacity-0 -translate-x-8",
        animate: "opacity-100 translate-x-0",
        transition,
      }
    case "fadeInRight":
      return {
        initial: "opacity-0 translate-x-8",
        animate: "opacity-100 translate-x-0",
        transition,
      }
    case "zoomIn":
      return {
        initial: "opacity-0 scale-95",
        animate: "opacity-100 scale-100",
        transition,
      }
    case "scaleIn":
      return {
        initial: "opacity-0 scale-90",
        animate: "opacity-100 scale-100",
        transition,
      }
    case "blurIn":
      return {
        initial: "opacity-0 blur-md",
        animate: "opacity-100 blur-0",
        transition,
      }
    case "rotateIn":
      return {
        initial: "opacity-0 rotate-12",
        animate: "opacity-100 rotate-0",
        transition,
      }
    case "bounceIn":
      return {
        initial: "opacity-0 scale-95",
        animate: "opacity-100 scale-100 animate-bounce",
        transition,
      }
    default:
      return {
        initial: "opacity-0",
        animate: "opacity-100",
        transition,
      }
  }
}

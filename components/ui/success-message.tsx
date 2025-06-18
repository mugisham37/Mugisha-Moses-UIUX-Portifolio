import { CheckCircle } from "lucide-react"

interface SuccessMessageProps {
  title: string
  message: string
}

export function SuccessMessage({ title, message }: SuccessMessageProps) {
  return (
    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 flex items-start gap-4 animate-on-scroll">
      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 success-checkmark" />
      <div>
        <h3 className="font-medium text-green-500 mb-2">{title}</h3>
        <p className="text-neutral-300">{message}</p>
      </div>
    </div>
  )
}

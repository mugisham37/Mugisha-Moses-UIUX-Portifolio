import { AlertCircle } from "lucide-react"

interface ErrorMessageProps {
  title: string
  message: string
}

export function ErrorMessage({ title, message }: ErrorMessageProps) {
  return (
    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-6 flex items-start gap-4 animate-on-scroll">
      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
      <div>
        <h3 className="font-medium text-red-500 mb-2">{title}</h3>
        <p className="text-neutral-300">{message}</p>
      </div>
    </div>
  )
}

import { Loader2 } from "lucide-react"

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex items-center flex-col gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <p className="text-sm text-muted-foreground">Loading resources ...</p>
        <p className="text-sm text-muted-foreground">This may take up to 30s or more </p>
      </div>
    </div>
  )
}

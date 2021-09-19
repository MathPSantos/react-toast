import { ToasterItem } from "components/ToasterItem"
import { useToaster } from "hooks/useToaster"

export function Toaster() {
  const { toasts } = useToaster()
  
  return (
    <div>
      {toasts.map((t) => <ToasterItem toast={t} />)}
    </div>
  )
}
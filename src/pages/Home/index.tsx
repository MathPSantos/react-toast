import { Toaster } from "components";
import { toast } from "core/toast";

export function Home() {
  function handleNewToast() {
    toast('Novo')
  }

  return (
    <div>
      <button onClick={handleNewToast}>Novo Toast</button>

      <Toaster />
    </div>
  )
}
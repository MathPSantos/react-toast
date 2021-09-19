import { Toast } from "core/toast";
import { useEffect, useMemo } from "react";
import { useStore } from "./useStore";

export const useToaster = (
  toastOptions = {}
) : { toasts: Toast[]; handlers: any } => {
  const { toasts } = useStore(toastOptions);

  useEffect(() => {}, []); 

  const handlers = useMemo(() => ({}), [])

  return { toasts, handlers }
}  
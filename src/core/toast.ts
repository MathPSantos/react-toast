import { dispatch } from "hooks/useStore";
import { uuid } from "utils/helpers/uuid";

export enum ActionType {
  UPSERT_TOAST,
  UPDATE_TOAST,
  ADD_TOAST
}

export interface Toast {
  type: ToastType;
  id: string;
  message: string;
  duration: number;
  createdAt: number;
  visible: boolean;
}

type ToastHandler = (message: string, options?: {}) => string;

export type ToastType = "success" | "error" | "loading" | "blank" | "custom";

const createToast = (message: string, type: ToastType = 'blank'): Toast => ({
  id: uuid(),
  type,
  message,
  duration: 2000,
  createdAt: Date.now(),
  visible: true
})

const createHandler = (type?: ToastType): ToastHandler => (
  message,
  options
) => {
  const toast = createToast(message, type)
  dispatch({ type: ActionType.UPSERT_TOAST, toast })
  return toast.id
}

const toast = (message: string, opts = {}) => 
  createHandler('blank')(message, opts)

export { toast }
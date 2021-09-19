import { Toast } from 'core/toast';

interface ToasterItemProps {
  toast: Toast
}

export const ToasterItem = ({ toast }: ToasterItemProps) => {
  return (
    <div>{toast.message}</div>
  )
}
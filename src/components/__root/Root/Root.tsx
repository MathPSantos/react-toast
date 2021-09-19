import { ReactNode } from "react";
import { BrowserRouter } from 'react-router-dom';

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return(
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}
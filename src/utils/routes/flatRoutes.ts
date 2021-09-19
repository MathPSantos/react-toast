import { PageRoute } from "routes";

export function flatRoutes(routes: PageRoute[]): PageRoute[] {
  return routes.reduce<PageRoute[]>((prev, curr) => {
    if(curr.routes?.length)  
      return [...prev, curr, ...flatRoutes(curr.routes)]

    return [...prev, curr]
  }, [])
}

import { PageRoute } from "routes";
import { flatRoutes } from ".";

export function getRoute(routes: PageRoute[], key: string) {
  return flatRoutes(routes).find((route) => route.key === key);
}
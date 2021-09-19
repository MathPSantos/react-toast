import { GroupKey, PageRoute } from "routes";
import { flatRoutes } from ".";

export function getRoutesByGroupKey(routes: PageRoute[], groupKey: GroupKey) {
  return flatRoutes(routes).filter((route) => route.groupKey === groupKey) || [];
}
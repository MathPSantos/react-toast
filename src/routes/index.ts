import { RouteComponentProps, StaticContext } from "react-router";

import { Home } from "pages/Home";

import { formatRoutes } from "utils/routes";

export type GroupKey = 'public' | 'private'

export type PageRoute = {
  key: string,
  path?: string,
  groupKey?: GroupKey,
  exact?: boolean,
  component?: React.ComponentType<any> | React.ComponentType<RouteComponentProps<any, StaticContext, unknown>>;
  name?: string,
  routes?: PageRoute[],
}

const pageRoutes: PageRoute[] = [
  {
    key: 'home',
    exact: true,
    component: Home,
    groupKey: 'public',
  }
]

export const routes = formatRoutes(pageRoutes)
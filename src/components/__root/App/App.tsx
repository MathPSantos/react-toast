import { Switch, Route } from "react-router-dom";

import { Root } from "../Root/Root";

import { routes } from "routes";

import { getRoutesByGroupKey } from "utils/routes";

export function App() {
  const publicRoutes = getRoutesByGroupKey(routes, 'public');

  return (
    <Root>
      <Switch>
        {publicRoutes?.map((route) => (
          <Route 
            {...route} 
            key={route.key}
            path={route.key === 'home' ? '/' : route.path}
          />
        ))}
      </Switch>
    </Root>
  );
}

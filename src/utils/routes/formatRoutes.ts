import { PageRoute } from "routes";

export function formatRoutes(routes: PageRoute[], parent?: PageRoute) {
  return routes.reduce<PageRoute[]>((prev, curr) => {
    const { key } = curr;

    let currItem = { ...curr }

    currItem = {
      ...currItem,
      path: parent ? `${parent.path}/${key}` : `/${key}`,
    }

    if(curr.routes?.length) {
      currItem = {
        ...currItem,
        routes: formatRoutes(curr.routes, currItem)
      }
    }

    return [...prev, currItem];
  }, []);
};

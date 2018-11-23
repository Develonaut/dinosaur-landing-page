import {
  getBaseUrls,
  getUrl,
  getUrlArgs,
  parseQueryParams,
  matchRouteUrl,
} from 'conf/urls.js';
import { titleCase } from 'conf/utils';

import Home from 'components/views/Home/Home';

export const baseRouteConfig = {
  name: 'Home',
  path: getBaseUrls().HOME,
  component: Home,
  scripts: [{}],
};

export function getBaseRoutes() {
  return [].concat([baseRouteConfig]);
}

export function getRouteBundles(blacklist = []) {
  const routes = [
    ...getBaseRoutes(),
  ];

  const bundle = routes.reduce((_routes, route) => {
    // If the route isn't blacklisted, add it to the routeBundle.
    if (!blacklist.includes(route.path)) _routes.push(route);
    return _routes;
  }, []);
  return bundle;
}

export function getRouteConfig({
  pathname = '',
}) {
  return getRouteBundles()
    .filter(route => route.path === pathname) || baseRouteConfig;
}

export function getValidatedRoute({
  pathname = '',
  search = '',
}) {
  // Find a matching route for the pathname.
  const path = matchRouteUrl(pathname);
  // Build any pathArgs from the pathname is there are any.
  const pathArgs = getUrlArgs(pathname);
  // If we couldn't find a path use the baseRoute.
  const url = (!path) ? baseRouteConfig.path : path;
  // return a built Url.
  return {
    pathname: getUrl(url, pathArgs, {}),
    queryParams: parseQueryParams(search),
  };
}

export function isValidRoute(location) {
  const { pathname } = location;
  const { pathname: validPathname } = getValidatedRoute(location);
  return validPathname === pathname;
}

export function getRouteName(pathname) {
  let urlArray = pathname.split('/').filter(name => name);
  urlArray = urlArray.map(name => name.replace(/-/g, ' '));
  const formattedName = (urlArray.length)
    ? urlArray.join(' - ')
    : baseRouteConfig.name;
  return titleCase(formattedName);
}

/* eslint-disable object-curly-spacing */
/* eslint-disable object-curly-newline */
import pathToRegexp, { parse, compile } from 'path-to-regexp';
import urljoin from 'url-join';
import queryString from 'query-string';

export function getBaseUrls() {
  return {
    HOME: '/',
  };
}

export function getExternalUrls() {
  return {
    BEHANCE: '//www.behance.net/dinosaurcreative',
    EMAIL: 'hello@dinosaur.design'
  }
}

export function getAPIUrls() {
  return {};
}

export function getUrl(url = '', pathArgs = {}, queryParams = {}, encode = false) {
  const compiledUrl = compile(url)(pathArgs);
  const serializedParams = serialize(queryParams, { encode });
  const delimeter = (url.includes('?')) ? '&' : '?';
  return (serializedParams)
    ? urljoin(`${compiledUrl}${delimeter}${serializedParams}`)
    : urljoin(compiledUrl);
}

export function getPublicPaths() {
  return {
    ...getBaseUrls()
  };
}

export function matchRouteUrl(pathname = undefined) {
  if (!pathname) return undefined;
  const paths = getPublicPaths();
  return Object.values(paths).find(path => {
    const { regEx } = parseUrl(path);
    return regEx.exec(pathname);
  }) || undefined;
}

export function getUrlArgs(pathname = '', filterOptional = false) {
  const matchedPath = matchRouteUrl(pathname);
  let urlArgs = {};
  if (matchedPath) {
    const {
      regEx,
      params,
    } = parseUrl(matchedPath);
    const parsedRoute = regEx.exec(pathname);
    urlArgs = params.reduce((_params, { name: paramName, optional }, idx) => {
      if (idx === 0 || (filterOptional && optional)) return _params;
      return {
        ..._params,
        [paramName]: parsedRoute[idx],
      };
    }, {});
  }

  return urlArgs;
}

export function parseUrl(url) {
  return {
    regEx: pathToRegexp(url),
    params: parse(url),
  };
}

// Make a payload url friendly and filter our bad object values.
export function serialize(obj, options = {}) {
  // eslint-disable-next-line
  Object.keys(obj).forEach(key => (!obj[key] || obj[key] === 'undefined') && delete obj[key]);
  return (Object.keys(obj).length) ? queryString.stringify(obj, options) : undefined;
}

// Turn a query string into an Object
export function parseQueryParams(queryString = null) {
  const {
    location: {
      search = '',
    } = {}
  } = window;
  return queryString.parse(queryString || search);
}

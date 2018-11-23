import React from 'react';
import { withRouter } from 'react-router';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
  baseRouteConfig,
  getRouteBundles,
} from 'conf/routes';

import PageHead from 'components/shared/PageHead';

function Router({
  history,
  location,
  match,
}) {
  const {
    component: baseRouteComponent,
    props: baseRouteProps = {},
    path: baseRoutePath = '',
  } = baseRouteConfig;

  const routeBundle = getRouteBundles([baseRoutePath]);
  return (
    <React.Fragment>
      <PageHead />
      <Switch>
        {
          routeBundle.map(({
            path,
            exact,
            props = {},
            component,
          }) => {
            return (
              <Route
                key={path}
                path={path}
                exact={exact}
                render={() => {
                  const routeProps = {
                    history,
                    location,
                    match,
                    ...props,
                  };

                  return (
                    <React.Fragment>
                      { React.createElement(component, { ...routeProps })}
                    </React.Fragment>
                  );
                }}
              />
            );
          })
        }
        <Route
          render={
            () => {

              return (
                <React.Fragment>
                  { React.createElement(baseRouteComponent, baseRouteProps)}
                </React.Fragment>
              );
            }}
        />
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(Router);

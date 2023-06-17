import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Dashboards = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover='content' />}>
      <Switch>
        <Route
          path={`${match.url}/default`}
          component={lazy(() => import(`./default`))}
        />
        <Route
          path={`${match.url}/ecommerce`}
          component={lazy(() => import(`./e-commerce`))}
        />
        <Route
          path={`${match.url}/orders`}
          component={lazy(() => import(`./e-commerce/orders`))}
        />
        <Route
          path={`${match.url}/clients`}
          component={lazy(() => import(`./clients`))}
        />
        <Route
          path={`${match.url}/banners`}
          component={lazy(() => import(`./analytic`))}
        />
        <Route
          path={`${match.url}/stores`}
          component={lazy(() => import(`./analytic`))}
        />
        <Route
          path={`${match.url}/employees`}
          component={lazy(() => import(`./sales`))}
        />
        <Route
          path={`${match.url}/mail`}
          component={lazy(() => import(`./mail`))}
        />
        <Redirect from={`${match.url}`} to={`${match.url}/default`} />
      </Switch>
    </Suspense>
  );
};

export default Dashboards;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IRoutesTypes, routes } from 'util/Route';

const App = (): JSX.Element => {
  return (
    <Switch>
      {
        routes.map(({ pathname, component }: IRoutesTypes, index: number) => {
          return (
            <Route
              key={index}
              exact
              path={pathname}
              component={component}
            />
          );
        })
      }
    </Switch>
  );
}

export default App;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeEnums } from 'lib/enum/ThemeEnum';
import routes, { IRoute } from 'util/Route';
import useTheme from 'hooks/util/useTheme';

const App = (): JSX.Element => {
  const { theme } = useTheme();
  const { LIGHT } = ThemeEnums;

  return (
    <div className={theme === LIGHT ? 'light' : 'dark'}>
      <Switch>
        {
          routes.map(({ pathname, component }: IRoute, index: number) => {
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
    </div>
  );
}

export default App;
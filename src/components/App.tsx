import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { themeState } from 'atom/theme';
import { ThemeEnums } from 'lib/enum/ThemeEnum';
import routes, { IRoute } from 'util/Route';

const App = (): JSX.Element => {
  const theme: ThemeEnums = useRecoilValue<ThemeEnums>(themeState);
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
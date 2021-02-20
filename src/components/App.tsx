import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeEnums } from 'enum/ThemeEnum';
import { themeMode } from 'recoil/Theme';
import { IRoutesTypes, routes } from 'util/Route';

const App = (): JSX.Element => {
  const theme: ThemeEnums = useRecoilValue(themeMode);
  const { LIGHT } = ThemeEnums;

  return (
    <div className={theme === LIGHT ? 'light' : 'dark'}>
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
    </div>
  );
}

export default App;
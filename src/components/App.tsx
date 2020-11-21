import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Pages from 'pages';

const App = () => {
  const { Main, Project, AboutMe, History } = Pages;

  return (
    <Switch>
      <Route
        path ="/"
        exact
        render ={() => <Main />}
      />

      <Route
        path ="/projects"
        exact
        render ={() => <Project />}
      />

      <Route
        path ="/aboutme"
        exact
        render ={() => <AboutMe />}
      />

      <Route
        path ="/history"
        exact
        render={() => <History />}
      />
    </Switch>
  );
}

export default App;
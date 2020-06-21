import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectsPage from 'pages/ProjectsPage';
import MainPage from 'pages/MainPage';
import AboutMePage from 'pages/AboutMePage';

function App() {
  return (
    <Switch>
      <Route
        path ="/"
        exact
        render ={() => <MainPage />}
      />

      <Route
        path ="/projects"
        exact
        render ={() => <ProjectsPage />}
      />

      <Route
        path ="/aboutme"
        exact
        render ={() => <AboutMePage />}
      />
    </Switch>
  );
}

export default App;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectsPage from 'pages/ProjectsPage';
import MainPage from 'pages/MainPage';

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
    </Switch>
  );
}

export default App;
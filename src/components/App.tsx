import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectsPage from 'pages/ProjectsPage';

function App() {
  return (
    <Switch>
      <Route
        path ="/projects"
        exact
        render ={() => <ProjectsPage />}
      />
    </Switch>
  );
}

export default App;
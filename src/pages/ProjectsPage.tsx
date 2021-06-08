import React from 'react';
import Projects from 'components/Projects';
import PageTemplate from 'components/Common/Template/PageTemplate';

const ProjectsPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Projects />
    </PageTemplate>
  );
};

export default ProjectsPage;
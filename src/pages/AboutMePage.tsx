import React from 'react';
import AboutMe from 'components/AboutMe';
import PageTemplate from 'components/Common/Template/PageTemplate';

const AboutMePage = (): JSX.Element => {
  return (
    <PageTemplate>
      <AboutMe />
    </PageTemplate>
  );
};

export default AboutMePage;
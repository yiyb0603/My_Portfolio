import React from 'react';
import Projects from 'components/Projects';
import NavBar from 'components/common/NavBar';
import Footer from 'components/common/Footer';

const ProjectsPage = () => {
    return (
        <>
            <NavBar />
            <Projects />
            <Footer />
        </>
    );
}

export default ProjectsPage;
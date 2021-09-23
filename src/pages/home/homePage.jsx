import React from 'react';
import AboutComponent from '../../components/AboutComponent';
import Footer from '../../components/FooterComponent/FooterComponent';
import Project from '../../components/ProjectComponent';
import projects from "../../utils/projects";

import './homePage.scss';

export const HomePage = ({ ...props }) => {
    return (
        <>
            <div className="page">
                <section className="intro">
                    <h1 className="screen-width">From vision to Reality</h1>
                </section>
                <section className="projects screen-width">
                    {
                        projects.map((p) => (
                            <Project background={p.background}
                            link={p.link}
                            page={p.page}
                            skills={p.skills}
                            title={p.title} />
                        ))
                    }
                </section>
                <AboutComponent />
            </div>
            <Footer />
        </>
    );
};

export default HomePage;

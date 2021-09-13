import React from "react";
import HeaderComponent from '../../components/HeaderComponent';
import ProjectComponent from '../../components/ProjectComponent';

// styling
import "./projectsPage.scss";

export const ProjectsPage = ({ ...props }) => {
    return (
        <>
            <HeaderComponent />
            <div className="page">
                <section className="intro">
                    <h1>Projects</h1>
                    <p>Welkom in mijn groeiend lijstje van projecten</p>
                    <p>Neem een kijkje achter de schermen!</p>
                </section>
                <section className="projects-big screen-width">
                    <ProjectComponent
                        background={'promatask/ROP06601_854x480.jpg'}
                        link={'https://www.promatask.com'}
                        page={`/projects/promatask`}
                        skills={["react"]}
                        title={`Promatask`}
                    />
                </section>
            </div>
        </>
    )
}
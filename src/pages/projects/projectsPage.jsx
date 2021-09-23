import React from "react";
import ProjectComponent from '../../components/ProjectComponent';

// data
import projects from "../../utils/projects";

// styling
import "./projectsPage.scss";

export const ProjectsPage = ({ ...props }) => {
    return (
        <>
            <div className="page">
                <section className="intro">
                    <h1>Projects</h1>
                    <p>Welkom in mijn groeiend lijstje van projecten</p>
                    <p>Neem gerust een kijkje achter de schermen!</p>
                </section>
                <section className="projects-big screen-width">
                    {projects.map((p) => (
                        <ProjectComponent
                            background={p.background}
                            link={p.link}
                            page={p.page}
                            skills={p.skills}
                            title={p.title}
                        />
                    ))}
                </section>
            </div>
        </>
    )
}

export default ProjectsPage;
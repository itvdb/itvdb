import React from 'react';
import { useParams } from 'react-router';

// data
import projects from '../../utils/projects';

export const ProjectPage = ({ ...props }) => {
    let { projectID } = useParams();

    return (
        <>
            <section
                className="intro"
                style={{
                    backgroundImage: `url(/assets/projects/${
                        projects.filter((p) => {
                            console.log(p.page);
                            console.log(projectID);
                            return p.page === projectID;
                        })[0]?.background
                    })`,
                }}
            >
                <h1>{projectID}</h1>
            </section>
            <section className="screen-width">
                <p>pictures?</p>
            </section>
            <section className="screen-width">
                <p>feedback</p>
            </section>
        </>
    );
};

export default ProjectPage;

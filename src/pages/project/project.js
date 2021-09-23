import React from 'react';
import { useParams, withRouter } from 'react-router';
import _ from 'lodash';

// data
import projects from '../../utils/projects';

export const ProjectPage = ({ ...props }) => {
    let { projectID } = useParams();

    const selectedProject = (id) => {
        const project = projects.filter((p) => p.page === id);
        if (_.isEmpty(project)) props.history.push('/404');

        return project[0];
    };

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
            <div className="screen-width">
                {selectedProject(projectID).pictures.map((p, index) => (
                    <div
                        style={{
                            // eslint-disable-next-line no-cond-assign
                            float: `${(index %= 2) ? 'right' : 'left'}`,
                        }}
                    >
                        <img
                            src={`/assets/projects/${p.src}`}
                            alt={`${p.alt}`}
                            className="image"
                        />
                    </div>
                ))}
            </div>
            <div className="screen-width">
                <p>feedback</p>
            </div>
        </>
    );
};

export default withRouter(ProjectPage);

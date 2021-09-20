import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Tooltip from '@material-ui/core/Tooltip';

import './ProjectComponent.scss';
import { Typography } from '@material-ui/core';

const Skills = ({ list }) => {
    if (_.isEmpty(list)) return <></>;
    return list.map((skill) => {
        return (
            <Tooltip title={`${skill}`}>
                <img
                    className="skill"
                    src={`./assets/icons/${skill}.svg`}
                    alt={`${skill}`}
                />
            </Tooltip>
        );
    });
};

export const ProjectComponent = ({
    title,
    skills,
    background,
    link,
    page,
    ...props
}) => (
    <>
        <a href={`/projects/${page}`}>
            <div
                className="card"
                style={{
                    backgroundImage: `url("./assets/projects/${background}")`,
                }}
            >
                <div className="glass background-animation"></div>
                <div className="info">
                    <a href={`${link}`} className="project">
                        <img
                            style={{
                                width: '10px',
                                height: '10px',
                            }}
                            src={`./assets/icons/external-link-alt-solid.svg`}
                            alt={`link to ${title}`}
                        />
                        <h3 className="title">{title}</h3>
                    </a>
                    <div className="skill-summation">
                        <Skills list={skills} />
                    </div>
                </div>
            </div>
        </a>
    </>
);

ProjectComponent.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.array,
    background: PropTypes.string.isRequired,
};

ProjectComponent.defaultProps = {
    title: 'Project Title',
    skills: ['figma', 'node-js', 'react', 'sass'],
    background: '974337_854x480.jpg',
    link: '#',
    page: '#',
};

export default ProjectComponent;

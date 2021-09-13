import React from 'react';
import PropTypes from 'prop-types';

// routing
import { Link } from "react-router-dom";

import './HeaderComponent.scss';

export const HeaderComponent = ({ title, ...props }) => (
    <header>
        <div className="header">
            <h1>
                <Link to={`/`}>{title}</Link>
            </h1>
            <nav>
                <Link className="background-animation" to={`/projects`}>
                    projects
                </Link>
                <Link className="background-animation" to={`/contact`}>
                    contact
                </Link>
            </nav>
        </div>
    </header>
);

HeaderComponent.propTypes = {
    title: PropTypes.string.isRequired,
};

HeaderComponent.defaultProps = {
    title: 'iTVDB',
};

export default HeaderComponent;

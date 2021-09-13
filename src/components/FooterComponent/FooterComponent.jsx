import React from 'react';
import PropTypes from 'prop-types';

import './FooterComponent.scss';
import { Tooltip } from '@material-ui/core';

export const FooterComponent = ({ ...props }) => (
    <footer>
        <div className="column">
            <Tooltip title="Sitemap">
                <img
                    className="icon"
                    src="./assets/icons/globe-solid.svg"
                    alt="sitemap"
                />
            </Tooltip>
            <nav className="small-font">
                <a className="background-animation" href="#">
                    Home
                </a>
                <a className="background-animation" href="#">
                    Projects
                </a>
                <a className="background-animation" href="#">
                    Contact
                </a>
            </nav>
        </div>
        <div className="column">
            <Tooltip title="Socials">
                <img
                    className="icon"
                    src="./assets/icons/user-friends-solid.svg"
                    alt="socials"
                />
            </Tooltip>
            <nav className="small-font">
                <a className="background-animation" href="#">
                    Facebook
                </a>
                <a className="background-animation" href="#">
                    Linkedin
                </a>
                <a className="background-animation" href="#">
                    Instagram
                </a>
            </nav>
        </div>
    </footer>
);

export default FooterComponent;

import React from "react";
import PropTypes from "prop-types";

import "./HeaderComponent.scss";

export const HeaderComponent = ({title, ...props}) => (
    <header>
        <h1>
            <a href="#">{ title }</a>
        </h1>
        <nav>
                    <a href="#">projects</a>
                    <a href="#">contact</a>
        </nav>
    </header>
)

HeaderComponent.propTypes = {
    title: PropTypes.string.isRequired,
}

HeaderComponent.defaultProps = {
    title: "Title"
}

export default HeaderComponent;
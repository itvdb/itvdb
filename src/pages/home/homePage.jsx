import React from "react";
import Header from "../../components/HeaderComponent";
import Project from "../../components/ProjectComponent";

import "./homePage.scss";

export const HomePage = ({ ...props }) => {
    return (
        <>
            <Header />
            <div className="page">
                <section className="intro">
                    <h1 className="screen-width">From vision to Reality</h1>
                </section>
                <section className="projects screen-width">
                    <Project background={"974337_854x480.jpg"} link={"#"} page={"#"} skills={["react"]} title={"Eerste Project"} />
                    <Project background={"974338_854x480.jpg"} link={"#"} page={"#"} skills={["react","node-js"]} title={"Tweede Project"} />
                    <Project background={"974338_854x480.jpg"} link={"#"} page={"#"} skills={["react","node-js","sass"]} title={"Derde Project"} />
                </section>
            </div>
        </>
    )
}

export default HomePage;
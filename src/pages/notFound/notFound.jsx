import React from "react";
import Header from '../../components/HeaderComponent';

import "./notFound.scss";

export const NotFoundPage = ({ ...props }) => {
    return (
        <>
            <Header />
            <div className="page">
                <section className="intro">
                    <h1>404</h1>
                    <p>Oei, je hebt naar iets gezocht wat ik nog niet heb...</p>
                    <p>Je kunt me altijd contacteren zodat wij het samen kunnen bouwen</p>
                </section>
            </div>
        </>
    )
}

export default NotFoundPage;
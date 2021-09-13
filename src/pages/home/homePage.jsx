import React from 'react';
import AboutComponent from '../../components/AboutComponent';
import Footer from '../../components/FooterComponent/FooterComponent';
import Header from '../../components/HeaderComponent';
import Project from '../../components/ProjectComponent';

import './homePage.scss';

export const HomePage = ({ ...props }) => {
    return (
        <>
            <Header />
            <div className="page">
                <section className="intro">
                    <h1 className="screen-width">From vision to Reality</h1>
                </section>
                <section className="projects screen-width">
                    <Project
                        background={'promatask/ROP06601_854x480.jpg'}
                        link={'https://www.promatask.com'}
                        page={'/projects/promatask'}
                        skills={['react']}
                        title={'Promatask'}
                    />
                    <Project
                        background={'974338_854x480.jpg'}
                        link={'https://www.itvdb.be'}
                        page={'/projects/itvdb'}
                        skills={['react', 'node-js']}
                        title={'Eigen website'}
                    />
                    <Project
                        background={'974338_854x480.jpg'}
                        link={'#'}
                        page={'#'}
                        skills={['react', 'node-js', 'sass']}
                        title={'Derde Project'}
                    />
                </section>
                <AboutComponent />
            </div>
            <Footer />
        </>
    );
};

export default HomePage;

import React from 'react';
import './About.css';
import hexagon from '../../images/hexagon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <section className="pt-5" id="about">
            <div className="container">
                <h1>&lt;About&gt;</h1>

                <div className="row">
                    <div className="col-md-3 text-center">
                        <div class="card about-card bg-transparent text-white mx-auto">
                            <img src={hexagon} height="100%" class="card-img" />
                            <div class="card-img-overlay d-flex justify-content-center align-items-center pe-4">
                                <h5 class="card-title about-ico">
                                    <img src="" alt="" /></h5>

                            </div>
                        </div>
                        <div className="description">
                            <h2>Dynamic</h2>
                            <p>Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div class="card about-card bg-transparent text-white mx-auto">
                            <img src={hexagon} height="100%" class="card-img" />
                            <div class="card-img-overlay d-flex justify-content-center align-items-center pe-4">
                                <h5 class="card-title about-ico">
                                    <FontAwesomeIcon icon={faRocket} /></h5>
                            </div>
                        </div>
                        <div className="description">
                            <h2>Dynamic</h2>
                            <p>Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div class="card about-card bg-transparent text-white mx-auto">
                            <img src={hexagon} height="100%" class="card-img" />
                            <div class="card-img-overlay d-flex justify-content-center align-items-center pe-4">
                                <h5 class="card-title about-ico">
                                    <FontAwesomeIcon icon={faRocket} /></h5>
                            </div>
                        </div>
                        <div className="description">
                            <h2>Dynamic</h2>
                            <p>Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div class="card about-card bg-transparent text-white mx-auto">
                            <img src={hexagon} height="100%" class="card-img" />
                            <div class="card-img-overlay d-flex justify-content-center align-items-center pe-4">
                                <h5 class="card-title about-ico">
                                    <FontAwesomeIcon icon={faRocket} /></h5>
                            </div>
                        </div>
                        <div className="description">
                            <h2>Dynamic</h2>
                            <p>Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                    </div>
                </div>

                <h1>&lt;/About&gt;</h1>
            </div>

        </section>
    );
};

export default About;
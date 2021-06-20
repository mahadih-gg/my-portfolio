import React, { useEffect } from 'react';
import './About.css';
import hexagon from '../../images/hexagon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faLaptop, faLightbulb, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import AboutMe from '../AboutMe/AboutMe';
import AOS from 'aos';
import 'aos/dist/aos.css';



const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <section className="pt-5 w-100 m-0" id="about">
            <div className="container pt-5 mt-5">
                <h1 className="mb-5">&lt;About&gt;</h1>


                <div className="row w-100 d-flex justify-content-center" data-aos="zoom-in-up">
                    <div className="col-md-3 text-center">
                        <div className="card about-card bg-transparent text-white mx-auto">
                            <img src={hexagon} height="100%" className="card-img" />
                            <div className="card-img-overlay d-flex justify-content-center align-items-center pe-4">
                                <h5 className="card-title about-ico">
                                    <FontAwesomeIcon icon={faRocket} />
                                </h5>
                            </div>
                        </div>
                        <div className="description">
                            <h2>Dynamic</h2>
                            <p>Websites don't have to be static, I love making pages come to life.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="card about-card bg-transparent text-white mx-auto">
                            <img src={hexagon} height="100%" className="card-img" />
                            <div className="card-img-overlay d-flex justify-content-center align-items-center pe-4">
                                <h5 className="card-title about-ico">
                                    <FontAwesomeIcon icon={faLaptop} />
                                </h5>
                            </div>
                        </div>
                        <div className="description">
                            <h2>Responsive</h2>
                            <p>My layouts will work on any device, big or small.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="card about-card bg-transparent text-white mx-auto">
                            <img src={hexagon} height="100%" className="card-img" />
                            <div className="card-img-overlay d-flex justify-content-center align-items-center pe-4">
                                <h5 className="card-title about-ico">
                                    <FontAwesomeIcon icon={faLightbulb} /></h5>
                            </div>
                        </div>
                        <div className="description">
                            <h2>Intuitive</h2>
                            <p>Strong preference for easy to use, intuitive UX/UI.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="card about-card bg-transparent text-white mx-auto">
                            <img src={hexagon} height="100%" className="card-img" />
                            <div className="card-img-overlay d-flex justify-content-center align-items-center pe-4">
                                <h5 className="card-title about-ico">
                                    <FontAwesomeIcon icon={faTachometerAlt} /></h5>
                            </div>
                        </div>
                        <div className="description">
                            <h2>Fast</h2>
                            <p>Fast load times and lag free interaction, my highest priority.</p>
                        </div>
                    </div>
                </div>

                <AboutMe></AboutMe>

                <h1>&lt;/About&gt;</h1>
            </div>


        </section>
    );
};

export default About;
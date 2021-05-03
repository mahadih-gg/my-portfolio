import React from 'react';
import './Projects.css';
import greenCity from '../../images/green-city.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Projects = () => {


    return (
        <section className="pt-5" id="projects">
            <div className="container pt-5">
                <h1 className="mb-5 color-primary">&lt;Projects&gt;</h1>

                <div className="row pb-5 pt-3 project mb-5">
                    <div className="col-md-6 px-5 project-img">
                        <h2 className="color-primary mb-4 font-secondary color-secondary">Project 1</h2>
                        <img src={greenCity} alt="" />
                        <div className="mt-4">
                            <a href="https://green-city-new.web.app/" target="_blank" className="p-2 me-4 btn-custom-secondary"> <FontAwesomeIcon icon={faGlobe} /> Live Site</a>

                            <a href="https://github.com/Mahadi92/green-city" target="_blank" className="p-2 btn-custom-secondary"> <FontAwesomeIcon icon={faGithub} /> Code</a>
                        </div>
                    </div>

                    <div className="col-md-6 pe-5 pt-5 project-description">
                        <h1 className="d-inline color-primary">GREEN CITY </h1>
                        <h3 className="d-inline color-primary"> ( A Online Nursery )</h3>
                        <p className="pt-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis alias vitae molestias asperiores illo culpa. Quidem, earum?
                        </p>
                        <div className="technologies w-100">
                            <span className="p-2 me-2 color-primary">React</span>
                            <span className="p-2 me-2 color-secondary">Javascript</span>
                            <span className="p-2 me-2 color-primary">Bootstrap 5</span>
                            <span className="p-2 me-2 color-secondary">HTML</span>
                            <span className="p-2 me-2 color-primary">CSS</span>
                            <br /> <br />
                            <span className="p-2 me-2 mt-4 color-secondary">React Route</span>
                            <span className="p-2 me-2 color-primary">React Hook Form</span>
                            <span className="p-2 me-2 mt-4 color-secondary">MongoDB</span>
                            <span className="p-2 me-2 color-primary">Express</span>
                            <br /> <br />
                            <span className="p-2 me-2 mt-4 color-secondary">Dotenv</span>
                            <span className="p-2 me-2 color-primary">Firebase</span>
                            <span className="p-2 me-2 mt-4 color-secondary">Axios</span>
                            <span className="p-2 me-2 color-primary">Toastify</span>
                        </div>

                        <button className="mt-4 btn-custom-secondary py-2 px-5" data-bs-toggle="modal" data-bs-target="#detailsModal"> <FontAwesomeIcon icon={faInfoCircle} /> View Details</button>

                    </div>
                </div>
                <div className="row pb-5 pt-3 project">
                    <div className="col-md-6 px-5 project-img">
                        <h2 className="color-primary mb-4 font-secondary color-secondary">Project 2</h2>
                        <img src={greenCity} alt="" />
                        <div className="mt-4">
                            <a href="https://green-city-new.web.app/" target="_blank" className="p-2 me-4 btn-custom-secondary"> <FontAwesomeIcon icon={faGlobe} /> Live Site</a>

                            <a href="https://github.com/Mahadi92/green-city" target="_blank" className="p-2 btn-custom-secondary"> <FontAwesomeIcon icon={faGithub} /> Code</a>
                        </div>
                    </div>

                    <div className="col-md-6 pe-5 pt-5 project-description">
                        <h1 className="d-inline color-primary">GREEN CITY </h1>
                        <h3 className="d-inline color-primary"> ( A Online Nursery )</h3>
                        <p className="pt-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis alias vitae molestias asperiores illo culpa. Quidem, earum?
                        </p>
                        <div className="technologies w-100">
                            <span className="p-2 me-2 color-primary">React</span>
                            <span className="p-2 me-2 color-secondary">Javascript</span>
                            <span className="p-2 me-2 color-primary">Bootstrap 5</span>
                            <span className="p-2 me-2 color-secondary">HTML</span>
                            <span className="p-2 me-2 color-primary">CSS</span>
                            <br /> <br />
                            <span className="p-2 me-2 mt-4 color-secondary">React Route</span>
                            <span className="p-2 me-2 color-primary">React Hook Form</span>
                            <span className="p-2 me-2 mt-4 color-secondary">MongoDB</span>
                            <span className="p-2 me-2 color-primary">Express</span>
                            <br /> <br />
                            <span className="p-2 me-2 mt-4 color-secondary">Dotenv</span>
                            <span className="p-2 me-2 color-primary">Firebase</span>
                            <span className="p-2 me-2 mt-4 color-secondary">Axios</span>
                            <span className="p-2 me-2 color-primary">Toastify</span>
                        </div>

                        <button className="mt-4 btn-custom-secondary py-2 px-5" data-bs-toggle="modal" data-bs-target="#detailsModal"> <FontAwesomeIcon icon={faInfoCircle} /> View Details</button>

                    </div>
                </div>


                {/* Modal */}
                <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content modal-custom">
                            <div class="modal-header">
                                <h3 class="modal-title" id="detailsModalLabel"><h3 className="d-inline color-primary">GREEN CITY </h3>
                                    <h5 className="d-inline color-primary"> ( A Online Nursery )</h5></h3>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>lorem100</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn-custom-secondary py-2 px-4" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

















                <h1 className="my-5 color-primary">&lt;/Projects&gt;</h1>
            </div>
        </section>
    );
};

export default Projects;
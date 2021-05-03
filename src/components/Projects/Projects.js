import React from 'react';
import './Projects.css';
import greenCity from '../../images/green-city.gif';

const Projects = () => {


    return (
        <section className="pt-5" id="projects">
            <div className="container pt-5">
                <h1 className="mb-5 color-primary">&lt;Projects&gt;</h1>

                <div className="row pb-5 pt-3 project">
                    <div className="col-md-6 px-5 project-img">
                        <h2 className="color-primary mb-4 font-secondary color-secondary">Project 1</h2>
                        <img src={greenCity} alt="" />
                        <span>Live</span>
                        <span></span>
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

                    </div>
                </div>


                <h1 className="my-5 color-primary">&lt;/Projects&gt;</h1>
            </div>
        </section>
    );
};

export default Projects;
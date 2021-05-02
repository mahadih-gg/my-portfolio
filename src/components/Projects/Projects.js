import React from 'react';
import './Projects.css';
import greenCity from '../../images/green-city.png';

const Projects = () => {
    return (
        <section className="pt-5" id="projects">
            <div className="container pt-5">
                <h1 className="mb-5 color-primary">&lt;Projects&gt;</h1>

                <h1 className="text-warning">Updateing...</h1>
                <h1>Animation coming soo.....</h1>
                <h2>Mind koren na. kaler modde sob ses hoye jabe😁</h2>

                <div className="row py-5">
                    <div className="col-md-4">
                        <div className="card bg-dark text-white">
                            <img src={greenCity} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
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
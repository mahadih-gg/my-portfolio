import React from 'react';
import greenCity from '../../images/green-city.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectDetails = ({ project }) => {

    // console.log(project.technologies);
    const technologies = project.technologies;

    return (
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
                    {
                        technologies.map(technologie => <span className="p-2 me-2">{technologie}</span>)
                    }
                </div>

                <button className="mt-4 btn-custom-secondary py-2 px-5" data-bs-toggle="modal" data-bs-target="#detailsModal"> <FontAwesomeIcon icon={faInfoCircle} /> View Details</button>

            </div>
        </div>

    );
};

export default ProjectDetails;
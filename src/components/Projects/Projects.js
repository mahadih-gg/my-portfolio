import React from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './Projects.css';



const projects = [
    {
        id: 1,
        projectName: 'GREEN CITY',
        projectType: 'A Online Nursery',
        liveLink: 'https://green-city-new.web.app',
        gitHub: 'https://github.com/Mahadi92/green-city',
        projectDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis alias vitae molestias asperiores illo culpa. Quidem, earum?',
        technologies: ['React', 'Javascript', 'Bootstrap 5', 'HTML', 'CSS', 'React Route', 'MongoDB', 'Express', 'Dotenv', 'Firebase', 'Axios', 'Toastify'],
        details: [
            'mahadi hasanb pom pom pom pom',
            'mahabubu bum bum bum bum',
            'ro or oro oof oro oro oro or oro oro oo'
        ]
    },
    {
        id: 2,
        projectName: 'GREEN CITY',
        projectType: 'A Online Nursery',
        liveLink: 'https://green-city-new.web.app',
        gitHub: 'https://github.com/Mahadi92/green-city',
        projectDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis alias vitae molestias asperiores illo culpa. Quidem, earum?',
        technologies: ['React', 'Javascript', 'Bootstrap 5', 'HTML', 'CSS', 'React Route', 'MongoDB', 'Express', 'Dotenv', 'Firebase', 'Axios', 'Toastify'],
        details: [
            'mahadi hasanb pom pom pom pom',
            'mahabubu bum bum bum bum',
            'ro or oro oof oro oro oro or oro oro oo'
        ]
    },
    {
        id: 3,
        projectName: 'GREEN CITY',
        projectType: 'A Online Nursery',
        liveLink: 'https://green-city-new.web.app',
        gitHub: 'https://github.com/Mahadi92/green-city',
        projectDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis alias vitae molestias asperiores illo culpa. Quidem, earum?',
        technologies: ['React', 'Javascript', 'Bootstrap 5', 'HTML', 'CSS', 'React Route', 'MongoDB', 'Express', 'Dotenv', 'Firebase', 'Axios', 'Toastify'],
        details: [
            'mahadi hasanb pom pom pom pom',
            'mahabubu bum bum bum bum',
            'ro or oro oof oro oro oro or oro oro oo'
        ]
    }
]

const Projects = () => {

    return (
        <section className="pt-5" id="projects">
            <div className="container pt-5">
                <h1 className="mb-5 color-primary">&lt;Projects&gt;</h1>

                {
                    projects.map(project => <ProjectDetails project={project}></ProjectDetails>)
                }

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
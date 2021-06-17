import React from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './Projects.css';
import updateing from '../../images/updateing.gif';

const projects = [
    {
        id: 1,
        modalId: 'greenCity',
        projectName: 'GREEN CITY',
        projectType: 'A Online Nursery',
        liveLink: 'https://green-city-new.web.app',
        gitHub: 'https://github.com/Mahadi92/green-city',
        projectDescription: "This site is an online plant selling website. Users can buy a plant and get services via this website. Here is an admin panel. This part is interesting. Users can see all orders and all review what they made. And admin can see all things. Here I add the Stripe payment method.",
        technologies: ['React', 'Javascript', 'Bootstrap 5', 'HTML', 'CSS', 'React Route', 'MongoDB', 'Express', 'Dotenv', 'Firebase', 'Axios', 'Toastify'],
        details: [
            'mahadi hasanb pom pom pom pom',
            'mahabubu bum bum bum bum',
            'ro or oro oof oro oro oro or oro oro oo'
        ]
    },
    {
        id: 2,
        modalId: 'bookTool',
        projectName: 'BOOK TOOL',
        projectType: 'A Online Book Shop',
        liveLink: 'https://book-tool.web.app',
        gitHub: 'https://github.com/Mahadi92/book-tool',
        projectDescription: 'Book Tool Lorem ipsum dolor sit adipisicing elit. Perferendis alias vitae molestias asperiores illo culpa. Quidem, earum?',
        technologies: ['React', 'Javascript', 'Bootstrap 5', 'HTML', 'CSS', 'React Route', 'MongoDB', 'Express', 'Dotenv', 'Firebase', 'Axios', 'Toastify'],
        details: [
            'mahadi hasanb pom pom pom pom',
            'mahabubu bum bum bum bum',
            'ro or oro oof oro oro oro or oro oro oo'
        ]
    },
    {
        id: 3,
        modalId: 'codeRubric',
        projectName: 'CODE RUBRIC',
        projectType: 'Package Installer Application',
        liveLink: 'https://code-rubric.web.app',
        gitHub: 'https://github.com/Mahadi92/code-rubric',
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
                <div className="text-center">
                    <img src={updateing} height="50px" className="rounded-pill" alt="" />
                    <h5 style={{ color: '#FFCA03' }} className="my-3">Sill Updateing . . .</h5>
                </div>


                {
                    projects.map(project => <ProjectDetails project={project} key={project.id}></ProjectDetails>)
                }



                <h1 className="my-5 color-primary">&lt;/Projects&gt;</h1>
            </div>
        </section>
    );
};

export default Projects;
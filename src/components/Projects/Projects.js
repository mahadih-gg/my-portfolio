import React from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './Projects.css';



const projects = [
    {
        id: 1,
        modalId: 'greenCity',
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

                {
                    projects.map(project => <ProjectDetails project={project} key={project.id}></ProjectDetails>)
                }

                <h1 className="my-5 color-primary">&lt;/Projects&gt;</h1>
            </div>
        </section>
    );
};

export default Projects;
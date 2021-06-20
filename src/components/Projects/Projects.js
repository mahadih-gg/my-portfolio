import React from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './Projects.css';

const projects = [
    {
        id: 1,
        modalId: 'greenCity',
        projectName: 'GREEN CITY',
        projectType: 'A Online Nursery',
        projectStack: 'MERN Stack',
        projectBgClass: 'greenCity',
        liveLink: 'https://green-city-new.web.app',
        gitHubClient: 'https://github.com/Mahadi92/green-city',
        gitHubServer: 'https://github.com/Mahadi92/green-city-server',
        projectDescription: "Green City is an online plant selling website. Users can buy a plant and get services via this website. Here I add the Stripe payment method. Here is an admin panel. This part is interesting. Users can see all orders and all review what they made. And admin can see all things.",
        technologies: ['React', 'Javascript', 'Bootstrap 5', 'HTML', 'CSS', 'React Route', 'MongoDB', 'Express', 'Dotenv', 'Firebase', 'Axios', 'Toastify'],
        details: [
            'Buy & Get Different category of plants enable Services in one place.',
            'Well manage customized Admin panel dashboard and both user dashboard.',
            'Control and enroll admin accessibility & anytime role profile modification.',
            'Customer can to make their payment using Stripe Gateway Payment Method.'
        ]
    },
    {
        id: 2,
        modalId: 'bookTool',
        projectName: 'BOOK TOOL',
        projectType: 'A Online Book Shop',
        projectStack: 'MERN Stack',
        projectBgClass: 'bookTool',
        liveLink: 'https://book-tool.web.app',
        gitHubClient: 'https://github.com/Mahadi92/book-tool',
        gitHubServer: 'https://github.com/Mahadi92/book-tool',
        projectDescription: 'Book Tool is an online book shop you can buy any book and see your order in order list. Here is an admin panel Admin can add, delete, updates products(books) Here you can login by firebase authentication or Sign Up with new account. Here also use JWT token for security',
        technologies: ['React', 'Javascript', 'Bootstrap 5', 'HTML', 'CSS', 'React Route', 'MongoDB', 'Express', 'Dotenv', 'Firebase', 'Axios', 'Toastify'],
        details: [
            'Largest collection of books from manageable backend API.',
            'Secure and easy user login authentication with one click google firebase.',
            'Both admin & user panel for easy access and controlling buying process.',
            'Manage product (books) and both as orders by adding & removing.'
        ]
    },
    {
        id: 3,
        modalId: 'codeRubric',
        projectName: 'CODE RUBRIC',
        projectType: 'Package Installer Application',
        projectStack: 'Single Page',
        projectBgClass: 'codeRubric',
        liveLink: 'https://code-rubric.web.app',
        gitHubClient: 'https://github.com/Mahadi92/code-rubric',
        gitHubServer: '',
        projectDescription: 'Each of our packages is very tedious and time consuming to install separately. So I have come up with an easy way for you through the code Rubric. Code Rubric is an package installation site. You can easily copy package installation code. And here I also use firebase user authentication',
        technologies: ['React', 'Javascript', 'Bootstrap 5', 'HTML', 'CSS', 'React Route', 'MongoDB', 'Express', 'Dotenv', 'Firebase', 'Axios', 'Toastify'],
        details: [
            'First of all you just select your package what you want to install.',
            'Then click the copy button for copy the clipboard.',
            'And finally paste the copied code on your Terminal and click enter.',
            'Then everything will be installed on your project'
        ]
    }
]

const Projects = () => {

    return (
        <section className="pt-5" id="projects">
            <div className="container pt-5">
                <h1 className="mb-5 color-primary">&lt;Projects&gt;</h1>
                {
                    projects.map(project => <ProjectDetails project={project} key={project.id} key={project.id}></ProjectDetails>)
                }

                <h1 className="my-5 color-primary">&lt;/Projects&gt;</h1>
            </div>
        </section>
    );
};

export default Projects;
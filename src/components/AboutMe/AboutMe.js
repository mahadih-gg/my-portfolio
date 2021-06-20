import React, { useEffect } from 'react';
import './AboutMe.css';
import myProfile from '../../images/myProfile.png'
import ProgressBar from '../ProgressBar/ProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import MahadiResume from '../../resume/MahadiResume.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-particles-js';



const AboutMe = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className="row my-5 overflow-hidden">

            <div className="col-md-6 text-center" data-aos="fade-right">

                <img src={myProfile} alt="" />
                <h2>Want to know who I am?😃</h2>
                <p>
                    Hi, This is Mahadi Hasan from Bangladesh. I'm a Front-End developer. I have serious passion for UI design, API management and dynamic user experiences. <br />
                    <a className="color-primary contact-link" href="#contact">Let's make something special.</a>
                </p>

                <a href={MahadiResume} download>
                    <button className="btn-custom mt-4 py-2">
                        <FontAwesomeIcon icon={faDownload} /> Download My Resume</button>
                </a>
            </div>

            <div className="col-md-6" data-aos="fade-left">
                <ProgressBar done="87" technologyName="React" ></ProgressBar>
                <ProgressBar done="85" technologyName="Javascript" ></ProgressBar>
                <ProgressBar done="95" technologyName="HTML" ></ProgressBar>
                <ProgressBar done="90" technologyName="CSS" ></ProgressBar>
                <ProgressBar done="80" technologyName="SCSS" ></ProgressBar>
                <ProgressBar done="95" technologyName="Bootstrap" ></ProgressBar>
                <ProgressBar done="50" technologyName="Node JS" ></ProgressBar>
                <ProgressBar done="60" technologyName="Express" ></ProgressBar>
                <ProgressBar done="75" technologyName="React Redux" ></ProgressBar>
                <ProgressBar done="70" technologyName="Firebase" ></ProgressBar>
                <ProgressBar done="85" technologyName="Web API" ></ProgressBar>
                <ProgressBar done="90" technologyName="Adobe XD" ></ProgressBar>
            </div>

        </div>
    );
};

export default AboutMe;
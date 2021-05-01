import React from 'react';
import './AboutMe.css';
import myProfile from '../../images/myProfile.png'

const AboutMe = () => {
    return (
        <div className="row my-5">
            <div className="col-md-6 text-center">
                <img src={myProfile} alt="" />
                <h2>Want to know who I am?😃</h2>
                <p>
                    I'm a Front-End developer. I have serious passion for UI design, API management and dynamic user experiences. <br />
                    <a className="color-primary contact-link" href="#contact">Let's make something special.</a>
                </p>

                <button className="btn-custom mt-4">Download my Resume</button>
            </div>

            <div className="col-md-6">

            </div>

        </div>
    );
};

export default AboutMe;
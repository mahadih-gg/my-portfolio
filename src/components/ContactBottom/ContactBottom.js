import React, { useState } from 'react';
import './ContactBottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


const ContactBottom = () => {
    const [isNumber, setIsNumber] = useState(false);
    return (
        <footer className="py-5">
            {isNumber &&
                <h4 className="text-center color-primary pb-3">+8801856878150</h4>
            }
            <div className="contact-icons d-flex flex-wrap justify-content-center align-items-center">

                <a href="https://github.com/Mahadi92" className="icon me-4 me-md-5 mb-4 mb-md-0 mb-xl-0 fs-3" target="_blank"><FontAwesomeIcon className="" icon={faGithub} /></a>

                <a href="https://www.linkedin.com/in/mahadi-hasan-937524-mh/" className="icon me-4 me-md-5 mb-4 mb-md-0 mb-xl-0 fs-3"><FontAwesomeIcon className="" icon={faLinkedinIn} /></a>

                <a href="https://www.facebook.com/profile.php?id=100022929606176" className="icon me-4 me-md-5 mb-4 mb-md-0 mb-xl-0 fs-3"><FontAwesomeIcon className="" icon={faFacebookF} /></a>

                <a href="#" className="icon me-4 me-md-5 mb-4 mb-md-0 mb-xl-0 fs-3"><FontAwesomeIcon className="" icon={faInstagram} /></a>

                <a href="mailto:mahadi.hasan.937524.mh@gmail.com" className="icon me-4 me-md-5 fs-3"><FontAwesomeIcon className="" icon={faEnvelope} /></a>
                <button onClick={() => {
                    setIsNumber(!isNumber)
                }} className="icon me-4 me-md-5 fs-3"><FontAwesomeIcon icon={faPhoneAlt} /></button>
            </div>
        </footer>

    );
};

export default ContactBottom;
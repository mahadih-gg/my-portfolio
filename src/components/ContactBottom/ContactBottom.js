import React from 'react';
import './ContactBottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const ContactBottom = () => {
    return (
        <footer className="py-5">
            <div className="contact-icons">
                <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                <span><FontAwesomeIcon icon={faFacebookF} /></span>
                <span><FontAwesomeIcon icon={faEnvelope} /></span>
            </div>
        </footer>

    );
};

export default ContactBottom;
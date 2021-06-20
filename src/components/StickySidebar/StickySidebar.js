import React, { useState } from 'react';
import './StickySidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const StickySidebar = () => {

    const [isNumber, setIsNumber] = useState(false);

    return (

        <div className="d-none d-md-block d-xl-block h-100 abc">

            <div className="sticky-sidebar ms-3">
                <div className="pulseAnim"></div>
                <div className="sticky-icon">
                    <a href="https://github.com/Mahadi92" target="_blank"><FontAwesomeIcon className="" icon={faGithub} /></a>
                </div>

                <div className="sticky-icon">
                    <a href="https://www.linkedin.com/in/mahadi-hasan-937524-mh/" target="_blank"><FontAwesomeIcon className="" icon={faLinkedinIn} /></a>
                </div>

                <div className="sticky-icon">
                    <a href="https://www.facebook.com/profile.php?id=100022929606176" target="_blank"><FontAwesomeIcon className="" icon={faFacebookF} /></a>
                </div>
                <div className="sticky-icon">
                    <a href="#" target="_blank"><FontAwesomeIcon className="" icon={faInstagram} /></a>
                </div>

                <div className="sticky-icon">
                    <a href="mailto:mahadi.hasan.937524.mh@gmail.com"><FontAwesomeIcon className="" icon={faEnvelope} /></a>
                </div>

                {/* <div className="sticky-icon">
                    <button onClick={() => {
                        setIsNumber(!isNumber)
                    }}><FontAwesomeIcon icon={faPhoneAlt} /></button>
                </div> */}
            </div>

        </div>
    );
};

export default StickySidebar;
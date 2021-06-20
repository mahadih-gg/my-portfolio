import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
    return (
        <section className="pt-5" id="contact">
            <div className="pt-5 container">
                <h1 className="mb-5 color-primary">&lt;Contact&gt;</h1>

                <div className="row m-auto">
                    <div className="col-md-3 mb-4 mb-md-0 text-center mb-sm-4">
                        <div className="contact-box p-4">
                            <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon color-primary" />
                            <h2>Phone</h2>
                            <span className="fs-5">+8801856878150</span>
                        </div>
                    </div>
                    <div className="col-md-5 mb-4 mb-md-0 text-center mb-sm-4">
                        <div className="contact-box p-4">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon color-primary" />
                            <h2>Email</h2>
                            <span className="fs-6 w-100 my-gmail">mahadi.hasan.937524.mh@gmail.com</span>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0 text-center mb-sm-4">
                        <div className="contact-box p-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon color-primary" />
                            <h2>Location</h2>
                            <span className="fs-5">Cumilla, Bangladesh</span>
                        </div>
                    </div>
                </div>

                <ContactForm></ContactForm>

                <h1 className="my-5 color-primary">&lt;/Contact&gt;</h1>
            </div>
        </section>
    );
};

export default Contact;
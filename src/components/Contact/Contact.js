import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section className="pt-5" id="contact">
            <div className="pt-5 container">
                <h1 className="mb-5 color-primary">&lt;Contact&gt;</h1>

                <div className="row m-auto">
                    <div className="col-md-3 text-center mb-sm-4">
                        <div className="contact-box p-4">
                            <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon color-primary" />
                            <h2>Phone</h2>
                            <span className="fs-5">+8801856878150</span>
                        </div>
                    </div>
                    <div className="col-md-5 text-center mb-sm-4">
                        <div className="contact-box p-4">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon color-primary" />
                            <h2>Email</h2>
                            <span className="fs-6 w-100">mahadi.hasan.937524.mh@gmail.com</span>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-sm-4">
                        <div className="contact-box p-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon color-primary" />
                            <h2>Location</h2>
                            <span className="fs-5">Cumilla, Bangladesh</span>
                        </div>
                    </div>
                </div>

                <form action="" className="my-5 d-flex justify-content-center align-items-center">
                    <div className="w-100 p-5 contact-form">
                        <p className="text-center color-primary mb-5">Have a question or want to work together?</p>
                        <input type="text" className="form-control mb-1" placeholder="Name" required />
                        <input type="email" className="form-control mb-1" placeholder="Enter Email" required />
                        <textarea cols="30" rows="5" className="form-control" placeholder="Your massage" required></textarea>
                        <div className="w-100 d-flex justify-content-end mt-2">
                            <button className="btn-custom" type="submit">
                                <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> Send Message</button>
                        </div>
                    </div>
                </form>

                <h1 className="my-5 color-primary">&lt;/Contact&gt;</h1>
            </div>
        </section>
    );
};

export default Contact;
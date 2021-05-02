import React from 'react';
import './Contact.css';
import ParticlesBg from 'particles-bg';

const Contact = () => {
    return (
        <section className="pt-5" id="contact">
            <div className="container pt-5">
                <h1 className="mb-5 color-primary">&lt;Contact&gt;</h1>

                <form action="" className="my-5 d-flex justify-content-center align-items-center">
                    <div className="w-50 p-5 contact-form">
                        <p className="text-center color-primary mb-5">Have a question or want to work together?</p>
                        <input type="text" className="form-control mb-1" placeholder="Name" required />
                        <input type="email" className="form-control mb-1" placeholder="Enter Email" required />
                        <textarea cols="30" rows="5" className="form-control" placeholder="Your massage" required></textarea>
                        <div className="w-100 d-flex justify-content-end mt-2">
                            <button className="btn-custom" type="submit">Submit</button>
                        </div>
                    </div>
                </form>

                <h1 className="my-5 color-primary">&lt;/Contact&gt;</h1>
            </div>
        </section>
    );
};

export default Contact;
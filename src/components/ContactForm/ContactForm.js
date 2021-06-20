import React from 'react';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('email_message', 'my_portfolio_template', e.target, 'user_Y6us0nmpF3EoaeslzANRO')
            .then((result) => {
                console.log(result);
                if (result.text === 'OK') {
                    notify();
                }
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    const notify = () => toast.success('😃 Your email was successfully Send.', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <form action="" onSubmit={sendEmail} className="my-5 d-flex justify-content-center align-items-center">
            <ToastContainer />
            <div className="w-100 p-5 contact-form">
                <p className="text-center color-primary mb-5">Have a question or want to work together?</p>
                <input type="text" className="form-control mb-1" name="name" placeholder="Name" required />
                <input type="email" className="form-control mb-1" name="email" placeholder="Enter Email" required />
                <textarea cols="30" rows="5" name="message" className="form-control" placeholder="Your massage" required></textarea>
                <div className="w-100 d-flex justify-content-center justify-content-md-end mt-2">
                    <button className="btn-custom" type="submit">
                        <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> Send Message</button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
import React from 'react';
import './Navbar.css';
import logo from '../../images/A1.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-custom">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="#home"><img src={logo} alt="" height="50px" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto pe-5">
                        <li className="nav-item">
                            <a className="nav-link active me-5" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-4" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-4" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-4" href="#blogs">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-4" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
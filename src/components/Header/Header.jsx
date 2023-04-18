import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { NavLink, Outlet } from 'react-router-dom';


const Header = () => {


    // className={({ isActive }) => isActive ? "  nav-link active fw-bolder"  : "nav-link"}
    return (
        <>
            <div className='my-3 text-center'>
                <img className='img-fluid' src={logo} alt="" />
                <p className='my-2 fw-semibold text-secondary'>Journalism Without Fear or Favour</p>
                <h5>{moment().format("dddd, MMMM D, YYYY")}</h5>
            </div>
            <div className='container'>
                <div className='d-flex align-items-center bg-secondary bg-opacity-25 p-3 gap-3'>
                    <button className="btn btn-danger">latest</button>
                    <Marquee speed={50} gradient={false} pauseOnHover={true} className='fw-bolder '>
                        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    </Marquee>
                </div>
                <nav className="navbar navbar-expand-lg mb-3 bg-white">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 text-secondary mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "  nav-link active fw-bolder text-primary" : "nav-link"} aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "  nav-link active fw-bolder text-primary" : "nav-link"} aria-current="page" to="/about">about</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => isActive ? "  nav-link active fw-bolder text-primary" : "nav-link"} aria-current="page" to="/career">career</NavLink>
                                </li>
                            </ul>

                        </div>
                        <div>
                            <button className="btn btn-secondary">Log in</button>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet></Outlet>
        </>
    );
};

export default Header;
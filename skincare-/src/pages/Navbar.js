import React from 'react'
import './Navbar.css'
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
    return (
        <div>
            <div className='nav1'>
                <p>
                    <MdOutlineMailOutline /> yourmailid@yourdomain.com |
                    <MdOutlinePhone /> 9876543211
                </p>
            </div>

            <div className='nav2'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">

                        {/* LOGO */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>

                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/shop">Shop</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/sunscreen">Sunscreen</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/toner">Toner</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/serum">Serum</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/faceoil">Face Oil</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/moisturizer">Moisturizer</Link>
                                </li>

                            </ul>

                            <form className="d">
                                <input 
                                    className="form-control me-2" 
                                    type="search" 
                                    placeholder="Search" 
                                />
                            </form>

                            <Link to="/cart">
                                <p className='ppp'><BsCart2 /></p>
                            </Link>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar

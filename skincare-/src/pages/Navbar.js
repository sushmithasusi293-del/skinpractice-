import React from 'react'
import './Navbar.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
    return (
        <div>
            <div className='nav1'>
                <p> <MdOutlineMailOutline />yourmailid@yourdomain.com |<MdOutlinePhone /> 9876543211</p>
            </div>


            <div className='nav2'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img src={logo} /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                               <Link to='/'><li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li></Link> 

                                <Link to='/shop'><li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shop
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>

                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li></Link>

                               <Link to='/sunscreen'> <li class="nav-item">
                                    <a class="nav-link" href="#">Sunscreen</a>
                                </li></Link>
                                <Link to='/toner'> <li class="nav-item">
                                    <a class="nav-link" href="#">Toner</a>
                                </li></Link>
                               <Link to ='/serum'><li class="nav-item">
                                    <a class="nav-link" href="#">Serum</a>
                                </li></Link>
                               <Link to='/faceoil'><li class="nav-item">
                                    <a class="nav-link" href="#">Face Oil</a>
                                </li></Link> 
                                <Link to='/moisturizer'><li class="nav-item">
                                    <a class="nav-link" href="#">Moisturizer</a>
                                </li></Link>

                            </ul>
                           
                            <form class="d">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                               
                            </form>
                            
                            <Link to='/cart'><p className='ppp'><BsCart2 /></p></Link>
                        </div>
                    </div>
                </nav>
            </div>






            
        </div>
    )
}

export default Navbar
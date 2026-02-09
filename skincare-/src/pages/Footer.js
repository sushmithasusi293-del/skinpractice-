import React from 'react'
import './Footer.css'
import logo1 from '../images/logo1.jpg'
const Footer = () => {
    return (
        <div>

            <div className='rw1'>
                <div className='uu1'>
                    <ul>
                        <li><h6>About</h6></li>
                        <li>Career</li>
                        <li>Stocklists</li>
                        <li>Shop Locator</li>
                        <li>Contect</li>
                    </ul>
                </div>
                <div className='u2'>
                    <ul>
                        <li><h6>Help</h6></li>
                        <li>Track Orders</li>
                        <li>Shipping & returns</li>
                        <li>FAQ</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='u3'>
                    <form>
                        <input type='text' placeholder='email'></input>
                        <button className='z1'>subcribe</button>
                    </form>
                </div>
                <div className='u4'>
                    <ul>
                        <li><h6>About</h6></li>
                        <li>Career</li>
                        <li>Stocklists</li>
                        <li>Shop Locator</li>
                        <li>Contect</li>
                    </ul>
                </div>
                <div className='u5'>
                    <ul>
                        <li><h6>Help</h6></li>
                        <li>Track Orders</li>
                        <li>Shipping & returns</li>
                        <li>FAQ</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>


                
            </div>

<div className='o1'>
   <img src={logo1} width={1100}/>
</div>
           
        </div>
    )
}

export default Footer
import Serum from "./Serum";
import { FaStarHalfAlt } from "react-icons/fa";
import React from 'react'
import './Sunscreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/Cartslice'
const Serumproduct = () => {


    const cartProducts = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch();
    const addCart = (item) => {
        dispatch(addToCart(item))
        fetch('http://localhost:6578/post', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        })
    }
    const deleteCart = (item) => {
        dispatch(removeFromCart(item.id))
    }


    return (
        <div >
            <h1>SERUM</h1>
            <div className="col">

                {Serum.map((item) => (

                    <div key={item.id}>
                        <div className="box">
                            <img src={item.img} width={100} height={200} />

                        </div><div className="pa">
                            <p>{item.name}<span className="e3"><FaStarHalfAlt /><FaStarHalfAlt /><FaStarHalfAlt /><FaStarHalfAlt /><FaStarHalfAlt /></span></p>
                            <h6>{item.title}</h6>
                            <p>₹{item.price}</p>
                        </div>


                        {cartProducts.find(Items => Items.id === item.id) ? (
                            <button onClick={() => { deleteCart(item) }}>Remove from Cart</button>)
                            :
                            (<button onClick={() => { addCart(item) }}>Add to Cart</button>)}
                    </div>


                ))
                }
            </div>
        </div>
    )
}

export default Serumproduct;
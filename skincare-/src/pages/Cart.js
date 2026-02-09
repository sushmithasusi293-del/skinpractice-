import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    updateQuantity,
    removeFromCart,
    calculateTotal,
} from '../redux/Cartslice'


const CartPage = () => {
    const { cartItems, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems, dispatch]);


    return (
        <div style={{ padding: "20px" }}>
            <h2>🛒 Your Cart</h2>


            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            marginBottom: "20px",
                            marginTop:"50px",
                            marginLeft:"20px"
                        }}
                    >
                        <thead>
                            <tr >
                                <th style={{ borderBottom: "1px solid #ccc", paddingLeft:"100px" }}>Image</th>
                                <th style={{ borderBottom: "1px solid #ccc" , paddingLeft:"100px" }}>Product</th>
                                <th style={{ borderBottom: "1px solid #ccc", paddingLeft:"100px"  }}>Price</th>
                                <th style={{ borderBottom: "1px solid #ccc", paddingLeft:"100px"  }}>Quantity</th>
                                <th style={{ borderBottom: "1px solid #ccc", paddingright:"40px"  }}>Total</th>
                                <th style={{ borderBottom: "1px solid #ccc", paddingLeft:"100px"  }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                console.log(item),

                                <tr key={item.id}>
                                    <td>
                                        <img
                                            src={item.img}
                                            // alt={item.title}
                                            style={{ width: "50px", height: "100px", objectFit: "cover",marginLeft:"100px", borderRadius: "0px" }}
                                        />
                                    </td>
                                    
                                    <td style={{paddingLeft:"25px"}}>{item.title}</td>
                                    <td style={{paddingLeft:"95px"}}>₹{item.price}</td>
                                    <td>
                                        <button style={{width:"20px"}}
                                            onClick={() =>
                                                dispatch(updateQuantity({ id: item.id, change: -1 }))
                                            }
                                        >
                                            -
                                        </button>
                                        <span style={{padding:"15px"}}>{item.quantity}</span>
                                        <button style={{width:"20px",marginLeft:"-0px"}}
                                            onClick={() =>
                                                dispatch(updateQuantity({ id: item.id, change: 1 }))
                                            }
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>₹{item.price * item.quantity}</td>
                                    <td>
                                        <button onClick={() => dispatch(removeFromCart(item.id))}>
                                            ❌ Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                    <h3> Total Amount: ₹{totalAmount} </h3>
                </>
            )}
        </div>
    );
};


export default CartPage;











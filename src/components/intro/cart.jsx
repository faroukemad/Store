// src/components/cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cartContext';

const Cart = () => {
    const { cart } = useCart();

    const total = cart.reduce((acc, product) => acc + product.price, 0);

    return (
        <div className="cart">
            <div className="cart-cart-back">
                <h2>Cart</h2>
                <Link className='product-underline' to="/">Back to Home</Link>
            </div>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className='cart-products'>
                    {cart.map((product, index) => (
                        <div key={index} className='cart-product'>
                            <img className="cart-sofa-img" src={product.image} alt={product.title} />
                            {product.title} 
                            <div className=""> ${product.price}</div>
                        </div>
                    ))}
                </div>
            )}
            <div className="cart-total-price">
            <div className="cart-total">Total:</div>
            <p className='cart-total'> ${total.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;

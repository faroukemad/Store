// // src/Cart.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../cartContext';

// const Cart = () => {
//     const { cart } = useCart();

//     const total = cart.reduce((acc, product) => acc + product.price, 0);

//     return (
//         <div className="cart">
//             <h2>Cart</h2>
//             <Link to="/">Back to Home</Link>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty</p>
//             ) : (
//                 <ul>
//                     {cart.map((product, index) => (
//                         <li key={index}>
//                             {product.title} - ${product.price}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//             <p>Total: ${total.toFixed(2)}</p>
//         </div>
//     );
// };

// export default Cart;

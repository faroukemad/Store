import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  const addToCart = (product) => {
    const exists = cart.some(item => item.id === product.id);
    if (exists) {
      setNotification("Product already exists in the cart.");
    } else {
      setCart((prevCart) => [...prevCart, product]);
      setNotification("Product added to cart.");
    }

    setTimeout(() => {
      setNotification("");
    }, 3000); 
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, notification }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

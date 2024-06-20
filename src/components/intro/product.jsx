import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, addToCart }) => {
    return (
        <div key={product.id} className="intro-sofa">
            <Link to={`/product/${product.id}`} className='product-underline'>
                <img className="intro-sofa-img" src={product.image} alt={product.title} />
                <div className="intro-sofa-title">{product.title}</div>
                <div className="intro-sofa-price">${product.price}</div>
            </Link>
            <button onClick={addToCart} >Add to Cart</button>

        </div >

    );
};

export default Product;
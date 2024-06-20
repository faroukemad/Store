// src/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-details">
            <div className="product-details-wrapper">
                <div className="">

                    <img src={product.image} alt={product.title} className='product-details-img' />
                </div>
                <div className="">
                    <p className='product-details-category'> {product.category}</p>
                    <h2 className='product-details-title'>{product.title}</h2>
                    <p className='product-details-des'>{product.description}</p>
                    <p className='product-details-price'>${product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

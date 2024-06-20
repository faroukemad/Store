import React, { useEffect, useState } from "react";
import './intro.scss'
import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import Product from "./product";
import { useCart } from "../cartContext";

export default function Intro() {

  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('default');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { cart, addToCart, notification } = useCart();


  const sortOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Price (Low to High)', value: 'price-asc' },
    { label: 'Price (High to Low)', value: 'price-desc' },
    { label: 'Alphabetical', value: 'alphabetical' },
  ];



  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    const fetchCategories = async () => {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(response.data);
    };

    fetchProducts();
    fetchCategories();
  }, []);


  const handleSortChange = (e) => {
    setSortOption(e.value);
    let sortedProducts = [...products];

    if (e.value === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (e.value === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (e.value === 'alphabetical') {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    setProducts(sortedProducts);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);
  return (

    <div className={"intro"} id="intro">

      <div className="intro-wrapper"  >
        <div className="intro-p-sort">
          <div className="intro-p">Products</div>
          <div className="intro-sort">
            <div className="card flex justify-content-center">
              <Dropdown
                id="category"
                value={selectedCategory}
                options={[{ label: 'All', value: 'all' }, ...categories]}
                onChange={handleCategoryChange}
                placeholder="Select a Category"
                className="w-full md:w-14rem"
              />
            </div>

            <div className="card flex justify-content-center">
              <Dropdown
                id="sort"
                value={sortOption}
                options={sortOptions}
                onChange={handleSortChange}
                placeholder="Select Sort Option"
                className="w-full md:w-14rem"
              />
            </div>
          </div>
        </div>
        <div className="intro-sofas">

          {filteredProducts.map(product => (
            <Product key={product.id} product={product} addToCart={() => addToCart(product)} />
          ))}
        </div>
        {notification && <div className="notification">{notification}</div>}
      </div>
    </div>
  )
}

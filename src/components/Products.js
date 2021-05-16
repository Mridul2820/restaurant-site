import React from 'react'
import ProductBox from './ProductBox'
import pimage1 from '../assets/s1.png';
import pimage2 from '../assets/s2.png';

const Products = () => {
    return (
        <div id="products">
            <h1>Choose & Enjoy</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="products-container">
                <ProductBox image={pimage1} title="Longer Burger"/>
                <ProductBox image={pimage2} title="Double Burger"/>
                <ProductBox image={pimage1} title="Longer Burger"/>
            </div>
        </div>
    )
}

export default Products

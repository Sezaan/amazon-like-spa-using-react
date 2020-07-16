import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const first = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first);
    return (
        <div className="shop-container">
            
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd} />)
                }
            </div>
            
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
        </div>
    );
};

export default Shop;
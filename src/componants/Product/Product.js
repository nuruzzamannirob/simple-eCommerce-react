import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   console.log(props);
    return (
        <div className='container'>
            <div className="product-img">
                <img src={props.product.img} alt="" />

            </div>
            <div className="product-details">
            <h3>{props.product.name}</h3>
            <p> by:{props.product.seller}</p>
            <br></br>
            <p> Price: {props.product.price}</p>
            <p><small>only {props.product.stock} left in stock - order soon</small></p>
            <button onClick={()=> props.handleProduct(props.product)}> 
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart </button>
            </div>
        </div>
    );
};

export default Product;
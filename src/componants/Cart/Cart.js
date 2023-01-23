import React from 'react';

const Cart = (props) => {
      const cart = props.cart;
      const total = cart.reduce((total, prd) => total + prd.price ,0)
    //   let total = 0;
    //   for(let i = 0; i< cart.length; i++){
    //     const product =cart[i];
    //     total = total + product.price;
    //   }
    let shipping = 0;
    if(total>35){
        shipping = 0;
    }
    else if(total >15){
        shipping = 4.99;
    }
    else if(total> 0){
        shipping = 15.99 ;
    }
    const tax = (total/10);
    const grandTotal = (total+ shipping + Number(tax)).toFixed(2);
    const formatNumber= num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3>Order summary</h3>
            <p>Orderd Items:{props.cart.length}</p>
            <p>Shipping & Handling:{shipping.toFixed(2)}</p>
            <p>Total before tax: {formatNumber(total)}</p>
            <p>Estimated Tax:{formatNumber(tax)} </p>
            <p>Total price: {grandTotal}</p>
        </div>
    );
};

export default Cart;
import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <nav><a href="/shop">Shop</a>
                <a href="review">Review</a>
                <a href="inventory">Inventory</a>
                </nav>
            </div>
        </div>
        
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <ul>
                    <li> <Link to='/home'>Home</Link> </li>
                    <li> <Link to='/products'>Products</Link></li>
                    <li> <Link to="/addProduct">Add Product</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
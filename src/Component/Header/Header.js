import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className= "header">
              <div className="header_logo">
                    <img src="https://i1.wp.com/www.lfwfacademy.com/wp-content/uploads/2020/09/lfwf-white-logo.png?fit=816%2C514&ssl=1" alt="" />
                </div>   
                <div className="header_nav">
                    <nav>
                        <a href="#"> Home </a>
                        <a href="#"> Course </a>
                        <a href="#"> About </a>
                        <a href="#"> Contact </a>
                        <a href="#"> Blog </a>
                    </nav>    
                </div>       
        </div>
    );
};

export default Header;
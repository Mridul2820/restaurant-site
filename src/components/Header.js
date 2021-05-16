import React from 'react'

const Header = () => {
    return (
        <div id="main">
            <div className="header-heading">
                <h3>Its Burger Time 🍔</h3>
                <h1>
                    <span>Burger</span> for 
                    <br /> Week
                </h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="header-btns">
                    <a href="/" className="header-btn">Order</a>
                </div>
            </div>
        </div>
    )
}

export default Header

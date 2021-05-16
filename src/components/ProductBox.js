import React from 'react'

const ProductBox = ({ image, title }) => {
    return (
        <div className="productbox">
            <div className="productbox-img">
                <img src={image} alt={title} />
            </div>
            <div className="productbox-text">
                <h2>{title}</h2>
                <button className="productbox-button">
                    Order Now
                </button>
            </div>
        </div>
    )
}

export default ProductBox

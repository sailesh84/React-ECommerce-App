import React from "react";

const CartItems = ({ product, addInCart }) => {
    return (
        <div className="card" style={{width: "auto", marginBottom: "1rem"}}>
            <img src={product.smallImage} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">{product.productPrice}</p>
                <button className="btn btn-success" onClick={() => addInCart(product)}>Buy Now</button>
            </div>
        </div>
    )
}

export default CartItems;
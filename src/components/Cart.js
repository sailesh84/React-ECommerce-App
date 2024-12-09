import React from "react";

const Cart = ({ cartItem, removeItem, buyNow }) => {

    let amount = 0;

    //calculating cart price
    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    })

    return (
        <div className="container">
            <h1 className="text-success">Your Cart</h1>
            <ul className="list-group">
                {cartItem.map(item => (
                    <li className="list-group-item" key={item.id}>
                        <div className="row">
                            <div className="col">
                                <img height={80} src={item.tinyImage} />
                            </div>
                            <div className="col text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>Price: {item.productPrice}</span>
                                <button className="danger" onClick={() => removeItem(item)}>Remove</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {cartItem.length >= 1 ? (
                <div className="card text-center mt-3" >
                    <div className="card-header" >Grand Total</div>
                    <div className="card-body">
                        Your amount for {cartItem.length} product is {amount}
                    </div>
                    <div className="card-footer">
                        <button className="success" onClick={buyNow}>Pay Here</button>
                    </div>
                </div>
            ) : (
                <h1 className="text-warning" > Cart is empty </h1>
            )}
        </div>
    )
}

export default Cart;
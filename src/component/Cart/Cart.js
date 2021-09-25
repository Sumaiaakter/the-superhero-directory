import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}
    console.log(cart);

    // price calculation

    let total = 0;
    for (const cars of cart) {
        total = total + cars.price;

    }
    const tax = total * .5;
    const grandTotal = total + tax;
    return (
        <div>
            <h2>Order Quantity:{props.cart.length}</h2>
            <ul>
                {
                    cart.map(car => <li>{car.name}</li>)
                }
            </ul>
            <h3>Total:{total} </h3>
            <h3>Tax:{tax} </h3>
            <h3>Grand Total:{grandTotal} </h3>

        </div>
    );
};

export default Cart;
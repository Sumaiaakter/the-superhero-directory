import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { cart } = props || {}
    console.log(cart);

    const icon = <FontAwesomeIcon icon={faShoppingCart} />

    // price calculation

    let total = 0;
    for (const cars of cart) {
        total = total + cars.price;

    }
    const tax = total * .1;
    const grandTotal = total + tax;
    return (
        <div>
            <h5>
                {icon}: {props.cart.length}</h5>
            <ul>
                {
                    cart.map(car => <li>{car.name}</li>)
                }
            </ul>
            <p>Total: $ {total} </p>
            <p>Tax: $ {tax} </p>
            <p>Grand Total: $ {grandTotal} </p>

        </div>
    );
};

export default Cart;
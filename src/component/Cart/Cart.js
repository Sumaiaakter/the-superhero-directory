import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
            {/* <p>Total: $ {total} </p>
            <p>Tax: $ {tax} </p>
            <p>Grand Total: $ {grandTotal} </p> */}
            <table class="table">

                <tbody>
                    <tr>
                        <th scope="row">1.</th>
                        <td>Price</td>

                        <td>$ {total}</td>
                    </tr>
                    <tr>
                        <th scope="row">2.</th>
                        <td>Tax</td>
                        <td>$ {tax}</td>
                    </tr>
                    <tr>
                        <th scope="row">3.</th>
                        <td>Grand Total</td>
                        <td>$ {grandTotal}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default Cart;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cars.css';

const Cars = (props) => {
    console.log(props.car);

    // Destructuring to collect info

    const { name, img, company, price, stock } = props.car || {};

    // added icon
    const icon = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div className="col-md-6 mx-8">
            <div className="card mb-3" style={{ "max-width": "540px" }}>
                <div className="row g-0">
                    <div className="col-md-7">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title"><small>{name}</small></h5>
                            <h5 className="company"><small>{company}</small></h5>
                            <p className="card-text"><small>$ {price}</small></p>
                            <p className="card-text"><small>{stock} left</small></p>
                            <button
                                onClick={() => props.handleAddToCart(props.car)}
                                className="btn btn-dark">{icon} Add to Cart</button>

                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <h1><i className="fab fa-cc-apple-pay icon"></i></h1>
                    <h1><i className="fab fa-cc-paypal icon"></i></h1>
                    <h1><i className="fab fa-cc-stripe icon"></i></h1>
                </div>
            </div>

        </div>
    );
};

export default Cars;
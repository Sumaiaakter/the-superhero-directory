import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Cars = (props) => {
    console.log(props.car);

    // Destructuring to collect info

    const { name, img, company, price, stock } = props.car || {};

    // added icon
    const icon = <FontAwesomeIcon icon={faCoffee} />

    return (
        <div className="col-md-6">
            <div class="card mb-3" style={{ "max-width": "540px" }}>
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title"><small>{name}</small></h5>
                            <h5 class="card-title"><small>{company}</small></h5>
                            <p class="card-text"><small>$ {price}</small></p>
                            <p class="card-text"><small>{stock} left</small></p>
                            <button
                                onClick={() => props.handleAddToCart(props.car)}
                                className="btn btn-primary">{icon} Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cars;
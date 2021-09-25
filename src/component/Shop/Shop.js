import React, { useEffect, useState } from 'react';
import Cars from '../Cars/Cars';
import Cart from '../Cart/Cart';

const Shop = (props) => {
    const [cars, setCars] = useState([]);

    // car in the cart

    const [cart, setCart] = useState([]);

    const handleAddToCart = (car) => {
        const newCar = [...cart, car]
        setCart(newCar)
    }

    useEffect(() => {
        fetch('./cars.JSON')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-9">

                    <div className="row">
                        {
                            cars.map(car => <Cars
                                id={car.id}
                                car={car}
                                handleAddToCart={handleAddToCart}
                            ></Cars>)
                        }

                    </div>

                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
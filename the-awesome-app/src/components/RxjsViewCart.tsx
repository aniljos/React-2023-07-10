import React, {JSX, useContext, useEffect, useState} from 'react';
import { CartItem } from '../models/CartItem';
import {rxjsGadgetStore} from '../rxjs/rxjsStore';

function RxjsViewCart(): JSX.Element {

    
    const [cart, setCart] = useState<CartItem[]>([])


    useEffect(() => {

        
        setCart(rxjsGadgetStore.cart);
        rxjsGadgetStore.subject.subscribe((updatedCart: CartItem[]) => {
            console.log("RxjsViewCart", updatedCart);
            setCart(updatedCart);
        });
        console.log("ViewCart", cart);

    }, [])

    function remove(item: CartItem) {

        rxjsGadgetStore.removeFromCart(item);
    }
    return (
        <div>
            <h3>Gadgets Cart</h3>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {cart.map((item, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className="card bg-light mb-3 border-success">
                                <p className="card-header">{item.product?.name}</p>
                                <div className="card-body">
                                    <p className="card-text">{item.product?.description}</p>
                                    <p className="card-text">Quantity: {item.quantity}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" onClick={() => { remove(item) }}>Remove</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default RxjsViewCart;
import React, {JSX, useContext, useEffect, useState} from 'react';
import { CartItem } from '../models/CartItem';
import {useSelector, useDispatch} from 'react-redux';
import { AppDispatch, AppState } from '../redux/store';
import { createRemoveFromCartAction } from '../redux/actionsCreators';

function ReduxViewCart(): JSX.Element {

   
    const cart = useSelector<AppState>(state => state.gadgets.cart) as CartItem[];
    const dispatch = useDispatch<AppDispatch>();

    function remove(item: CartItem) {

        //dispatch({type: "REMOVEFROMCART", item: item});
        dispatch(createRemoveFromCartAction(item));
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

export default ReduxViewCart;
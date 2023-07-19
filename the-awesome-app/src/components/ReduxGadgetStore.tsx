import { useContext, useEffect, useState } from "react";
import { Product } from "../models/Product";
import React, {JSX} from 'react';
import {useAxiosGetProducts} from '../hooks/useAxiosGetProducts';
import {useDispatch, useSelector} from 'react-redux';
import { AppDispatch, AppState } from "../redux/store";
import { CartItem } from "../models/CartItem";
import { createAddToCartAction, createUpdateProductsAction } from "../redux/actionsCreators";

export default function ReduxGadgetStore() : JSX.Element {

    //const [products] = useAxiosGetProducts(); //useState<Product[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector<AppState>(state => state.gadgets.products) as Product[];

    useEffect(() => {
        dispatch(createUpdateProductsAction())
    })

   function addToCart(item: Product){

        //dispatch({type: "ADDTOCART", item: new CartItem(item, 1)});
        dispatch(createAddToCartAction(new CartItem(item, 1)));
        
   }

    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button  className="btn btn-primary" onClick={() => {addToCart(item)}}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }

    return (
        <div>
            <h4>Gadgets Store</h4>
            {renderProducts()}
        </div>
    )
}
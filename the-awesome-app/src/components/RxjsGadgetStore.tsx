import { useContext, useEffect, useState } from "react";
import { Product } from "../models/Product";
import React, {JSX} from 'react';
import {useAxiosGetProducts} from '../hooks/useAxiosGetProducts';
import {rxjsGadgetStore} from '../rxjs/rxjsStore';

export default function RxjsGadgetStore() : JSX.Element {

    const [products] = useAxiosGetProducts(); //useState<Product[]>([]);
    

   function addToCart(item: Product){

        rxjsGadgetStore.addToCart({product: item, quantity: 1})

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
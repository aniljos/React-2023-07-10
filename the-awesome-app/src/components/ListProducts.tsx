import React, {JSX, useEffect, useState} from 'react';
import axios from 'axios';
import { Product } from '../models/Product';
import './ListProducts.css'

function ListProducts(): JSX.Element{

    const [products, setProducts] = useState<Product[]>([])

    // useEffect(callback, [list of dependencies])
    //useEffect will be invoked only once(as soon as the component is mounted)
    useEffect(() => {
        console.log("useEffect")
        fetchProducts();

    }, [])

    useEffect(() => {
        console.log("useEffect products", products)
        
    }, [products])

    function fetchProducts(){

        axios
            .get<Product[]>("http://localhost:9000/products")
            .then(function(resp){

                console.log("success", resp)
                setProducts(resp.data);

            }, function(err){
                console.log("error", err);
            });
    }
    return (
        <div>
            <h4>List Products</h4>

            <div className='products'>
                {products.map((item: Product, index) => {
                    return (
                        <div className='product'>
                            <p>
                                <img src={"http://localhost:9000" + item.imageUrl} height={50} width={50}/>
                            </p>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                       </div>
                    )
                })}
            </div>
        </div>
    )
}


export default ListProducts;
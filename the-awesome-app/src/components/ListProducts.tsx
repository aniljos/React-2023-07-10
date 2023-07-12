import React, {JSX, useEffect, useState} from 'react';
import axios from 'axios';

function ListProducts(): JSX.Element{

    const [products, setProducts] = useState([])

    // useEffect(callback, [list of dependencies])
    //useEffect will be invoked only once(as soon as the component is mounted)
    useEffect(() => {
        console.log("useEffect")
        fetchProducts();

    }, [])

    function fetchProducts(){

        axios
            .get("http://localhost:9000/products")
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

            <div>
                {products.map((item: any, index) => {
                    return (
                        <div>
                            <p>Id: {item.id}</p>
                            <p>Name: {item.name}</p>
                       </div>
                    )
                })}
            </div>
        </div>
    )
}


export default ListProducts;
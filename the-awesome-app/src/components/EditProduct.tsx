import React, {ChangeEvent, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Product } from "../models/Product";

export default function EditProduct(){

    const params = useParams();
    const [product, setProduct] = useState<Product>(new Product());

    useEffect(() => {

        fetchProduct()

    }, [])

    async function fetchProduct(){
        try {
            const resp = await axios.get<Product>("http://localhost:9000/products/" + params.id);
            setProduct(resp.data);

      } catch (error) {
          
      }
    }

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){
        
        const value = evt.target.value;
        const copy = {...product};
        copy.name = value;
        setProduct(copy);
    }


    return (
        <div>
            <h4>Edit Product: {params.id}</h4>

            <div className="form-group">
                <label>Name</label>
                <input className="form-control" type="text" value={product.name} onChange={handleNameChange}/>
            </div>

            <div className="form-group">
                <label>Price</label>
                <input className="form-control" type="number" value={product.price}/>
            </div>

            <div className="form-group">
                <label>Description</label>
                <input className="form-control" type="text" value={product.description}/>
            </div>

            <div>
                <button className="btn btn-success">Save</button> &nbsp;
                <button className="btn btn-danger">Cancel</button>
            </div>
        </div>
    )
}
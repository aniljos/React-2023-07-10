import React, {ChangeEvent, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Product } from "../models/Product";
import {useNavigate} from 'react-router-dom';

export default function EditProduct(){

    const params = useParams();
    const [product, setProduct] = useState<Product>(new Product(0, "", 0, ""));
    const navigate = useNavigate();

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
        // const copy = {...product};
        // copy.name = value;
        // setProduct(copy);

        setProduct({...product, name: evt.target.value});
    }

    async function save(){

        try {
            if(process.env.REACT_APP_BASE_URL){
                const url = process.env.REACT_APP_BASE_URL + "/products/" +  product.id;
                await axios.put(url, product);
                alert("Updated");
                navigate(-1);
            }
        } catch (error) {
            alert("Update failed");
        }
    }

    function cancel(){
        navigate(-1);
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
                <input className="form-control" type="number" 
                        value={product.price} 
                        onChange={e => {setProduct({...product, price: Number(e.target.value)})}}/>
            </div>

            <div className="form-group">
                <label>Description</label>
                <input className="form-control" type="text" 
                        value={product.description}
                        onChange={e => {setProduct({...product, description: e.target.value})}}/>
            </div>

            <div>
                <button className="btn btn-success" onClick={save}>Save</button> &nbsp;
                <button className="btn btn-danger" onClick={cancel}>Cancel</button>
            </div>
        </div>
    )
}
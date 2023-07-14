import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Product } from "../models/Product";

export default function EditProduct(){

    const params = useParams();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {

        fetchProduct()

    }, [])

    async function fetchProduct(){
        try {
            const resp = await axios.get<Product>("http://localhost:9000/products/" + params.id);

      } catch (error) {
          
      }
    }




    return (
        <div>
            <h4>Edit Product: {params.id}</h4>
        </div>
    )
}
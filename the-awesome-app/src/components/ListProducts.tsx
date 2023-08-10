import React, { JSX, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Product } from "../models/Product";
import "./ListProducts.css";
import { useNavigate } from 'react-router-dom';
import ProductView from "./ProductView";
import { useTitle } from "../hooks/useTitle";
import {useSelector} from 'react-redux'
import { AppState } from "../redux/store";
import { AuthState } from "../redux/authReducer";

const baseUrl = "http://localhost:9000";

function ListProducts(): JSX.Element {

  const [isMessageVisible, setMessageVisible] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const auth:any = useSelector<AppState>(state => state.auth );
  useTitle("ListProducts");
  

  // useEffect(callback, [list of dependencies])
  //useEffect will be invoked only once(as soon as the component is mounted)
  useEffect(() => {
    console.log("useEffect mounted");
    fetchProducts();
    

    //invoked only once(as soon as the component is unmounted)
    return () => {
      console.log("useEffect unmounted");
      
    }
  }, []);

  // useEffect(() => {
  //     console.log("useEffect products", products)

  // }, [products])

  function fetchProducts() {

    //Authorization : "Bearer {actual token}"
    const headers = {"Authorization": `Bearer ${auth.accessToken}`};
    axios.get<Product[]>(baseUrl + "/secure_products", {headers: headers})
      .then(
      function (resp) {
        console.log("success", resp);
        setProducts(resp.data);
      },
      function (err) {
        console.log("error", err);
      }
    );
  }

  const deleteProduct = useCallback(async function deleteProduct(product: Product) {
    try {

      const url = baseUrl + "/products/" + product.id;
      const resp = await axios.delete(url);
      alert("Product deleted");

      //fetching the updated products from the server
      //fetchProducts();

      //update the products(array) in the state
      const index = products.findIndex(item => item.id === product.id);
      //create a copy of the products array
      const copy_of_products = [...products];
      copy_of_products.splice(index, 1);
      setProducts(copy_of_products);

    } catch (err) {
      console.log("deleteProduct err", err);
      alert("Failed to delete " + product.name);
    }
  }, [products])

  const editProduct = useCallback( function editProduct(product: Product) {
    
    navigate("/products/" + product.id);

  }, [products])


  return (
    <div>
      <h4>List Products</h4>

      {isMessageVisible ? <div className="alert alert-info">
        This is the list of products
      </div> : null}
      <div>
        <button className="btn btn-info"
          onClick={() => setMessageVisible(!isMessageVisible)}>{isMessageVisible ? "Hide Message" : "Show Mesage"}</button>
      </div>
      <br />

      <div className="products">
        {products.map((item: Product, index) => {
          return (
            // <div key={item.id} className="product">
            //   <p>
            //     <img src={baseUrl + item.imageUrl} height={50} width={50} />
            //   </p>
            //   <p>{item.name}</p>
            //   <p>{item.price}</p>
            //   <p>{item.description}</p>
            //   <div>
            //     <button onClick={() => { editProduct(item) }}>Edit</button> &nbsp;
            //     <button
            //       onClick={() => {
            //         deleteProduct(item);
            //       }}
            //     >
            //       Delete
            //     </button>
            //   </div>
            // </div>
            <ProductView key={item.id} 
                        product={item} 
                        onEdit={editProduct} 
                        onDelete={deleteProduct}
                        />
          );
        })}
      </div>
    </div>
  );
}

export default ListProducts;

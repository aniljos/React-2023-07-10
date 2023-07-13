import React, { JSX, useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../models/Product";
import "./ListProducts.css";

const baseUrl = "http://localhost:9000";

function ListProducts(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(callback, [list of dependencies])
  //useEffect will be invoked only once(as soon as the component is mounted)
  useEffect(() => {
    console.log("useEffect");
    fetchProducts();
  }, []);

  // useEffect(() => {
  //     console.log("useEffect products", products)

  // }, [products])

  function fetchProducts() {
    axios.get<Product[]>(baseUrl + "/products").then(
      function (resp) {
        console.log("success", resp);
        setProducts(resp.data);
      },
      function (err) {
        console.log("error", err);
      }
    );
  }

  async function deleteProduct(product: Product) {
    try {
      
        const url = baseUrl + "/products/" + product.id;
        const resp = await axios.delete(url);
        alert("Product deleted");
        
        //fetching the updated products from the server
        //fetchProducts();

        //update the products(array) in the state
        const index = products.findIndex(item => item.id ===product.id);
        //create a copy of the products array
        const copy_of_products = [...products];
        copy_of_products.splice(index, 1);
        setProducts(copy_of_products); 

    } catch (err) {
      console.log("deleteProduct err", err);
      alert("Failed to delete " + product.name);
    }
  }
  return (
    <div>
      <h4>List Products</h4>

      <div className="products">
        {products.map((item: Product, index) => {
          return (
            <div key={item.id} className="product">
              <p>
                <img src={baseUrl + item.imageUrl} height={50} width={50} />
              </p>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <div>
                <button onClick={() => {}}>Edit</button> &nbsp;
                <button
                  onClick={() => {
                    deleteProduct(item);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProducts;

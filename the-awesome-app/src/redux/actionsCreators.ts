import axios from "axios"
import { CartItem } from "../models/CartItem"
import { Product } from "../models/Product"
import { GadgetAction } from "./gadgetsReducer"
import { AppDispatch } from "./store"

// {type: "ADDTOCART", item: {}}
export const createAddToCartAction = (item : CartItem): GadgetAction=>{

    return {
        type: "ADDTOCART",
        item: item
    }

}
// {type: "REMOVEFROMCART", item: {}}
export const createRemoveFromCartAction = (item : CartItem): GadgetAction=>{

    return {
        type: "REMOVEFROMCART",
        item: item
    }

}
// {type: "UPDATEPRODUCTS", products: {}}
export const createUpdateProductsAction = ()=>{

    // return {
    //     type: "UPDATEPRODUCTS",
    //     products: products
    // }

    return async (dispatch: AppDispatch) => {

        try {
            const resp= await axios.get<Product[]>(process.env.REACT_APP_BASE_URL + "/products");
            const products = resp.data;
            dispatch({
                type: "UPDATEPRODUCTS",
                products: products
            })

        } catch (error) {
            
        }
    }

}

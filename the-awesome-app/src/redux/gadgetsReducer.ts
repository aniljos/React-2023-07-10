import { CartItem } from "../models/CartItem"
import { Product } from "../models/Product"

//State Type
export type GadgetState = {
    cart: CartItem[],
    products: Product[]
}
//Action Type

// {type: "ADDTOCART", item: {}}
// {type: "REMOVEFROMCART", item: {}}
// {type: "UPDATEPRODUCTS", products: {}}
export type GadgetAction = {
    type: string,
    item?: CartItem,
    products?: Product[] 
}

//Initial State

const initialState: GadgetState = {
    cart: [],
    products: []
}


export const gadgetReducer = (state: GadgetState=initialState, action: GadgetAction) :GadgetState => {
    
    if(action.type === "ADDTOCART" && action.item){

        //const copy = [...state.cart ];
        //copy.push(action.item);

        const copy = state.cart.concat(action.item);

        return {
            ...state,
            cart: copy
        };
    }
    if(action.type === "REMOVEFROMCART" && action.item){

        const copy = [...state.cart ];
        const index = copy.findIndex(item => item.product?.id === action.item?.product?.id);
        copy.splice(index, 1);
        //copy.push(action.item);

        return {
            ...state,
            cart: copy
        };
    }
    if(action.type === "UPDATEPRODUCTS" && action.products){

        return {
            ...state,
            products: action.products
        };
    }


    return state;
}
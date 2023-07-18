import React from "react";
import { CartItem } from "../models/CartItem";

export class AppCart{

    private _data: CartItem[] = []

   
    public get data(){
        return this._data;
    }

    add(item: CartItem){
        this._data.push(item);
    }

    remove(cartItem: CartItem){
        const index = this._data.findIndex(item => 
            item.product?.id === cartItem.product?.id);
        this._data.splice(index, 1);

    }

}

export const initialState = new AppCart();
export const AppStoreContext = React.createContext(initialState);
import { Product } from "./Product";

export class CartItem{

    product: Product | undefined;
    quantity: number | undefined;

    constructor(product?: Product, quantity?: number){
        this.product = product; 
        this.quantity = quantity;

    }

}
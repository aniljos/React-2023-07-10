import { Subject } from "rxjs";
import { CartItem } from "../models/CartItem";

export class RxjsGadgetStore{

    private _cart: CartItem[] = [];
    public subject: Subject<CartItem[]> = new Subject<CartItem[]>(); 

    public get cart(){

        return [...this._cart];
    }

    public addToCart(item : CartItem){

        this._cart.push(item);
        //pulish the updated cart
        this.subject.next([...this._cart]);
    }

    public removeFromCart(cartItem: CartItem){

        debugger;
        const index = this._cart.findIndex(item => item.product?.id === cartItem.product?.id);
        this._cart.splice(index, 1);

        //pulish the updated cart
        this.subject.next([...this._cart]);
    }
}

export const rxjsGadgetStore = new RxjsGadgetStore();
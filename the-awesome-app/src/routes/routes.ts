import {JSX} from 'react';
import Hello from '../components/Hello';
import Counter from '../components/Counter';
import ListProducts from '../components/ListProducts';
import EditProduct from '../components/EditProduct';
import Login from '../components/Login/Login';
import GadgetStore from '../components/GadgetStore';
import ViewCart from '../components/ViewCart';
import ReduxGadgetStore from '../components/ReduxGadgetStore';
import ReduxViewCart from '../components/ReduxViewCart';

type Route={

    path: string,
    component: (props: any)=> JSX.Element | any,
    title?: string,
    isSecure?: boolean,
    props?: any,
    isOnMainMenu?: boolean,
    isProtected?: boolean
}


export const routes: Route[] = [
    {
        path: "/",
        component: Hello,
        title: "Home",
        isOnMainMenu: true
    },
    {
        path: "/counter",
        component: Counter,
        title: "Counter",
        props: {initValue: 5},
        isOnMainMenu: true
    },
    {
        path: "/products",
        component: ListProducts,
        title: "Products",
        isOnMainMenu: true,
        isProtected: true
    },
    {
        path: "/products/:id",
        component: EditProduct,
        
    },
    {
        path: "/login",
        component: Login,
        title: "Login",
        isOnMainMenu: true
    },
    {
        path: "/gadgets",
        component: GadgetStore,
        title: "Gadgets",
        isOnMainMenu: true
    },
    {
        path: "/cart",
        component: ViewCart,
        title: "View Cart",
        isOnMainMenu: true
    },
    {
        path: "/reduxgadgets",
        component: ReduxGadgetStore,
        title: "ReduxGadgets",
        isOnMainMenu: true
    },
    {
        path: "/reduxcart",
        component: ReduxViewCart,
        title: "Redux View Cart",
        isOnMainMenu: true
    },

]
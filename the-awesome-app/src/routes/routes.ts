import React, {Component, JSX} from 'react';
import Hello from '../components/Hello';
import Counter from '../components/Counter';
import ListProducts from '../components/ListProducts';
import EditProduct from '../components/EditProduct';
import Login from '../components/Login/Login';
import GadgetStore from '../components/GadgetStore';

import ReduxGadgetStore from '../components/ReduxGadgetStore';
import ReduxViewCart from '../components/ReduxViewCart';
import RxjsGadgetStore from '../components/RxjsGadgetStore';
import RxjsViewCart from '../components/RxjsViewCart';
import ListCustomers from '../components/ListCustomers';
import HelloWithError from '../components/HelloWithError';

//static import
//import ViewCart from '../components/ViewCart';

//dynamic import(creates a seperate bundle)
const ViewCart = React.lazy(() => import('../components/ViewCart'));

type Route={

    path: string,
    component:    any,
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
    {
        path: "/rxjsgadgets",
        component: RxjsGadgetStore,
        title: "RxjsGadgets",
        isOnMainMenu: true
    },
    {
        path: "/rxjscart",
        component: RxjsViewCart,
        title: "Rxjs View Cart",
        isOnMainMenu: true
    },
    {
        path: "/customers",
        component: ListCustomers,
        title: "Customers",
        isOnMainMenu: true,
        props: {message: "This is a class component"}
    },
    {
        path: "/helloerror",
        component: HelloWithError,
        title: "Error Boundaries",
        isOnMainMenu: true
    },

]
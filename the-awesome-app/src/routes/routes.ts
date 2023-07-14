import {JSX} from 'react';
import Hello from '../components/Hello';
import Counter from '../components/Counter';
import ListProducts from '../components/ListProducts';
import EditProduct from '../components/EditProduct';

type Route={

    path: string,
    component: (props: any)=> JSX.Element,
    title?: string,
    isSecure?: boolean,
    props?: any,
    isOnMainMenu?: boolean
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
        isOnMainMenu: true
    },
    {
        path: "/products/:id",
        component: EditProduct,
        
    }

]
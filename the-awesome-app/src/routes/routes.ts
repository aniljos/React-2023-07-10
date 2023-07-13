import {JSX} from 'react';
import Hello from '../components/Hello';
import Counter from '../components/Counter';
import ListProducts from '../components/ListProducts';

type Route={

    path: string,
    component: (props: any)=> JSX.Element,
    title?: string,
    isSecure?: boolean,
    props?: any
}


export const routes: Route[] = [
    {
        path: "/",
        component: Hello,
        title: "Home"
    },
    {
        path: "/counter",
        component: Counter,
        title: "Counter",
        props: {initValue: 5}
    },
    {
        path: "/products",
        component: ListProducts,
        title: "Products"
    }

]
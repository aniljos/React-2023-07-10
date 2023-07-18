import {JSX} from 'react';
import {useSelector} from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

type ProtectedRouteProps = {

    children: any
}

export default function ProtectedRoute(props: ProtectedRouteProps){

    const auth = useSelector((state: any) => state.auth);

    if(auth.isAuthenticated){
        return props.children;
    }
    else{
        return <Navigate to="/login" />
    }
}
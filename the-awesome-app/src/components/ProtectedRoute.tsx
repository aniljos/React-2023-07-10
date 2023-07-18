import {JSX} from 'react';
import {useSelector} from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { AppState } from '../redux/store';

type ProtectedRouteProps = {

    children: any
}

export default function ProtectedRoute(props: ProtectedRouteProps){

    const auth = useSelector((state: AppState) => state.auth);

    if(auth.isAuthenticated){
        return props.children;
    }
    else{
        return <Navigate to="/login" />
    }
}
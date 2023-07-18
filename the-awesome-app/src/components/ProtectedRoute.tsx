import {JSX} from 'react';
import {useSelector} from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

type ProtectedRouteProps = {
    path: string,
    element: JSX.Element
}


export default function ProtectedRoute(props: ProtectedRouteProps){

    const auth = useSelector((state: any) => state.auth);

    if(auth.isAuthenticated){
        return <Route path={props.path} element={props.element}/>
    }
    else{
        return <Navigate to="/login" />
    }
}
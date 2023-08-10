import {useNavigate} from 'react-router-dom';

function withNavigate(Component: any){

    return function WithNavigationHOC(props: any){

        const navigate = useNavigate();
        return (
            <Component {...props} navigate={navigate}/>
        );
    }
}

export default withNavigate;
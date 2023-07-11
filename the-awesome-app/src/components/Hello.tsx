import {JSX} from 'react';
//import Message from './Message'; //default import 
import {Message} from './Message'; // named import

// Component <Hello/>
function Hello() : JSX.Element{
    
    //return JSX(View)
    return (
        <div> 
            <h4>Hello Component</h4>
            <p>This is a functional component</p>
            <p>Generated at {new Date().toLocaleString()}</p>
            <Message title="Infomation" text="Hello, component props"/>
            {/* <Message title="Error" text="There is an error"/> */}
        </div>
    );

}


export default Hello;
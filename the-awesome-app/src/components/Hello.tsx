import {JSX, useState} from 'react';
//import Message from './Message'; //default import 
import {Message} from './Message'; // named import

// const result = useState(false);
// console.log("result", result);
// const flag= result[0];
// const setFlag = result[1];


// Component <Hello/>
function Hello() : JSX.Element{
    
    //let flag = false;
    const [flag, setFlag] = useState(false);

    function showDialog(){
        
        setFlag(true); //async
        console.log("flag", flag);
    }

    function closeDialog(){
        setFlag(false);
    }

    //return JSX(View)
    return (
        <div> 
            <h4>Hello Component</h4>
            <p>This is a functional component</p>
            <p>Generated at {new Date().toLocaleString()}</p>
            <div>
                <button onClick={showDialog}>Show Dialog</button>
            </div>
            { flag ? <Message title="Infomation" text="Hello, component props" onClose={closeDialog}/> : null}
            {/* <Message title="Error" text="There is an error"/> */}
        </div>
    );

}


export default Hello;
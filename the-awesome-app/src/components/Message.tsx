import {JSX, MouseEvent} from 'react';
import './Message.css';

type MessageProps= {
    title?: string;
    text?: string;
}

// <Message title="" text=""/>
export function Message(props: MessageProps): JSX.Element{

    function handleEvent(evt: MouseEvent<HTMLElement>){
        console.log("close button clicked", evt);
    }

    return (
        <div className='container'>
            <h4 className='title'>{props.title ? props.title : "Message"}</h4>
            <p>{props.text ? props.text : "No Text available"}</p>
            <button onClick={handleEvent}>Close</button>
        </div>
    )
}

//export default Message;




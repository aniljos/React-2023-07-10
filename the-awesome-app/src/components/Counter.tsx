import React, {ChangeEvent, JSX, useState, useRef} from 'react';

type CounterProps = {
    initValue: number;
}

// <Counter initValue={0}/>
export default function Counter(props: CounterProps): JSX.Element{

    let {initValue} = props;
    const [counter, setCounter] = useState(initValue);
    const inputRef = useRef<HTMLInputElement>(null); // => return an object {current: (ref to the input)}

    function inc(){
        setCounter(counter + 1);
    }
    function decr(){
        setCounter(counter - 1);
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>){

        console.log(evt);
        console.log(evt.target);
        console.log(evt.target.value);
        setCounter(Number(evt.target.value));
    }

    function handleUpdate(){
        console.log("inputRef", inputRef);
        console.log("inputRef", inputRef.current?.value);
        setCounter(Number(inputRef.current?.value))
    }

    return (
        <div>
            <h4>Counter</h4>
            <p>Count: {counter}</p>

            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button onClick={decr}>Decr</button>
            </div>

            <div>
                {/* Controlled input: 2-way binding */}
                <input type='number' placeholder='Counter' value={counter} onChange={handleChange}/>
            </div>

            <div>
                {/* Uncontrolled input */}
                <input type='number' ref={inputRef}/> &nbsp;
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    );
}


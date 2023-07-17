import React from "react";
import { useLogin } from "./useLogin";

function Login(): JSX.Element{

    const [message, userName, setUserName, password, setPassword, login] = useLogin()
    

    return (
        <div>
            <h4>Login</h4>
            {message ?<div className='alert alert-danger'>{message}</div>: null}
            <div className='form-group'>
                <label>UserName</label>
                <input className='form-control' value={userName} onChange={e => {setUserName(e.target.value)}}/>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input className='form-control'type='password' 
                                value={password} onChange={e => {setPassword(e.target.value)}}/>
            </div>
            <br/>
            <div>
                <button className='btn btn-success' onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default React.memo(Login);
import React, {} from 'react';
function Login(): JSX.Element{

    return (
        <div>
            <h4>Login</h4>
            <div className='form-group'>
                <label>UserName</label>
                <input className='form-control'/>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input className='form-control'type='password'/>
            </div>
            <br/>
            <div>
                <button className='btn btn-success'>Login</button>
            </div>
        </div>
    )
}

export default React.memo(Login);
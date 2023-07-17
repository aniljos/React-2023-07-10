import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
export function useLogin(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    async function login(){

        const url = process.env.REACT_APP_BASE_URL + "/login";
        if(userName && password){
            setMessage("");
            try {

                const response = await axios.post(url, {name: userName, password: password});
                setMessage("");
                navigate("/products")

            } catch (error) {
                setMessage("Invalid Credentials");
            }
        }
        else{
            setMessage("Inputs required");
        }
    }

    return [message, userName, setUserName, password, setPassword, login] as const
}
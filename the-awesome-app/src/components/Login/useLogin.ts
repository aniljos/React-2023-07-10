import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { AppDispatch } from '../../redux/store';

export function useLogin(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    async function login(){

        const url = process.env.REACT_APP_BASE_URL + "/login";
        if(userName && password){
            setMessage("");
            try {

                const response = await axios.post(url, {name: userName, password: password});
                console.log(response.data, "response.data");
                setMessage("");
                navigate("/products");
                dispatch({type: "SET_AUTH_INFO", payload: {
                    isAuthenticated: true,
                    userName,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken
                }})

            } catch (error) {
                setMessage("Invalid Credentials");
                dispatch({type: "SET_AUTH_INFO", payload: {
                    isAuthenticated: false,
                    userName: "",
                    accessToken: "",
                    refreshToken: ""
                }})
            }
        }
        else{
            setMessage("Inputs required");
        }
    }

    return [message, userName, setUserName, password, setPassword, login] as const
}
import axios, { InternalAxiosRequestConfig } from 'axios';
import {reduxStore} from '../redux/store';

axios.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {

    const baseUrl: string = "" + process.env.REACT_APP_BASE_URL;

    if(config.url !== baseUrl + "/login" && config.url?.startsWith(baseUrl)){
        const accessToken = reduxStore.getState().auth.accessToken;
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
   
    
    return config;
});


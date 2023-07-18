
export type AuthState = {
    isAuthenticated: boolean,
    userName?: string,
    accessToken?: string,
    refreshToken?: string
}

const initState: AuthState = {
    isAuthenticated: false,
    userName: "",
    accessToken: "",
    refreshToken: ""
}

export type AuthAction = {
    type: string,
    payload: AuthState
} 

export const authReducer = (state: AuthState=initState, action:AuthAction) => {

    if(action.type === "SET_AUTH_INFO"){
        return {
            ...action.payload
        }
    }
    return state;
}


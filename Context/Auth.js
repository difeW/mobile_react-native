import { createContext, useReducer, useEffect } from 'react'
import { useContext, useState } from 'react'
import { authReducer } from '../Reducers/authReducer'
export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, {
        user: null
    })
    const setAuth = (user) => {
        dispatch({
            type: 'SET_AUTH',
            payload: { user: user }
        })
    }
    const authContextData = { authState, setAuth }
    // Return provider
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider

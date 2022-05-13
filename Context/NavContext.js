import { createContext, useReducer, useEffect } from 'react'
import { useContext, useState } from 'react'

export const NavContext = createContext()

const NavContextProvider = ({ children }) => {

    const [nav, setNav] = useState('Trang chủ')

    const Data = { nav, setNav }
    // Return provider
    return (
        <NavContext.Provider value={Data}>
            {children}
        </NavContext.Provider>
    )
}
export default NavContextProvider

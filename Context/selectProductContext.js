import { createContext, useReducer, useEffect } from 'react'
import { useContext, useState } from 'react'

export const selectProductContext = createContext()

const SelectProductContextProvider = ({ children }) => {

    const [id, setId] = useState('')

    const Data = { id, setId }
    // Return provider
    return (
        <selectProductContext.Provider value={Data}>
            {children}
        </selectProductContext.Provider>
    )
}
export default SelectProductContextProvider

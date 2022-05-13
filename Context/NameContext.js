import { createContext, useReducer, useEffect } from 'react'
import { useContext, useState } from 'react'

export const NameContext = createContext()

const NameContextProvider = ({ children }) => {

    const [name1, setName] = useState('')

    const Data = { name1, setName }
    // Return provider
    return (
        <NameContext.Provider value={Data}>
            {children}
        </NameContext.Provider>
    )
}
export default NameContextProvider

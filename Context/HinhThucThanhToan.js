import { createContext, useReducer, useEffect } from 'react'
import { useContext, useState } from 'react'

export const HinhThucContext = createContext()

const HinhThucContextProvider = ({ children }) => {

    const [hinhThucThanhToan, setValue] = useState('Thanh toán bằng tiền mặt')

    const Data = { hinhThucThanhToan, setValue }
    // Return provider
    return (
        <HinhThucContext.Provider value={Data}>
            {children}
        </HinhThucContext.Provider>
    )
}
export default HinhThucContextProvider

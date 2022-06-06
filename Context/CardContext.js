import axios from 'axios'
import { createContext, useReducer, useEffect } from 'react'
import { useContext, useState } from 'react'
import { AuthContext } from './Auth'
import { url } from './container'

export const CardContext = createContext()

const CardContextProvider = ({ children }) => {
    const { authState } = useContext(AuthContext)
    const [card, setCard] = useState([])
    const [count, setCount] = useState(0)

    const DeleteCard = async (id) => {
        let newList = card.filter(item => item.id != id)
        setCard([...newList])
        setCount(count - 1)
        const res = await axios.delete(`${url}/cart/${id}`,
            { headers: { Authorization: `Bearer ${authState.user.token}` } })
    }
    const AddProduct = async (id) => {

        if (card.filter((e) => {
            return (e.ProductId == id)
        }).length == 0) {
            setCount(count + 1)
        }

        await axios.post(`${url}/cart`, {
            ProductId: id
        }, { headers: { Authorization: `Bearer ${authState.user.token}` } })
        const res = await axios.get(`${url}/cart`, { headers: { Authorization: `Bearer ${authState.user.token}` } })
        setCard(res.data)
    }

    const IncreCard = async (id, Quantity, ProductId) => {
        await axios.patch(`${url}/cart/${id}`,
            {
                Quantity: Quantity,
                ProductId: ProductId

            }, { headers: { Authorization: `Bearer ${authState.user.token}` } })
        const res = await axios.get(`${url}/cart`, { headers: { Authorization: `Bearer ${authState.user.token}` } })
        setCard(res.data)
    }

    const Data = { card, setCard, DeleteCard, IncreCard, count, setCount, AddProduct }

    // Return provider
    return (
        <CardContext.Provider value={Data}>
            {children}
        </CardContext.Provider>
    )
}
export default CardContextProvider
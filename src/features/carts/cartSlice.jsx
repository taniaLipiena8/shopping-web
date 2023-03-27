import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    status: 'idle'
}

const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        cartAdded: {

            reducer(state, action) {
                const itemExist = state.cartItems.findIndex((item) => item.id === action.payload.id)

                if (itemExist >= 0) {
                    state.cartItems[itemExist] = { ...state.cartItems[itemExist], amount: state.cartItems[itemExist].amount + 1 }
                } else {
                    state.cartItems.push(action.payload)
                }

            },
            prepare(id, title, description, price, stock, thumbnail) {
                return {
                    payload: {
                        id,
                        title,
                        description,
                        price,
                        stock,
                        thumbnail,
                        amount: 1
                    }
                }
            }
        },

        deleteCart(state, action) {
            console.log(action.payload);



            const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload)

            state.cartItems = updatedCartItems

            alert('product removed')
        },

        amountIncreased(state, action) {
            const id  = action.payload
            const existingItem = state.cartItems.find(cart => cart.id === id)

            if (existingItem) {
                existingItem.amount++
            }

        },
        amountDecreased(state,action){
            const id  = action.payload
            const existingItem = state.cartItems.find(cart => cart.id === id)

            if (existingItem) {
                existingItem.amount--
            }
        }
    }
})

export const selectAllCarts = (state) => state.carts.cartItems

export const { cartAdded, deleteCart, amountIncreased, amountDecreased } = cartsSlice.actions

export default cartsSlice.reducer
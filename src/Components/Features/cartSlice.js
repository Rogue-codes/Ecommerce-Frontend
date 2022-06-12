import {createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartquantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addTocart:(state,action) => {
            // to prevent duplicate of the same item in the cart
            // we have to run this logic twice:

            // we create a constant called itemIndex and we use an array method called findIndex()
            // to get the index of each item in the cart
            const itemIndex = state.cartItems.findIndex((item) => 
                 item.id === action.payload.id
            )
            
            // after getting the index of each item in the cart, we check if the quantity of that item is 
            //  >= 0 (if the item exist in our cart) then if it exist we 
            // update the itemQuantityInCart by adding 1 to the quantity.
            if(itemIndex >= 0){
                state.cartItems[itemIndex].itemQuantityInCart += 1
                toast.success(`increased ${action.payload.name} quantity`, {
                    position: 'bottom-left',
                })
            }else{
            // if the quantity of the item with that index is less than 0 (meaning the item is not in our cart)
            // we add the item to our cart and set it itemQuantityInCart variable to 1
                const tempProduct = {...action.payload, itemQuantityInCart : 1}
                state.cartItems.push(tempProduct)
                toast.success(`added ${action.payload.name} to cart`,{
                    position: 'bottom-left',
                })
            }

            // adding our cartItems to the local storage.
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        deleteCartItem:(state, action) => {
            // here we are creating a constant nextcartItem and passing a function that will filter through our
            // cartItem state and return every other item in our cart except the item with the Id we just removed.
          const nextCartItem = state.cartItems.filter(item => item.id !== action.payload.id)

            // passing the nextCartItem variable to our state.cartIten.
          state.cartItems = nextCartItem

        //   storing our current cartItem to the localStorage
          localStorage.setItem('cartItems',JSON.stringify(state.cartItems))

          toast.error(`Removed ${action.payload.name} from cart`,{
            position: 'bottom-left',
        })
        },
        addFromCart : (state, action) =>{
            const itemIndex = state.cartItems.findIndex((item) => 
            item.id === action.payload.id)
            state.cartItems[itemIndex].itemQuantityInCart += 1
            toast.success(`Increased ${action.payload.name} Quantity`,{
                position: 'bottom-left',
            })
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        reduceFromcart : (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => 
            item.id === action.payload.id)

            if(state.cartItems[itemIndex].itemQuantityInCart > 1){
                state.cartItems[itemIndex].itemQuantityInCart -= 1
                toast.success(`Decreased ${action.payload.name} Quantity`,{
                    position: 'bottom-left',
                })
            }else if(state.cartItems[itemIndex].itemQuantityInCart===1){
                const nextCartItem = state.cartItems.filter(item => item.id !== action.payload.id)
                state.cartItems = nextCartItem
                toast.error(`Removed ${action.payload.name} from Cart`,{
                    position: 'bottom-left',
                })
                localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            }
            
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        clearCart: (state, action) => {
            state.cartItems = []
            toast.error(`Cart has been cleared`,{
                position: 'bottom-left',
            })

            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        getTotal: (state, action) => {
            let {total,totalItemsInCart} = state.cartItems.reduce((cartTotal, cartItem)=>{
                const {price, itemQuantityInCart} = cartItem
                const itemTotal = price * itemQuantityInCart

                cartTotal.total += itemTotal
                cartTotal.totalItemsInCart += itemQuantityInCart

                return cartTotal
            },{
                total: 0,
                totalItemsInCart : 0
            })

            state.cartquantity = totalItemsInCart
            state.cartTotalAmount = total
        }
    }
})

export const {addTocart,deleteCartItem,addFromCart,reduceFromcart,clearCart,getTotal} = cartSlice.actions
export default cartSlice.reducer
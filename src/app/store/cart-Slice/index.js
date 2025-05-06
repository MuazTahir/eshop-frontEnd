// // store/slices/cartSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
//     cartTotalQuantity: 0,
//     cartTotalAmount: 0,
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addCartItems(state, action) {
//             console.log("Adding to cart", action.payload);

//             // const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
//             // if (itemIndex >= 0) {
//             //     state.cartItems[itemIndex].cartQuantity += 1
//             // } else {

//             // }
//             const tempCart = { ...action.payload, cartQuantity: 1 }
//             state.cartItems.push(tempCart)

//             localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

//         }
//     },
// });

// export const { addCartItems } = cartSlice.actions;
// export default cartSlice.reducer;


// store/slices/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItems(state, action) {
            console.log('first redux', action.payload)
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if (!existingItem) {
                const newItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(newItem);

                console.log('new redux', state.cartItems);


                if (typeof window !== 'undefined') {
                    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
                }
            }
        },

        setCartFromStorage(state, action) {
            state.cartItems = action.payload;
        },

        removeCartItems(state, action) {
            const removeItem = state.cartItems.filter((cartItem) => cartItem._id !== action.payload._id)

            state.cartItems = removeItem

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },

        decCartItems(state, action) {

            const cartIndex = state.cartItems.findIndex((cartItem) => cartItem._id === action.payload._id)

            if (state.cartItems[cartIndex].cartQuantity > 1) {
                state.cartItems[cartIndex].cartQuantity -= 1
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        incrementCartItems(state, action) {
            const cartIndex = state.cartItems.findIndex((cartItem) => cartItem._id === action.payload._id)

            if (cartIndex >= 0) {
                state.cartItems[cartIndex].cartQuantity += 1
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        clearCart(state, action) {
            state.cartItems = []

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        getTotal(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {

                    const itemtotal = cartItem.price * cartItem.cartQuantity;
                    cartTotal.total += itemtotal;
                    cartTotal.quantity += cartItem.cartQuantity;

                    return cartTotal

                }, {
                total: 0,
                quantity: 0
            })
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        }
    },

});

export const { addCartItems, getTotal, setCartFromStorage, removeCartItems, decCartItems, incrementCartItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

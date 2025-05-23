import { clear } from "@testing-library/user-event/dist/clear";
import React, { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    clearCart: () => {},
});

const CartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

    const updatedItems = [...state.items];

    if (existingItemIndex > -1) {
        updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + +1,
        };
    } else {
        updatedItems.push({ ...action.item, quantity: 1 });    }

    return {
        items: updatedItems,
        totalAmount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
    };
}

if (action.type === "CLEAR_CART") {
    return {
        items: [],
        totalAmount: 0,
    };
}

return state
}

export const CartProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(CartReducer, {
        items: [],
        totalAmount: 0,
    });

    const addItemHandler = (item) => {
        dispatchCartAction({ type: "ADD_ITEM", item });
    };

    const clearCartHandler = () => {
        dispatchCartAction({ type: "CLEAR_CART" });
    };

    return (
        <CartContext.Provider 
        value={{
            items: cartState.items,
            totalAmount: cartState.totalAmount,
            addItem: addItemHandler,
            clearCart: clearCartHandler,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;

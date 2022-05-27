import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    cartDropdownDisplayed: false,
    setCartDropdownDisplayed: () => {}
})

export const CartDropdownProvider = ({children}) => {
    const [cartDropdownDisplayed, setCartDropdownDisplayed] = useState(false);
    const value = {cartDropdownDisplayed, setCartDropdownDisplayed};

    return(
        <CartDropdownContext.Provider value={value} >{children}</CartDropdownContext.Provider>
    )
}


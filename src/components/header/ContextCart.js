import { createContext, useState } from "react";

export const controllerShowCart = createContext();


const ContextCart = ({children}) => {
    const [cartShow, setCartShow] = useState("none")

    return(
        <controllerShowCart.Provider value={{cartShow, setCartShow}}>
            {children}
        </controllerShowCart.Provider>
    )
}

export default ContextCart;
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loginType, setLoginType] = useState(null);
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
    const existingProduct = cartItems.find(
      (item) => item._id === product._id
    );
  
    console.log("Existing Product ID:", existingProduct ? existingProduct._id : null);
    console.log("New Product ID:", product._id);
  
    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  

	const logout = () => {
		setIsLoggedIn(false);
		setLoginType(null);
	};

	return (
		<AppContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				loginType,
				setLoginType,
				logout,
				cartItems,
				addToCart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

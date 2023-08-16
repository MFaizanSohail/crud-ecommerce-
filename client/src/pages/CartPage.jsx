import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import { useAppContext } from "../context/AppContext";

function CartPage() {
  const { cartItems } = useAppContext();

  return (
    <>
      <Navbar />
      <Cart cartProducts={cartItems} />
      <Footer />
    </>
  );
}

export default CartPage;

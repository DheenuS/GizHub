import { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./Context/CartContext";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import ViewCart from "./pages/ViewCart";
import Products from "./pages/Products";

function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];  
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); 
  }, [cart]);

  return (
    <>
      <section className="bg-[#1f1f23] h-auto">
        <CartContext.Provider value={{cart, setCart}}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Products/>}></Route>
              <Route path="/cart" element={<ViewCart/>}></Route>
            </Routes>
            <Footer/> 
          </BrowserRouter>
        </CartContext.Provider>
      </section>
    </>
  );
}

export default App;

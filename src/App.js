import "./App.css";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from './components/Cart'
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../src/contexts/CartContext";
import { Toaster } from 'react-hot-toast';
import Checkout from './components/Checkout'


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <div className="grid grid-cols-1 grid-auto lg:grid-cols-12">
            <div className="bg-white lg:col-span-12 ">
              <Navbar />
              <Toaster />
            </div>
            <div className="bg-gray-100 lg:col-span-10 lg:shadow-red-600 lg:z-10">
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                  path="/category/:categoryId"
                  element={<ItemListContainer />}
                />
                <Route
                  path="/products/:productId"
                  element={<ItemDetailContainer />}
                />
                <Route 
                  path="/cart"
                  element={<Cart />}
                /> 
                <Route 
                  path="/checkout"
                  element={<Checkout />}
                /> 
              </Routes>
            

            </div>
            <div className="bg-gray-200 lg:col-span-2">
              <Sidebar />
            </div>
            <div className="bg-gray-200 lg:col-span-12">
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <div className="grid grid-auto grid-cols-1 lg:grid-cols-12">
          <div className="bg-white lg:col-span-12 ">
            <Navbar />
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
            </Routes>
          </div>

          <div className="bg-gray-200 lg:col-span-2">
            <Sidebar />
          </div>
          <div className=" bg-gray-200 lg:col-span-12">
            <Footer />
          </div>
        </div>
    </div>
    </BrowserRouter>

  );
}

export default App;

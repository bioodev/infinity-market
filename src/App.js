import "./App.css";
import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12">

        <div className="bg-gray-100 lg:col-span-12 ">
          <Navbar />
        </div>
        <div className="bg-gray-300 lg:col-span-8">
          <ItemListContainer greeting={"Esta es mi primera version"}/>
        </div>
        <div className="bg-gray-400 lg:col-span-4">
          <Sidebar />
        </div>
        <div className=" bg-gray-200 lg:col-span-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

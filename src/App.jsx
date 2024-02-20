//import Home from "./home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import {Outlet} from "react-router-dom"


function App() {
  return (
    <>
      <Navbar/> 
      <div className="min-vh-100">
      <Outlet/>
      </div> 
      <Footer />
    </>
  );
}

export default App;

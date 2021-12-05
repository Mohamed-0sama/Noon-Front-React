// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router";
// import Footer from './components/Footer/Footer';
import TestRouting from "./components/TestRouting";
// import FooterThree from "./components/Footer/Footer components/FooterThree";
import RoutingDiv from "./components/RoutingDiv";
import Home from "./pages/Home";
import { React } from "react";
import { useLocation } from 'react-router-dom';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Home2 from './components/Home2';


function App() {
  const query = new URLSearchParams(useLocation().search) // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
console.log(query.get("category"));
  return (
    <div className="App"> 
      
                  <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/Home" element={<Home />}>                     
                      <Route path="/Home/test" element={<RoutingDiv />} />
                      <Route path="/Home/test2" element={<TestRouting />} />
                      <Route path="/Home/products" element={<Products />} />
                      <Route path="/Home/navbar" element={<Navbar />} />
                      <Route path="/Home/Home2" element={<Home2 />} />                     
                    </Route>
                    <Route path="/header" element={<Header />} />
                    <Route path="/footer" element={<Footer />} />
                  </Routes>               
    </div>
  );
}

export default App;

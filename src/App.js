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
import User from './components/User/User';
import Address from './components/User/User components/Address';
import Profile from './components/User/User components/Profile';
import Order from './components/User/User components/Order';
// import NotFound from './components/NotFound/NotFound';


function App() {
  const query = new URLSearchParams(useLocation().search) // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
console.log(query.get("category"));
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Home" element={<Home />}>
          <Route path="/Home/category/:selectedCat" element={<RoutingDiv />} />
          <Route path="/Home/search" element={<RoutingDiv />} />
          <Route path="/Home/category/:selectedCat" element={<RoutingDiv />} />
      
        </Route>
        <Route path="/User" element={<User />}>
          <Route path="/User/address" element={<Address />} />
          <Route path="/User/profile" element={<Profile />} />
          <Route path="/User/order" element={<Order />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;

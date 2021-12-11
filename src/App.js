// import logo from './logo.svg';
import "./App.css";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router";
// import Footer from './components/Footer/Footer';

// import FooterThree from "./components/Footer/Footer components/FooterThree";
// import RoutingDiv from "./components/RoutingDiv";
import Home from "./pages/Home";
import { React } from "react";
import { useLocation } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Home2 from "./components/Home2";
import NotFound from "./components/NotFound/NotFound";
import User from "./components/User/User";
import Address from "./components/User/User components/Address";
import Profile from "./components/User/User components/Profile";
import Order from "./components/User/User components/Order";

function App() {
  const query = new URLSearchParams(useLocation().search); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  console.log(query.get("category"));
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path="/Home" element={<Navigate replace to="/" />} />
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Products />} /> */}
          {/* <Route path="/Home/products" element={<Products />} /> */}
          {/* <Route path="/category/:selectedCat" element={<RoutingDiv />} /> */}
          {/* <Route path="/search" element={<RoutingDiv />} /> */}
          {/* <Route path="/category/:selectedCat" element={<RoutingDiv />} /> */}
          <Route path="/Cart" element={<Navbar />} />
          <Route path="/Home2" element={<Home2 />} />
        </Route>
        <Route path="/User" element={<Navigate replace to="/User/order" />} />
        <Route path="User" element={<User />}>
          {/* <Route index element={<Order />} /> */}
          <Route path="/User/order" element={<Order />} />
          <Route path="/User/address" element={<Address />} />
          <Route path="/User/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import React  from "react";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
};

export default Home;

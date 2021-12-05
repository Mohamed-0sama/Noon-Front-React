import React, { useState } from "react";
import Header from "./../components/Header/Header";
// import Footer from './../components/Footer/Footer';
import TestRouting from "./../components/TestRouting";
import FooterThree from "../components/Footer/Footer components/FooterThree";
import { Outlet } from "react-router";

export const myMainCatContext = React.createContext();
export const setMyMainCatContext = React.createContext();
export const mySubCatContext = React.createContext();
export const setMySubCatContext = React.createContext();
export const myBrandContext = React.createContext();
export const setMyBrandContext = React.createContext();
const Home = () => {
  const [myMainCat, setMyMainCat] = useState("");
  const [mySubCat, setMySubCat] = useState("");
const [myBrand, setMyBrand] = useState("");
  return (
    <div>
      <myMainCatContext.Provider value={myMainCat}>
        <setMyMainCatContext.Provider value={setMyMainCat}>
          <mySubCatContext.Provider value={mySubCat}>
            <setMySubCatContext.Provider value={setMySubCat}>
              <myBrandContext.Provider value={myBrand}>
                <setMyBrandContext.Provider value={setMyBrand}>
                  <Header />
                </setMyBrandContext.Provider>
              </myBrandContext.Provider>
            </setMySubCatContext.Provider>
          </mySubCatContext.Provider>
        </setMyMainCatContext.Provider>
      </myMainCatContext.Provider>

      <TestRouting />
      <myMainCatContext.Provider value={myMainCat}>
        <mySubCatContext.Provider value={mySubCat}>
          <myBrandContext.Provider value={myBrand}>
            <Outlet />
          </myBrandContext.Provider>
        </mySubCatContext.Provider>
      </myMainCatContext.Provider>
      <FooterThree />
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
// import TestRouting from "./../components/TestRouting";
// import FooterThree from "../components/Footer/Footer components/FooterThree";
import { Outlet } from "react-router";

export const myMainCatContext = React.createContext();
export const setMyMainCatContext = React.createContext();
export const mySubCatContext = React.createContext();
export const setMySubCatContext = React.createContext();
export const myBrandContext = React.createContext();
export const setMyBrandContext = React.createContext();
export const mySearchContext = React.createContext();
export const mySetSearchContext = React.createContext();
export const myQueryContext = React.createContext();
export const SetMyQueryContext = React.createContext();

const Home = () => {
  const [myMainCat, setMyMainCat] = useState("");
  const [mySubCat, setMySubCat] = useState("");
  const [myBrand, setMyBrand] = useState("");
  const [search, setSearch] = useState("");
  const [myQuery, setMyQuery] = useState("");
  return (
    <div>
      <myMainCatContext.Provider value={myMainCat}>
        <setMyMainCatContext.Provider value={setMyMainCat}>
          <mySubCatContext.Provider value={mySubCat}>
            <setMySubCatContext.Provider value={setMySubCat}>
              <myBrandContext.Provider value={myBrand}>
                <setMyBrandContext.Provider value={setMyBrand}>
                  <mySearchContext.Provider value={search}>
                    <mySetSearchContext.Provider value={setSearch}>
                      <myQueryContext.Provider value={myQuery}>
                        <SetMyQueryContext.Provider value={setMyQuery}>
                          <Header />
                          <Outlet />
                          <Footer />
                        </SetMyQueryContext.Provider>
                      </myQueryContext.Provider>
                    </mySetSearchContext.Provider>
                  </mySearchContext.Provider>
                </setMyBrandContext.Provider>
              </myBrandContext.Provider>
            </setMySubCatContext.Provider>
          </mySubCatContext.Provider>
        </setMyMainCatContext.Provider>
      </myMainCatContext.Provider>



      {/* <myMainCatContext.Provider value={myMainCat}>
        <mySubCatContext.Provider value={mySubCat}>
          <myBrandContext.Provider value={myBrand}>
            <mySearchContext.Provider value={search}>
              <myQueryContext.Provider value={myQuery}>
                
              </myQueryContext.Provider>
            </mySearchContext.Provider>
          </myBrandContext.Provider>
        </mySubCatContext.Provider>
      </myMainCatContext.Provider> */}

      {/* <myMainCatContext.Provider value={myMainCat}>
        <setMyMainCatContext.Provider value={setMyMainCat}>
          <mySubCatContext.Provider value={mySubCat}>
            <setMySubCatContext.Provider value={setMySubCat}>
              <myBrandContext.Provider value={myBrand}>
                <setMyBrandContext.Provider value={setMyBrand}>
                  <Footer />
                </setMyBrandContext.Provider>
              </myBrandContext.Provider>
            </setMySubCatContext.Provider>
          </mySubCatContext.Provider>
        </setMyMainCatContext.Provider>
      </myMainCatContext.Provider> */}
    </div>
  );
};

export default Home;

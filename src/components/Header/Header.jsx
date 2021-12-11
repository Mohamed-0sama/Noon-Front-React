import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RightSquareOutlined } from "@ant-design/icons";
import "./header.scss";
import axios from "axios";
import HeaderOne from "./Header components/HeaderOne.jsx";
import HeaderFloatingLeft from "./Header components/HeaderFloatingLeft";
import HeaderFloatingShowCategories from "./Header components/HeaderFloatingShowCategories";

export const xContext = React.createContext();
export const mouseOverContext = React.createContext();
export const mouseOutContext = React.createContext();
const Header = () => {
  const [x, setX] = useState(1);
  // const imagesUrl = "https://noon-ecommerce.herokuapp.com/images/"
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then(function (response) {
        setCategories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // console
    return () => {
      // cleanup
    };
  }, []);
  const elemRef_show__categories = useRef();
  const elemRef_second__navbar = useRef();
  // const elemRef_subCat = useRef();
  const mouseOver = () => {
    elemRef_show__categories.current.style.display = "flex";
  };
  const mouseOut = () => {
    elemRef_show__categories.current.style.display = "none";
  };
  const sideController = () => {
    if (elemRef_second__navbar.current.style.marginLeft === "-160px") {
      elemRef_second__navbar.current.style.marginLeft = "0px";
    } else {
      elemRef_second__navbar.current.style.marginLeft = "-160px";
    }
  };
  
  const CatChanged = (catID) => {
    setX(catID);
    elemRef_show__categories.current.style.display = "flex";
  };
  return (
    <div className="BigHeader">
      <header className="mainHeader">
        <HeaderOne />
        <RightSquareOutlined
          className="d-block d-md-none aside__controller"
          onClick={sideController}
        />
        <div ref={elemRef_second__navbar} className="second__navbar d-flex">
          <HeaderFloatingLeft categories={categories} />
          <ul className="nav">
            {categories.map((cat) => {
              return (
                <>
                  <li
                    className="nav-item"
                    onMouseOver={() => CatChanged(cat.id)}
                    onMouseOut={mouseOut}
                  >
                    <Link
                      className="nav-link"
                      to={`/Home/category/${cat.mainCat}`}
                    >
                      {cat.mainCat}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
            <xContext.Provider value={x}>
              <mouseOverContext.Provider value={mouseOver}>
                <mouseOutContext.Provider value={mouseOut}>                 
                    <HeaderFloatingShowCategories categories={categories} elemRef_show__categories={elemRef_show__categories}/>
                </mouseOutContext.Provider>
              </mouseOverContext.Provider>
            </xContext.Provider>
        </div>
      </header>
    </div>
  );
};

export default Header;

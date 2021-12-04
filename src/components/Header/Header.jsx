import React, { useRef, useState, useEffect } from "react";

import { RightSquareOutlined } from "@ant-design/icons";
import "./header.scss";
import axios from "axios";
import HeaderOne from "./Header components/HeaderOne.jsx";
import HeaderFloatingLeft from "./Header components/HeaderFloatingLeft";
import HeaderFloatingShowCategories from "./Header components/HeaderFloatingShowCategories";

export const categoriesContext = React.createContext();
export const subCatChangedContext = React.createContext();
export const xContext = React.createContext();
export const mouseOverContext = React.createContext();
export const mouseOutContext = React.createContext();
export const elemRef_show__categoriesContext = React.createContext();
const Header = () => {
  const [x, setX] = useState(1);
  // const imagesUrl = "https://noon-ecommerce.herokuapp.com/images/"
  // const [categories, setCategories] = useState([
  //   {
  //     id: "1",
  //     mainCat: "Electronics",
  //     subCat: ["TV", "computer", "mobiles", "tablet"],
  //     brands: ["TV", "computer", "mobiles", "tablet"],
  //     brandsImg: [
  //       "images/floating nav/drop-brand-01.png",
  //       "images/floating nav/drop-brand-02.png",
  //       "images/floating nav/drop-brand-03.png",
  //       "images/floating nav/drop-brand-04.png",
  //       "images/floating nav/drop-brand-05.png",
  //       "images/floating nav/drop-brand-06.png",
  //       "images/floating nav/drop-brand-08.png",
  //       "images/floating nav/drop-brand-09.png",
  //       "images/floating nav/drop-brand-10.png",
  //     ],
  //     catImg: [
  //       "images/floating nav/en_drop-01.png",
  //       "images/floating nav/en_drop-02.png",
  //     ],
  //     link: "https://ant.design/components/dropdown",
  //   },
  //   {
  //     id: "2",
  //     mainCat: "clothes",
  //     subCat: ["TV2", "computer2", "mobiles2", "tablet2"],
  //     brands: ["TV3", "computer3", "mobiles3", "tablet3"],
  //     brandsImg: [
  //       "images/men/drop-brand-01.png",
  //       "images/men/drop-brand-02.png",
  //       "images/men/drop-brand-03.png",
  //       "images/men/drop-brand-04.png",
  //       "images/men/drop-brand-05.png",
  //       "images/men/drop-brand-06.png",
  //       "images/men/drop-brand-08.png",
  //       "images/men/drop-brand-09.png",
  //       "images/men/drop-brand-11.png",
  //     ],
  //     catImg: ["images/men/en_drop-01.png", "images/men/en_drop-02.png"],

  //     link: "https://ant.design/components/dropdown",
  //   },
  //   {
  //     id: "3",
  //     mainCat: "Toys",
  //     subCat: ["boy", "girl", "small toys", "big toys", "adult toys"],
  //     brands: ["toys", "toys", "toys", "toys"],
  //     brandsImg: [
  //       "images/men/drop-brand-01.png",
  //       "images/men/drop-brand-02.png",
  //       "images/men/drop-brand-03.png",
  //       "images/men/drop-brand-04.png",
  //       "images/men/drop-brand-05.png",
  //       "images/men/drop-brand-06.png",
  //       "images/men/drop-brand-08.png",
  //       "images/men/drop-brand-09.png",
  //       "images/men/drop-brand-11.png",
  //     ],
  //     catImg: ["images/men/en_drop-01.png", "images/men/en_drop-02.png"],
  //     link: "https://ant.design/components/dropdown",
  //   },
  // ]);
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/categories") // why only accepets json server
  .then(function (response) {
    // handle success
    setCategories(response.data)
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  // console
    return () => {
      // cleanup
    }
  }, [])
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
  const subCatChanged = (catID) => {
    setX(catID);
  };
  const CatChanged = (catID) => {
    setX(catID);
    elemRef_show__categories.current.style.display = "flex";
  };
  return (
    <div>
      <header>
        <HeaderOne />

        {/* <i className="bi bi-filter-square-fill d-block d-md-none aside__controller"></i> */}
        <RightSquareOutlined
          className="d-block d-md-none aside__controller"
          onClick={sideController}
        />
        <div ref={elemRef_second__navbar} className="second__navbar d-flex">
          <categoriesContext.Provider value={categories}>
            <subCatChangedContext.Provider value={subCatChanged}>
              <xContext.Provider value={x}>
                <HeaderFloatingLeft />
              </xContext.Provider>
            </subCatChangedContext.Provider>
          </categoriesContext.Provider>
          <ul className="nav">
            {categories.map((cat) => {
              return (
                <>
                  <li
                    className="nav-item"                   
                    onMouseOver={() => CatChanged(cat.id)}
                    onMouseOut={mouseOut}
                  >
                    <a className="nav-link" href={cat.link}>
                      {cat.mainCat}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
          <categoriesContext.Provider value={categories}>
            <subCatChangedContext.Provider value={subCatChanged}>
              <xContext.Provider value={x}>
                <mouseOverContext.Provider value={mouseOver}>
                  <mouseOutContext.Provider value={mouseOut}>
                    <elemRef_show__categoriesContext.Provider
                      value={elemRef_show__categories}
                    >
                      <HeaderFloatingShowCategories />
                    </elemRef_show__categoriesContext.Provider>
                  </mouseOutContext.Provider>
                </mouseOverContext.Provider>
              </xContext.Provider>
            </subCatChangedContext.Provider>
          </categoriesContext.Provider>
        </div>
      </header>
    </div>
  );
};

export default Header;

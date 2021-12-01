import React, { useRef, useState } from "react";

import { RightSquareOutlined } from "@ant-design/icons";
import "./header.scss";

const Header = () => {
  const [categories, setCategories] = useState([
    {
      id: "1",
      mainCat: "Electronics",
      subCat: ["TV", "computer", "mobiles", "tablet"],
      brands: ["TV", "computer", "mobiles", "tablet"],
      brandsImg: [
        "images/floating nav/drop-brand-01.png",
        "images/floating nav/drop-brand-02.png",
        "images/floating nav/drop-brand-03.png",
        "images/floating nav/drop-brand-04.png",
        "images/floating nav/drop-brand-05.png",
        "images/floating nav/drop-brand-06.png",
        "images/floating nav/drop-brand-08.png",
        "images/floating nav/drop-brand-09.png",
        "images/floating nav/drop-brand-10.png",
      ],
      catImg: [
        "images/floating nav/en_drop-01.png",
        "images/floating nav/en_drop-02.png",
      ],
      link: "https://ant.design/components/dropdown",
    },
    {
      id: "2",
      mainCat: "clothes",
      subCat: ["TV2", "computer2", "mobiles2", "tablet2"],
      brands: ["TV3", "computer3", "mobiles3", "tablet3"],
      brandsImg: [
        "images/men/drop-brand-01.png",
        "images/men/drop-brand-02.png",
        "images/men/drop-brand-03.png",
        "images/men/drop-brand-04.png",
        "images/men/drop-brand-05.png",
        "images/men/drop-brand-06.png",
        "images/men/drop-brand-08.png",
        "images/men/drop-brand-09.png",
        "images/men/drop-brand-11.png",
      ],
      catImg: ["images/men/en_drop-01.png", "images/men/en_drop-02.png"],

      link: "https://ant.design/components/dropdown",
    },
    {
      id: "3",
      mainCat: "Toys",
      subCat: ["boy", "girl", "small toys", "big toys", "adult toys"],
      brands: ["toys", "toys", "toys", "toys"],
      brandsImg: [
        "images/men/drop-brand-01.png",
        "images/men/drop-brand-02.png",
        "images/men/drop-brand-03.png",
        "images/men/drop-brand-04.png",
        "images/men/drop-brand-05.png",
        "images/men/drop-brand-06.png",
        "images/men/drop-brand-08.png",
        "images/men/drop-brand-09.png",
        "images/men/drop-brand-11.png",
      ],
      catImg: ["images/men/en_drop-01.png", "images/men/en_drop-02.png"],
      link: "https://ant.design/components/dropdown",
    },
  ]);
  // const [showCategories, setShowCategories] = useState([
  //   {
  //     brandsImg: [
  //       "images/men/drop-brand-01.png",
  //       "images/men/drop-brand-02.png",
  //       "images/men/drop-brand-03.png",
  //       "images/men/drop-brand-04.png",
  //       "images/men/drop-brand-05.png",
  //       "images/men/drop-brand-06.png",
  //       "images/men/drop-brand-08.png",
  //       "images/men/drop-brand-09.png",
  //       "images/men/drop-brand-011.png",
  //     ],
  //     catImg: [],
  //   },
  // ]);
  const elemRef_show__categories = useRef();
  const elemRef_second__navbar = useRef();
  const elemRef_subCat = useRef();
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
  const [x, setX] = useState(1);
  const subCatChanged = (catID) => {
    setX(catID);
    // console.log("x = ", x)
    // console.log("id = ",catID);
  };
  const CatChanged = (catID) => {
    setX(catID);
    elemRef_show__categories.current.style.display = "flex";
  };
  return (
    <div>
      <header>
        <nav
          className="
      navbar navbar-expand-sm navbar-light
      position-sm-static
      p-1
      first__navbar
    "
        >
          <div className="container-fluid">
            <a
              className="navbar-brand d-block d-sm-none"
              href="https://ant.design/components/dropdown"
            >
              <img src="images/header/noon-black-en.svg" alt="noon" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://ant.design/components/dropdown"
                  >
                    <img src="images/header/noon-black-en.svg" alt="noon" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link d-flex"
                    href="https://ant.design/components/dropdown"
                  >
                    <div className="egyptFlag mx-2 d-flex d-none d-md-block">
                      <img src="images/header/eg.svg" alt="" />
                    </div>
                    <div>
                      <div className="Deliver">
                        <span>Deliver to</span>
                        <img
                          src="images/header/dropdownArrow.svg"
                          alt="dropdownArrow"
                        />
                      </div>
                      <span>Cairo</span>
                    </div>
                  </a>
                </li>

                <li className="header__li__search">
                  <input
                    className="header__search me-2"
                    type="search"
                    aria-label="Search"
                    placeholder="What are you looking for?"
                  />
                </li>
                <li className="nav-item language">
                  <a
                    className="nav-link"
                    href="https://ant.design/components/dropdown"
                  >
                    <span>العربية</span>
                  </a>
                </li>
                <li className="nav-item sign-in">
                  <a
                    className="nav-link"
                    href="https://ant.design/components/dropdown"
                  >
                    <span>Sign In</span>
                    <img
                      src="images/header/user_thin.svg"
                      alt="user"
                      style={{ width: "17px" }}
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://ant.design/components/dropdown"
                  >
                    <span>Cart</span>
                    <img src="images/header/cart.svg" alt="cart" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <i className="bi bi-filter-square-fill d-block d-md-none aside__controller"></i> */}
        <RightSquareOutlined
          className="d-block d-md-none aside__controller"
          onClick={sideController}
        />
        <div ref={elemRef_second__navbar} className="second__navbar d-flex">
          <div className="dropdown d-none d-lg-block">
            <a
              className="btn dropdown-toggle a_cat"
              id="dropdownMenuLink"
              href="https://ant.design/components/dropdown"
            >
              ALL CATEGORIES
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {categories.map((cat) => {
                return (
                  <>
                    <li
                      className="nav-item"
                      onMouseOver={() => subCatChanged(cat.id)}
                    >
                      <a className="nav-link" href={cat.link}>
                        {cat.mainCat}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
            <div className="dropdownDiv">
              <div className="dropdownDivOne"></div>
              <div className="dropdownDivTwo">
                <h4>{categories[x - 1].mainCat}</h4>
                <hr className="m-2" />
                <div className="d-flex">
                  <div className="w-50">
                    <h6>Most Popular</h6>
                    {/* All Catogories => subCategories */}
                    <ul className="nav flex-column">
                      {categories.map((cat) => {
                        // console.log(cat.id);
                        return (
                          <>
                            {cat.id === x &&
                              cat.subCat.map((subCategory) => {
                                return (
                                  <>
                                    <li
                                      className="nav-item"
                                      ref={elemRef_subCat}
                                    >
                                      <a className="nav-link" href={cat.link}>
                                        {subCategory}
                                      </a>
                                    </li>
                                  </>
                                );
                              })}
                          </>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="">
                    <h6>Top Brands</h6>
                    <ul className="nav flex-column">
                      {categories.map((cat) => {
                        // console.log(cat.id);
                        return (
                          <>
                            {cat.id === x &&
                              cat.brands.map((subCategory) => {
                                return (
                                  <>
                                    <li
                                      className="nav-item"
                                      ref={elemRef_subCat}
                                    >
                                      <a className="nav-link" href={cat.link}>
                                        {subCategory}
                                      </a>
                                    </li>
                                  </>
                                );
                              })}
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* we stopped here */}
          <ul className="nav">
            {categories.map((cat) => {
              return (
                <>
                  <li
                    className="nav-item"
                    // onMouseOver={mouseOver}
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
          <div
            ref={elemRef_show__categories}
            className="show__categories container-fluid "
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          >
            <div className="row" style={{ flex: 1 }}>
              <div className="col-2">
                <h6>CATEGORIES</h6>
                <ul className="nav flex-column">
                {categories.map((cat) => {
                      // console.log(cat.id);
                      return (
                        <>
                          {cat.id === x &&
                            cat.subCat.map((subCat) => {
                              console.log(subCat);
                              return (
                                <>
                                  <li className="nav-item" ref={elemRef_subCat}>
                                    <a className="nav-link" href={cat.link}>
                                      {subCat}
                                    </a>
                                  </li>
                                </>
                              );
                            })}
                        </>
                      );
                    })}
                </ul>
              </div>
              <div className="col-4">
                <h6>TOP BRANDS</h6>
                <div>
                  <ul className="photos">
                    {/* showCategories brand Images */}
                    {categories.map((cat) => {
                      // console.log(cat.id);
                      return (
                        <>
                          {cat.id === x &&
                            cat.brandsImg.map((img) => {
                              console.log(img);
                              return (
                                <>
                                  <li className="nav-item" ref={elemRef_subCat}>
                                    <a className="nav-link" href={cat.link}>
                                      <img
                                        src={img}
                                        className="img-fluid"
                                        alt="brand img"
                                      />
                                    </a>
                                  </li>
                                </>
                              );
                            })}
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="last2__photos h-100">
                  {/* <div> */}
                    {/* <ul> */}
                      {/* showCategories brand Images */}
                      {categories.map((cat) => {
                        // console.log(cat.id);
                        return (
                          <>
                            {cat.id === x &&
                              cat.catImg.map((img) => {
                                console.log(img);
                                return (
                                  <>
                                    {/* <li
                                      className="nav-item"
                                      
                                    > */}
                                      <div ref={elemRef_subCat}>
                                        <a className="nav-link" href={cat.link}>
                                          <img
                                            src={img}
                                            className="img-fluid h-100"
                                            alt="cat img"
                                          />
                                        </a>
                                      </div>
                                    {/* </li> */}
                                  </>
                                );
                              })}
                          </>
                        );
                      })}
                    {/* </ul> */}
                  {/* </div> */}
                  {/* <div>
                    <a href="https://ant.design/components/dropdown">
                      <img
                        src="../../../assets/header/nav (from DB)/en_drop-01.png"
                        className="img-fluid h-100"
                        alt=""
                      />
                    </a>
                  </div> */}
                  {/* <div>
                    <a href="https://ant.design/components/dropdown">
                      <img
                        src="../../../assets/header/nav (from DB)/en_drop-02.png"
                        className="img-fluid h-100"
                        alt=""
                      />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

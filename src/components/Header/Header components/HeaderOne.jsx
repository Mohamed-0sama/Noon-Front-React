// import React from 'react'
import React, { useState } from "react";
// import { Input, AutoComplete } from 'antd';
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { mySearchContext, mySetSearchContext } from './../../../pages/Home';
import { useContext } from 'react';

const HeaderOne = () => {
  let navigate = useNavigate()
  // const [search, setsearch] = useState("");
  const search = useContext(mySearchContext)
  const setSearch = useContext(mySetSearchContext)
  const [searchOption, setSearchOption] = useState([]);
 
  const imagesUrl = "https://noon-ecommerce.herokuapp.com/images/";
  useEffect(() => {
    axios
      // .get("https://jsonplaceholder.typicode.com/posts?userId=" + search)
      // http://localhost:5000/api/products?category=Mobiles
      .get("http://localhost:5000/api/categories?subCat=" + search)
      .then((post) => {
        console.log(post);
        console.log(search);
        // console.log(post.data)
        setSearchOption(post.data);
        // setposts(post.data.slice(0,4));
      });
    // console.log(posts);
  }, [search]);
  const handleSearch = () => {};
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      navigate(`/Home/category/${event.target.value}`)
    // `/Home/category/${cat.mainCat}`
    }
  };
  return (
    <>
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
            <img
              src={imagesUrl + "noon-black-en.svg"}
              // src="images/header/noon-black-en.svg"
              alt="noon"
            />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* id="navbarSupportedContent" */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://ant.design/components/dropdown"
                >
                  <img src={imagesUrl + "noon-black-en.svg"} alt="noon" />
                  {/* <img src="images/header/noon-black-en.svg" alt="noon" /> */}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex"
                  href="https://ant.design/components/dropdown"
                >
                  <div className="egyptFlag mx-2 d-flex d-none d-md-block">
                    <img
                      src={imagesUrl + "eg.svg"}
                      // src="images/header/eg.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="Deliver">
                      <span>Deliver to</span>
                      <img
                        src={imagesUrl + "dropdownArrow.svg"}
                        // src="images/header/dropdownArrow.svg"
                        alt="dropdownArrow"
                      />
                    </div>
                    <span>Cairo</span>
                  </div>
                </a>
              </li>

              <li className="header__li__search">
                {/* <input
                    className="header__search me-2"
                    type="search"
                    aria-label="Search"
                    placeholder="What are you looking for?"
                  /> */}
                {/* <label for="exampleDataList" class="form-label">Datalist example</label> */}
                <input
                  class="form-control"
                  list="datalistOptions"
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                  placeholder="Type to search..."
                  // onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  onKeyDown={handleKeyDown}
                />
                <datalist id="datalistOptions">
                  {searchOption.map((option) => {
                    return (
                      <>
                        <option
                          value={option.mainCat}
                          key={option.id}
                          // onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                          onKeyDown={handleKeyDown}
                        />
                        {/* {console.log(option.mainCat)} */}
                      </>
                    );
                  })}
                </datalist>
                {/* <Complete /> */}
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
                <Link className="nav-link" to="/Home/TestRouting">
                  <span>Sign In</span>
                  <img
                    src={imagesUrl + "user_thin.svg"}
                    // src="images/header/user_thin.svg"
                    alt="user"
                    style={{ width: "17px" }}
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Home/test">
                  <span>Cart</span>
                  <img
                    src={imagesUrl + "cart.svg"}
                    //  src="images/header/cart.svg"
                    alt="cart"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderOne;

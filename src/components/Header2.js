import React, { useRef, useState } from "react";
import "./Header/header.scss"
const Header2 = () => {
  const [categories, setCategories] = useState([
    { name: "Electronics", link: "https://ant.design/components/dropdown" },
    { name: "Men", link: "https://getbootstrap.com/" },
    { name: "Women", link: "https://ant.design/components/dropdown" },
    { name: "Home", link: "https://ant.design/components/dropdown" },
    { name: "Electronics", link: "https://ant.design/components/dropdown" },
  ]);
  const elemRef = useRef();

  const mouseOver = () => {
    console.log(elemRef);
    elemRef.current.style.display = "flex";
  };
  const mouseOut = () => {
    elemRef.current.style.display = "none";
  };
  return (
    <div>
    
      <header>
        <nav class="navbar navbar-expand-sm navbar-light position-sm-static p-1 first__navbar">
          <div class="container-fluid">
            <a
              class="navbar-brand d-block d-sm-none"
              href="https://ant.design/components/dropdown"
            >
              <img src="./images/noon-black-en.svg" alt="noon" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto ">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="https://ant.design/components/dropdown"
                  >
                    <img src="../images/header/noon-black-en.svg" alt="noon" />
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link d-flex"
                    href="https://ant.design/components/dropdown"
                  >
                    <div class="egyptFlag mx-2 d-flex d-none d-md-block">
                      <img src="./images/eg.svg" alt="" />
                    </div>
                    <div>
                      <div class="Deliver">
                        <span>Deliver to</span>
                        <img src="./images/dropdownArrow.svg" alt="" />
                      </div>
                      <span>Cairo</span>
                    </div>
                  </a>
                </li>

                <li class="header__li__search">
                  <input
                    class="header__search me-2 	"
                    type="search"
                    aria-label="Search"
                    placeholder="What are you looking for?"
                  />
                </li>
                <li class="nav-item language">
                  <a
                    class="nav-link"
                    href="https://ant.design/components/dropdown"
                  >
                    <span>العربية</span>
                  </a>
                </li>
                <li class="nav-item sign-in">
                  <a
                    class="nav-link"
                    href="https://ant.design/components/dropdown"
                  >
                    <span>Sign In</span>
                    <img
                      src="./images/user_thin.svg"
                      alt="user"
                      style={{ width: "17px" }}
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://ant.design/components/dropdown"
                  >
                    <span>Cart</span>
                    <img src="./images/cart.svg" alt="cart" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="second__navbar d-flex">
          <div class="dropdown d-none d-lg-block">
            <a
              class="btn dropdown-toggle"
              href="https://getbootstrap.com/"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ALL CATEGORIES
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item" href="https://getbootstrap.com/">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="https://getbootstrap.com/">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="https://getbootstrap.com/">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <ul class="nav">
            {categories.map((cat) => {
              return (
                <>
                  <li
                    class="nav-item"
                    onMouseOver={mouseOver}
                    onMouseOut={mouseOut}
                  >
                    <a class="nav-link" href={cat.link}>
                      {cat.name}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
          <div
            ref={elemRef}
            class="show__categories container-fluid "
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          >
            <div class="row" style={{ flex: 1 }}>
              <div class="col-2">
                <h6>CATEGORIES</h6>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link" href="https://getbootstrap.com/">
                      Link
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://getbootstrap.com/">
                      Link
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://getbootstrap.com/">
                      Link
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://getbootstrap.com/">
                      Link
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-4">
                <h6>TOP BRANDS</h6>
                <div class="photos">
                  <a href="https://getbootstrap.com/">
                    <img
                      src="images/floating nav/drop-brand-02.png"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                  <a href="https://getbootstrap.com/">
                    <img
                      src="images/floating nav/drop-brand-03.png"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                  <a href="https://getbootstrap.com/">
                    <img
                      src="images/floating nav/drop-brand-04.png"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                  <a href="https://getbootstrap.com/">
                    <img
                      src="images/floating nav/drop-brand-05.png"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                  <a href="https://getbootstrap.com/">
                    <img
                      src="images/floating nav/drop-brand-06.png"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                  <a href="https://getbootstrap.com/">
                    <img
                      src="images/floating nav/drop-brand-08.png"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                  <a href="https://getbootstrap.com/">
                    <img
                      src="images/floating nav/drop-brand-01.png"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                  <a href="https://getbootstrap.com/">
                    <img
                      src="images/floating nav/drop-brand-09.png"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                  <a href="https://getbootstrap.com/">
                    <img
                      src="images/floating nav/drop-brand-10.png"
                      class="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="col-6">
                <div class="last2__photos h-100">
                  <div>
                    <a href="https://getbootstrap.com/">
                      <img
                        src="images/floating nav/en_drop-01.png"
                        class="img-fluid h-100"
                        alt=""
                      />
                    </a>
                  </div>
                  <div>
                    <a href="https://getbootstrap.com/">
                      <img
                        src="images/floating nav/en_drop-02.png"
                        class="img-fluid h-100"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </div>
  );
};

export default Header2;

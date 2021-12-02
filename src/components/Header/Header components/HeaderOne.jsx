import React from 'react'

const HeaderOne = () => {
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
              {/* id="navbarSupportedContent" */}
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
        
        </>
    )
}

export default HeaderOne

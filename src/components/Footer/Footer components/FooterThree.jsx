import React from 'react'

const FooterThree = () => {
    return (
        <>
            <footer class="last__footer py-0 py-sm-4 my-0 mb-md-4">
        <div class="container-fluid" style={{ height: "36px" }}>
          <div
            class="
            row
            d-flex
            flex-wrap
            justify-content-center justify-content-lg-between
            align-items-center
          "
            style={{ padding: "12px 45px", background: "rgb(247, 247, 250)" }}
          >
            <p
              class="
              col-lg-3 col-md-6 col-12
              mb-0
              d-flex
              justify-content-center justify-content-lg-start
              align-items-center
              text-center
            "
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="'`noon`', the 'noon device', 'noon east', 'east' and the 'east device' are trade marks or registered trade marks of Noon AD Holdings LTD. in the UAE and other countries"
            >
              &copy; 2021 Company, All rights reserved.
            </p>

            {/* <!-- <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
          </a> --> */}
            <div
              class="
              col-lg-4 col-md-6 col-12
              my-2
              text-center
              d-flex
              justify-content-center justify-content-lg-start
              align-items-center
            "
            >
              <img src="images/footer/cash-black.svg" class="me-1" alt="Cash" />
              <img src="images/footer/visa-black.svg" class="me-1" alt="Visa" />
              <img
                src="images/footer/amex-black-v2.svg"
                class="me-1"
                alt="amx"
              />
              <img src="images/footer/mastercard-black.svg" alt="MasterCard" />
            </div>
            <ul
              class="
              nav
              d-flex
              col-lg-5 col-md-6 col-12
              justify-content-center justify-content-lg-start
              px-0
            "
            >
              <li class="nav-item">
                <a href="#home" class="nav-link px-2 text-muted">
                  Careers{" "}
                </a>
              </li>
              <li class="nav-item">
                <a href="#home" class="nav-link px-2 text-muted">
                  Warranty Policy
                </a>
              </li>
              <li class="nav-item">
                <a href="#home" class="nav-link px-2 text-muted">
                  Sell with us
                </a>
              </li>
              <li class="nav-item">
                <a href="#home" class="nav-link px-2 text-muted">
                  Terms of Use
                </a>
              </li>
              <li class="nav-item">
                <a href="#home" class="nav-link px-2 text-muted">
                  Terms of Sale
                </a>
              </li>
              <li class="nav-item">
                <a href="#home" class="nav-link px-2 text-muted">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
        </>
    )
}

export default FooterThree

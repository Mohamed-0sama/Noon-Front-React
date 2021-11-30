import React from 'react'
import './footer.scss'
const Footer = () => {
    return (
        <div>
            <footer class="first__footer py-0  my-0 ">
  <div class="container-fluid" style={{fontSize: "13px", background: "#F7F7FA"}}>
    <div
      class="
        d-flex
        flex-wrap
        justify-content-center justify-content-lg-between
        align-items-center
      "
      style={{padding: "12px 45px"}}
    >
    <div class="paras my-3">
      <p
        class="

          mb-0
          d-flex
          justify-content-center justify-content-lg-start
          align-items-center
          text-center
        "
      >
      We're Always Here To Help
      </p>
      <p class="d-flex
      justify-content-center justify-content-lg-start
      align-items-center
      text-center">
        Reach out to us through any of these support channels
      </p>
    </div>
   
   
    <div class="d-flex flex-wrap justify-content-center">
     
      <div class="d-flex align-items-center first__footer__help">
        <div>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 27 27" fill="none"><title id="title">help_center</title><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2C15.0377 2 17.4234 2.988 19.2177 4.78231C21.012 6.57662 22 8.96231 22 11.5C22 14.0377 21.012 16.4234 19.2177 18.2177C17.4234 20.012 15.0377 21 12.5 21C9.9635 21 7.57662 20.012 5.78231 18.2177C3.988 16.4234 3 14.0377 3 11.5C3 8.96231 3.988 6.57662 5.78231 4.78231C7.57662 2.988 9.9635 2 12.5 2ZM18.3781 17.3781C16.8083 18.948 14.7206 19.8125 12.5 19.8125C10.2794 19.8125 8.19175 18.948 6.62306 17.3781C5.052 15.8083 4.1875 13.7206 4.1875 11.5C4.1875 9.27938 5.052 7.19175 6.62306 5.62188C8.19294 4.052 10.2806 3.1875 12.5 3.1875C14.7206 3.1875 16.8083 4.052 18.3781 5.62188C19.948 7.19175 20.8125 9.27938 20.8125 11.5C20.8125 13.7206 19.948 15.8083 18.3781 17.3781ZM11.9062 6.76781V7.95531H13.0938V6.76781H11.9062ZM11.9062 9.13569V16.2334H13.0938V9.13569H11.9062Z" fill="#404553"></path><path d="M19.2177 4.78231L19.0409 4.95909L19.2177 4.78231ZM19.2177 18.2177L19.0409 18.0409L19.2177 18.2177ZM5.78231 18.2177L5.95909 18.0409L5.78231 18.2177ZM6.62306 17.3781L6.79991 17.2014L6.79977 17.2013L6.62306 17.3781ZM6.62306 5.62188L6.79977 5.79872L6.79984 5.79865L6.62306 5.62188ZM11.9062 7.95531H11.6562V8.20531H11.9062V7.95531ZM11.9062 6.76781V6.51781H11.6562V6.76781H11.9062ZM13.0938 7.95531V8.20531H13.3438V7.95531H13.0938ZM13.0938 6.76781H13.3438V6.51781H13.0938V6.76781ZM11.9062 16.2334H11.6562V16.4834H11.9062V16.2334ZM11.9062 9.13569V8.88569H11.6562V9.13569H11.9062ZM13.0938 16.2334V16.4834H13.3438V16.2334H13.0938ZM13.0938 9.13569H13.3438V8.88569H13.0938V9.13569ZM19.3945 4.60554C17.5533 2.76433 15.104 1.75 12.5 1.75V2.25C14.9714 2.25 17.2935 3.21167 19.0409 4.95909L19.3945 4.60554ZM22.25 11.5C22.25 8.89602 21.2357 6.44674 19.3945 4.60554L19.0409 4.95909C20.7883 6.70651 21.75 9.0286 21.75 11.5H22.25ZM19.3945 18.3945C21.2357 16.5533 22.25 14.104 22.25 11.5H21.75C21.75 13.9714 20.7883 16.2935 19.0409 18.0409L19.3945 18.3945ZM12.5 21.25C15.104 21.25 17.5533 20.2357 19.3945 18.3945L19.0409 18.0409C17.2935 19.7883 14.9714 20.75 12.5 20.75V21.25ZM5.60554 18.3945C7.44675 20.2357 9.89723 21.25 12.5 21.25V20.75C10.0298 20.75 7.7065 19.7883 5.95909 18.0409L5.60554 18.3945ZM2.75 11.5C2.75 14.104 3.76433 16.5533 5.60554 18.3945L5.95909 18.0409C4.21167 16.2935 3.25 13.9714 3.25 11.5H2.75ZM5.60554 4.60554C3.76433 6.44674 2.75 8.89602 2.75 11.5H3.25C3.25 9.0286 4.21167 6.70651 5.95909 4.95909L5.60554 4.60554ZM12.5 1.75C9.89723 1.75 7.44675 2.76432 5.60554 4.60554L5.95909 4.95909C7.7065 3.21168 10.0298 2.25 12.5 2.25V1.75ZM12.5 20.0625C14.7869 20.0625 16.9381 19.1717 18.5549 17.5549L18.2013 17.2013C16.6784 18.7243 14.6543 19.5625 12.5 19.5625V20.0625ZM6.44622 17.5548C8.06185 19.1717 10.2131 20.0625 12.5 20.0625V19.5625C10.3456 19.5625 8.32165 18.7243 6.79991 17.2014L6.44622 17.5548ZM3.9375 11.5C3.9375 13.7869 4.82833 15.9382 6.44635 17.555L6.79977 17.2013C5.27567 15.6783 4.4375 13.6543 4.4375 11.5H3.9375ZM6.44635 5.44503C4.82833 7.06183 3.9375 9.21309 3.9375 11.5H4.4375C4.4375 9.34566 5.27567 7.32167 6.79977 5.79872L6.44635 5.44503ZM12.5 2.9375C10.2143 2.9375 8.06305 3.82834 6.44629 5.4451L6.79984 5.79865C8.32283 4.27567 10.3469 3.4375 12.5 3.4375V2.9375ZM18.5549 5.4451C16.9381 3.82832 14.7869 2.9375 12.5 2.9375V3.4375C14.6543 3.4375 16.6784 4.27568 18.2013 5.79865L18.5549 5.4451ZM21.0625 11.5C21.0625 9.2131 20.1717 7.06188 18.5549 5.4451L18.2013 5.79865C19.7243 7.32162 20.5625 9.34565 20.5625 11.5H21.0625ZM18.5549 17.5549C20.1717 15.9381 21.0625 13.7869 21.0625 11.5H20.5625C20.5625 13.6543 19.7243 15.6784 18.2013 17.2013L18.5549 17.5549ZM12.1562 7.95531V6.76781H11.6562V7.95531H12.1562ZM13.0938 7.70531H11.9062V8.20531H13.0938V7.70531ZM12.8438 6.76781V7.95531H13.3438V6.76781H12.8438ZM11.9062 7.01781H13.0938V6.51781H11.9062V7.01781ZM12.1562 16.2334V9.13569H11.6562V16.2334H12.1562ZM13.0938 15.9834H11.9062V16.4834H13.0938V15.9834ZM12.8438 9.13569V16.2334H13.3438V9.13569H12.8438ZM11.9062 9.38569H13.0938V8.88569H11.9062V9.38569Z" fill="#404554"></path></svg>        </div>
        <div class="d-flex flex-column">
          <span>HELP CENTER</span>
          <a href="mailto:help.noon.com">help.noon.com</a>
        </div>
      </div>
      <div class="d-flex align-items-center first__footer__help second">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 27 27" fill="none"><title id="title">email_support</title><path d="M5.625 6H18.625C19.5188 6 20.25 6.73125 20.25 7.625V17.375C20.25 18.2688 19.5188 19 18.625 19H5.625C4.73125 19 4 18.2688 4 17.375V7.625C4 6.73125 4.73125 6 5.625 6Z" stroke="#404553" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.25 7.62501L12.125 13.3125L4 7.62501" stroke="#404553" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>   </div>
        <div class="d-flex flex-column">
          <span>EMAIL SUPPORT</span>
          <a href="mailto:egypt@noon.com">egypt@noon.com</a>
        </div>
      </div>
      <div class="d-flex align-items-center first__footer__help">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 27 27" fill="none"><title id="title">phone_support</title><path d="M18.1912 14.2183C17.5384 13.5738 16.7234 13.5738 16.0748 14.2183C15.58 14.7089 15.0852 15.1996 14.5987 15.6985C14.4656 15.8358 14.3534 15.8649 14.1912 15.7734C13.871 15.5988 13.5301 15.4574 13.2224 15.2661C11.7879 14.3638 10.5862 13.2037 9.52176 11.8981C8.99369 11.2495 8.52384 10.5551 8.19535 9.77339C8.12883 9.61538 8.1413 9.51143 8.2702 9.38253C8.765 8.90436 9.24733 8.41372 9.73382 7.92308C10.4116 7.24116 10.4116 6.44283 9.72966 5.75675C9.34296 5.3659 8.95627 4.98337 8.56957 4.59251C8.17041 4.19335 7.7754 3.79002 7.37207 3.39501C6.71926 2.75883 5.90429 2.75883 5.25565 3.39917C4.75668 3.88981 4.27851 4.39293 3.77124 4.87526C3.30138 5.32016 3.06438 5.86486 3.01448 6.50104C2.93548 7.53638 3.18912 8.51351 3.54671 9.46569C4.27851 11.4366 5.39286 13.1871 6.74421 14.7921C8.56957 16.9626 10.7484 18.6798 13.2972 19.9189C14.4448 20.4761 15.634 20.9044 16.9272 20.975C17.817 21.0249 18.5904 20.8004 19.2099 20.106C19.634 19.632 20.1122 19.1996 20.5613 18.7464C21.2265 18.0728 21.2307 17.2578 20.5696 16.5925C19.7796 15.7983 18.9854 15.0083 18.1912 14.2183Z" stroke="#404553" stroke-width="1.5"></path></svg>
        </div>
        <div class="d-flex flex-column">
          <span>PHONE SUPPORT</span>
          <a href="#home">16358</a>
        </div>
      </div>

    </div>
    </div>
  </div>
</footer>
            <footer class="py-0 py-md-4">
      <div class="container-fluid">
        {/* <!-- <footer class="py-5"> --> */}
        <div class="row m-auto" style={{padding: "20px", textAlign: "start"}}>
          <div class="col-lg-2 col-md-4 col-sm-6">
            <h6 class="">ELECTRONICS</h6>
            <ul class="nav flex-column" style={{fontSize: "13px"}}>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Mobiles</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Tablets</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Home Appliances</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Camera, Photo & Video</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Televisions</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Headphones</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Video Games</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-6">
            <h6>FASHION</h6>
            <ul class="nav flex-column" style={{fontSize: "13px"}}>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Women's Fashion</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Men's Fashion</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Girls' Fashion</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Boys' Fashion</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Men's Watches</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Women's Watches</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Eyewear</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Bags & Luggage</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-6">
            <h6>HOME AND KITCHEN</h6>
            <ul class="nav flex-column"style={{fontSize: "13px"}}>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Kitchen & Dining</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Bedding</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Bath</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Home Decor</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Home Appliances</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Tools & Home Improvement</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Patio, Lawn & Garden</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Home Storage & Organisation</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6">
            <h6>BEAUTY</h6>
            <ul class="nav flex-column"style={{fontSize: "13px"}}>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Women's Fragrance</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Men's Fragrance</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Make-Up</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Haircare</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Skincare</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Personal Care</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Tools & Accessories</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Men's Grooming</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6">
            <h6>KIDS, BABY & TOYS</h6>
            <ul class="nav flex-column"style={{fontSize: "13px"}}>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Strollers, Prams & Accessories</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Car Seats</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Baby Clothing</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Feeding</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Bathing & Skincare</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Diapering</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Baby & Toddler Toys</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Toys & Games</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6">
            <h6>TOP BRANDS</h6>
            <ul class="nav flex-column"style={{fontSize: "13px"}}>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Apple</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Samsung</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Nike</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Ray-Ban</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Tefal</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">L'Oreal Paris</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Chicco</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#home" class="nav-link p-0 text-muted">Tornado</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-3">
          <div
            class="
              col-md-6
              d-flex
              flex-column
              
              align-items-center
              p-2
            "
          >
            <h6 style={{fontSize: "14px"}}>SHOP ON THE GO</h6>
            <div class="d-flex flex-column flex-sm-row">
              <a href="#home" class="me-0 me-sm-2"
                ><img src="images/footer/app-store.svg" style={{height: "36px"}}
              alt="Home"/></a>
              <a href="#home" class="mt-2 mt-sm-0"
                ><img src="images/footer/google-play.svg" style={{height: "36px"}}
              alt="Home"/></a>
            </div>
          </div>
          <div
            class="
              col-md-6
              d-flex
              flex-column
              justify-content-center
              align-items-center
              p-2
            "
          >
            <h6 style={{height: "14px"}}>CONNECT WITH US</h6>
            <ul
              class="
                list-unstyled
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <li class="">
                <a class="link-dark" href="#home"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <title id="title">footer_fb_color</title>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
                      fill="#FEEE00"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.99 18.667v-6.334h1.775L15 10.15h-2.01l.003-1.093c0-.569.055-.874.885-.874h1.11V6h-1.776C11.08 6 10.33 7.059 10.33 8.84v1.31H9v2.183h1.33v6.334h2.66z"
                      fill="#404553"
                    ></path></svg
                ></a>
              </li>
              <li class="ms-3">
                <a class="link-dark" href="#home"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <title id="title">footer_twitter_color</title>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 12.124C0 5.566 5.304.25 11.846.25s11.846 5.317 11.846 11.875c0 6.56-5.304 11.876-11.846 11.876S0 18.683 0 12.124z"
                      fill="#FEEE00"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.083 10.495l.025.411-.414-.05c-1.508-.193-2.826-.847-3.944-1.946l-.547-.545-.141.403c-.298.897-.108 1.845.514 2.482.331.352.257.403-.315.193-.199-.067-.373-.117-.39-.092-.058.058.141.821.299 1.123.215.42.654.83 1.135 1.074l.406.193-.48.008c-.465 0-.481.008-.432.185.166.545.82 1.123 1.55 1.375l.514.176-.448.268a4.657 4.657 0 01-2.22.621c-.373.008-.68.042-.68.067 0 .084 1.011.553 1.6.738 1.764.545 3.86.31 5.435-.62 1.118-.663 2.237-1.98 2.76-3.254.28-.68.563-1.92.563-2.516 0-.386.024-.436.488-.898.274-.268.53-.561.58-.645.083-.16.075-.16-.348-.017-.704.252-.803.218-.455-.16.256-.268.563-.754.563-.897 0-.025-.124.017-.265.093-.15.083-.48.21-.73.285l-.447.142-.406-.276c-.223-.151-.538-.32-.704-.37-.422-.117-1.069-.1-1.45.034-1.036.377-1.69 1.35-1.616 2.415z"
                      fill="#404553"
                    ></path></svg
                ></a>
              </li>
              <li class="ms-3">
                  {/* there is a problem */}
                <a class="link-dark" href="#home"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <title id="title">footer_instagram_color</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 12C0 5.373 5.36 0 11.97 0s11.97 5.373 11.97 12-5.36 12-11.97 12S0 18.627 0 12z"
                    fill="#FEEE00"
                  ></path>
                  <mask
                    id="a"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 12C0 5.373 5.36 0 11.97 0s11.97 5.373 11.97 12-5.36 12-11.97 12S0 18.627 0 12z"
                      fill="#fff"
                    ></path>
                  </mask>
                  <g mask="url(#a)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.97 5.6c-1.733 0-1.95.008-2.632.039-.68.03-1.143.139-1.55.297-.42.163-.775.382-1.13.738a3.143 3.143 0 00-.737 1.134c-.158.407-.266.872-.297 1.553-.03.683-.038.9-.038 2.64 0 1.737.008 1.955.039 2.637.03.682.138 1.147.296 1.554.163.42.381.778.736 1.134.355.355.711.575 1.13.738.407.158.871.266 1.55.297.682.031.9.04 2.633.04 1.734 0 1.95-.009 2.631-.04.68-.03 1.145-.139 1.55-.297.42-.163.776-.383 1.13-.738.356-.356.574-.713.738-1.134.157-.407.264-.872.296-1.553.03-.683.039-.9.039-2.639 0-1.738-.008-1.956-.039-2.639-.032-.681-.14-1.146-.296-1.553a3.142 3.142 0 00-.737-1.134 3.12 3.12 0 00-1.13-.738c-.408-.158-.872-.266-1.551-.297-.681-.031-.898-.039-2.633-.039h.002zm-.572 1.153h.572c1.705 0 1.907.006 2.58.037.623.029.96.133 1.185.22.298.117.51.255.734.48.224.223.362.437.478.735.087.226.191.564.22 1.188.03.675.037.878.037 2.586 0 1.708-.007 1.91-.037 2.585-.029.624-.133.963-.22 1.188a1.98 1.98 0 01-.478.735 1.973 1.973 0 01-.734.479c-.224.088-.562.192-1.185.22-.673.031-.875.038-2.58.038-1.704 0-1.906-.007-2.58-.038-.622-.028-.96-.133-1.185-.22a1.977 1.977 0 01-.734-.479 1.984 1.984 0 01-.477-.736c-.088-.225-.192-.564-.22-1.188-.03-.674-.037-.877-.037-2.586 0-1.71.006-1.91.037-2.585.028-.624.132-.963.22-1.189.115-.298.254-.512.477-.736a1.98 1.98 0 01.734-.479c.225-.088.563-.192 1.186-.22.589-.027.817-.035 2.007-.036v.001zm3.831 1.063a.618.618 0 10.001 1.235.618.618 0 00-.001-1.235zm-3.258.897A3.283 3.283 0 008.691 12a3.282 3.282 0 003.278 3.286c1.811 0 3.278-1.47 3.278-3.286a3.282 3.282 0 00-3.278-3.287zm0 1.154A2.13 2.13 0 0114.098 12a2.13 2.13 0 01-2.128 2.133A2.13 2.13 0 019.843 12a2.13 2.13 0 012.127-2.133z"
                      fill="#404553"
                    ></path>
                  </g>
                </svg>
                </a
                >
              </li>
              <li class="ms-3">
                <a class="link-dark" href="#home"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <title id="title">footer_linkedin_color</title>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
                      fill="#FEEE00"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.777 7.872C8.537 7.872 9 7.319 9 6.636c-.015-.7-.462-1.236-1.193-1.236-.73 0-1.207.537-1.207 1.236 0 .683.462 1.236 1.177 1.236zm-1.117.976V16.8h2.266V8.848H6.66z"
                      fill="#404553"
                    ></path>
                    <path
                      d="M10.266 11.605c0-.951-.033-1.747-.066-2.433h2.2l.117 1.06h.05C12.9 9.734 13.717 9 15.083 9 16.75 9 18 10.045 18 12.291V16.8h-2.534v-4.228c0-.982-.366-1.653-1.283-1.653-.7 0-1.116.452-1.3.89-.066.155-.083.373-.083.592V16.8h-2.534v-5.195z"
                      fill="#404553"
                    ></path></svg
                ></a>
              </li>
            </ul>
          </div>
          {/* <!-- <div class="d-flex justify-content-between py-4 my-4 border-top">
                  <p>&copy; 2021 Company, Inc. All rights reserved.</p>
                  <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-dark" href="#home"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#home"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#home"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
                  </ul>
                </div> --> */}
        </div>

        {/* <!-- <div class="d-flex justify-content-between py-4 my-4 border-top">
                  <p>&copy; 2021 Company, Inc. All rights reserved.</p>
                  <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-dark" href="#home"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#home"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#home"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
                  </ul>
                </div> -->
        <!-- </footer> -->
        <!-- </div> --> */}
      </div>
    </footer>
    
    <footer class="last__footer py-0 py-sm-4 my-0 mb-md-4">
      <div class="container-fluid" style={{height: "36px"}}>
        <div
          class="
            row
            d-flex
            flex-wrap
            justify-content-center justify-content-lg-between
            align-items-center
          "
          style={{padding: "12px 45px", background: "rgb(247, 247, 250)"}}
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
            <img src="images/footer/cash-black.svg" class="me-1" alt="Cash"/>
            <img src="images/footer/visa-black.svg" class="me-1" alt="Visa"/>
            <img src="images/footer/amex-black-v2.svg" class="me-1" alt="amx"/>
            <img src="images/footer/mastercard-black.svg" alt="MasterCard"/>
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
              <a href="#home" class="nav-link px-2 text-muted">Careers </a>
            </li>
            <li class="nav-item">
              <a href="#home" class="nav-link px-2 text-muted">Warranty Policy</a>
            </li>
            <li class="nav-item">
              <a href="#home" class="nav-link px-2 text-muted">Sell with us</a>
            </li>
            <li class="nav-item">
              <a href="#home" class="nav-link px-2 text-muted">Terms of Use</a>
            </li>
            <li class="nav-item">
              <a href="#home" class="nav-link px-2 text-muted">Terms of Sale</a>
            </li>
            <li class="nav-item">
              <a href="#home" class="nav-link px-2 text-muted">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>

        </div>
    )
}

export default Footer

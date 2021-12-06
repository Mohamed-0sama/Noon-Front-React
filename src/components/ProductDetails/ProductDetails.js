import React from 'react'
import './ProductDetails.css'

export default function ProductDetails() {
    var product = {
        image: "assets/zaytoun/products/mobiles/1.png",
        title: "Mobile Hawawel fager",
        price: "7000"
    };
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-5">
                        <img src={product.image} alt={product.title} height="400px" width="400px" />
                    </div>
                    <div className="col-md-4">
                        <h className="hiddenfont">Apple</h>
                        <h5>
                            MacBook Air With 13.3-inch Retina Display, Core i5
                            Processor/macOS/8GB RAM/512 GB SSD/Intel Iris Plus
                            Graphics With English/Arabic Keyboard-2020 Gold Gold
                        </h5>

                        <div>
                            <h className="hiddenfont">Model Number:MVH52AB/A
                            </h>
                        </div>

                        <div className="sameline">
                            <p className="scoreTag"> 5.0 </p>
                            <p><a className="Rating" href="/#"> 3 Rating </a> </p>
                        </div>

                        <div className="sameline">
                            <p> Was: <span className="oldprice"> EGP 26999.00</span> </p>
                        </div>

                        <div className="sameline">
                            <p> Now: <span className="newprice"> EGP 25699.00</span>
                                <span className="hiddenfont Inclusive">Inclusive of VAT</span>
                            </p>
                        </div>
                        <div className="sameline">
                            <p> Saving: <span className="semibold">EGP 1300.00 </span> </p>
                        </div>

                        <div className="sameline">
                            <img src="https://z.nooncdn.com/s/app/com/noon/icons/vip.svg" alt="icon" className="img-fluid vipimg" />
                            <p className="semibold"> Earn EGP 256.99
                                <span className="normal-txt"> cashback.</span>
                                <span className="noonvip"> <a href="/#"> Get noon VIP</a></span>
                            </p>

                        </div> <br />

                        <div className="sameline">
                            <div>
                                <img src="	https://z.nooncdn.com/s/app/com/noon/icons/emi.svg" alt="icon" className="img-fluid" />
                            </div>
                            <p className="normal-txt"> Monthly payment plans from EGP 2142
                                <span> <a href="/#"> View more details </a></span>
                            </p>
                        </div> <br />

                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="normal-txt">Order in the next 28 mins<br /><span className="semibold">Free delivery </span>by <span
                                    className="date"> Sat, Oct 16 </span> </p>
                            </div>
                            <div className="expressimg">
                                <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg
          " alt="icon" className="img-fluid expressimg " />
                                <i className="bi bi-question-circle"></i>
                            </div>
                        </div>

                        <div className="sameline">
                            <p> Quantity <span className="lowquaintityred"> Low stock: only 1 left</span> </p>
                        </div>


                        <div className="box">
                            <div className="dropdown ">
                                <button className="btn dropdown-toggle btndrop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                    aria-expanded="true">
                                    1
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="/#">1</a></li>
                                    <li><a className="dropdown-item" href="/#">2</a></li>
                                    <li><a className="dropdown-item" href="/#">3</a></li>
                                </ul>
                            </div>
                            {/* <!-- <div className="quantity whitebox"> 1 <p className="border-end-1"></p></div> --> */}
                            <div className="addtocart bluebox mx-2"> Add To Cart</div>

                        </div><br />

                        <div className="sameline">
                            <p className="hiddenfont"> Style: </p>&nbsp; <span className="normal-txt"> Gold English/Arabic</span>
                        </div>

                        <div className="samelinebtn ">
                            <button className="btn2">
                                <p className="btntext">Silver English</p>
                            </button>
                            <button className="btn2 mx-2">
                                <p className="btntext"> Silver English/Arabic</p>
                            </button>
                            <button className="btn2">
                                <p className="btntext">Space Gray English</p>
                            </button>
                        </div> <br />
                        <div className="samelinebtn">
                            <button className="btn3">
                                <p className="btntext"> Gold English/Arabic</p>
                            </button>
                            <button className="btn3 mx-2">
                                <p className="btntext">Space Gray English</p>
                            </button>
                            <br />
                        </div><br />
                        <div className="sameline">
                            <p className="hiddenfont"> Performance:
                            </p>&nbsp; <span className="bold"> Core i5-10th Gen 512GB: </span>
                        </div>
                    </div> <br />


                    <div className="col-md-3">

                        <div className="d-flex">
                            <div className="col-1">
                                <img src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns.svg
            " alt="icon" className="img-fluid" />
                            </div>
                            <p className="normal-txt">
                                Enjoy hassle free returns with this offer.<br /> Learn
                                more about our <a href="/#"> Return Policy </a>
                            </p>
                        </div>
                        <hr />
                        {/* <!-- ******************second******************* --> */}
                        <div className="d-flex">
                            <div className="col-1">
                                <img src="https://z.nooncdn.com/s/app/com/noon/icons/warranty.svg" alt="icon" className="img-fluid" />
                            </div>
                            <hr />
                            <p className="bold">
                                1 year warranty
                            </p>
                        </div>
                        <hr />
                        {/* <!-- ***************third********************* --> */}
                        <div className="d-flex">
                            <div className="col-1">
                                <img src="https://z.nooncdn.com/s/app/com/noon/icons/seller.svg
                        " alt="icon" className="img-fluid" />
                            </div>

                            <div>
                                <p className="bold">
                                    Sold by 
                                    <a href="/#"> noon </a> <br /> <span className="normal-txt"> official warranty</span>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex">
                            <div>
                                <p>Seller Reviews
                                    <i className="bi bi-star-fill stars"></i>
                                    <i className="bi bi-star-fill stars"></i>
                                    <i className="bi bi-star-fill stars"></i>
                                    <i className="bi bi-star-fill stars"></i>
                                    <i className="bi bi-star-half stars"></i>
                                    (4.2) 20.8k <br />
                                    <span className="hiddenfont">
                                        How are these calculated <i className="bi bi-question-circle"></i>
                                    </span>
                                </p>


                            </div>
                        </div>
                        <br />

                        <div className="d-flex">
                            <div className="col-1">
                                <img src="https://z.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg
            " alt="icon" className="img-fluid " />
                            </div>

                            <div>
                                <p className="bold">
                                    FREE RETURNS <br /><span class="hiddenfont">Get free returns on eligible items</span>
                                </p>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div className="col-1">
                                <img src="https://z.nooncdn.com/s/app/com/noon/icons/trusted_shipping_usp_v2.svg
          " alt="icon" className="img-fluid" />
                            </div>

                            <div>
                                <p className="bold">
                                    TRUSTED SHIPPING <br /><span class="hiddenfont"> Free shipping when you spend <br />350 EGP and above </span>
                                </p>
                            </div>
                        </div>

                        <div className="d-flex">
                            <div className="col-1">
                                <img src="	https://z.nooncdn.com/s/app/com/noon/icons/secure_usp.svg" alt="icon" className="img-fluid " />
                            </div>

                            <div>
                                <p className="bold">

                                    SECURE SHOPPING <br /> <span class="hiddenfont">Your data is always protected </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

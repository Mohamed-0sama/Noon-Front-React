import React from 'react'
import CartItem from '../CartItem/CartItem'
import CartAside from '../CartAside/CartAside'
import "./Cart.css"
export default function Cart() {
    /*const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }
*/
    var CartItems = [
        {
            id: "6151",
            image: "assets/zaytoun/products/mobiles/1.png",
            title: "Mobile Hawawel fager",
            price: "7000",
            warranty: 1,
            brand: "Hawawel",
            OrderIn: "14 hr 17 min",
            FDelBy: "1/1/2022",
            quantity: 1
        },
        {
            id: "6566",
            image: "assets/zaytoun/products/mobiles/2.jfif",
            title: "Mobile fager",
            price: "9000",
            warranty: 2,
            brand: "Samsung",
            OrderIn: "13 hr 17 min",
            FDelBy: "Tomorrow, Dec 31",
            quantity: 2
        },
        {
            id: "656886",
            image: "assets/zaytoun/products/mobiles/3.jfif",
            title: "Mobile fager awyyyyy",
            price: "11000",
            warranty: 3,
            brand: "Apple",
            OrderIn: "15 hr 17 min",
            FDelBy: "Dec 31",
            quantity: 1
        }
    ]
    const pricArr = CartItems.map(p => +p.price*p.quantity); // with initial value to avoid when the array is empty

    const total = pricArr.reduce(getTotalPrice, 0); // with initial value to avoid when the array is empty
    const numOfItem = CartItems.length;

    function getTotalPrice(accumulator, a) {
        //console.log(accumulator);
        return accumulator + a;
    }
    
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="p-3 pt-0">
                            <p className="bold m-0"> Cart <span className="hidden">(2 items)</span></p>
                        </div>
                        {CartItems.map(p => <CartItem key = {p.id} product={p}/>)}

                        <div className="my-4">
                            <button className="btn-shopping"> Continue Shopping</button>
                        </div>

                        {/* <div className="p-3 pt-0">
                            <p className="bold m-0"> Wishlist <span className="hidden">(2 items)</span></p>
                        </div>
                        <div className="col-12">
                            <div className="chekout-cart d-flex  flex-1 justify-content-between">
                                <div className="d-flex">
                                    <div className="cart-img">
                                        <img src={CartItems[1].image} alt="product" className="img-fluid" width="150px" />
                                    </div>
                                    <div className="cart-content">
                                        <div>
                                            <p className="product-brand">benco <br />
                                                <span className="product-details">V80 Dual Sim Cyan Blue 3GB Ram 32GB Internal Memory LTE
                                                </span>
                                            </p>
                                        </div>

                                        <div>
                                            <p className="shipping-duration"> Order in 13 hrs 17 mins <br />
                                                <span className="delivery">Free delivery</span>
                                                <span className="normal-text">by</span>
                                                <span className="date">Tomorrow, Oct 31</span>
                                            </p>
                                        </div>

                                        <div>
                                            <p className="semi-hidden">
                                                Sold by
                                                <span className="semi-bold"> noon</span><br />

                                                <span className="semi-bold">
                                                    <img src="https://z.nooncdn.com/s/app/com/noon/icons/warranty.svg" alt="icon" className="img-fluid" />
                                                    1 year warranty </span>
                                            </p>
                                        </div>
                                        <div className="d-flex iconcontainer">
                                            <span className="semi-hidden"><i className="bi bi-cart2"></i> Move to Cart</span>
                                            <span className="semi-hidden mx-4"><i className="bi bi-trash"></i> Remove </span>

                                        </div>
                                    </div>
                                </div>

                                <div className="rightside">
                                    <span className="semi-hidden">EGP <span className="bold">1599</span></span>

                                    <div className="dropdown btn-border">
                                        <button className="btn dropdown-toggle btndrop" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="true">
                                            1
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="/#">1</a></li>
                                            <li><a className="dropdown-item" href="/#">2</a></li>
                                            <li><a className="dropdown-item" href="/#">3</a></li>
                                        </ul>
                                    </div>
                                    <span> <img src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" alt="expess" /></span>
                                </div>
                            </div>
                        </div> */}

                    </div>

                    <div className="col-md-4">
                        <CartAside total={total} num = {numOfItem}/>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ResetCart } from "../../redux/LAMA/cartRedux";
import axios from "axios";
export default function CartAside(props) {
  const state_products = useSelector((state) => state.cart.products);
  const api_products = state_products.map((p) => {
    return { productId: p.id, quantity: p.quantity };
  });
  //console.log(api_products);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  console.log(userId);
  const order = {
    userId: userId, //localStorage.getItem
    products: api_products,
    amount: props.total,
    address: { city: "alex", street: "gamal nasser" },
    status: "pending",
  };
  const config = {
    //change token with userToken
    headers: {
      token: localStorage.getItem("userToken"),
    },
  };
  //console.log(order);
  const dispatch = useDispatch();
  const handleCheckOut = async () => {
    if (userId === null) navigate("/Login");
    else {
      navigate(`/checkout/${props.total}`);
      await axios
        .post("https://noon-ecommerce.herokuapp.com/api/orders", order, config)
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      dispatch(ResetCart());
    }
    //console.log("gowa reset")
  };
  return (
    <>
      <div className="p-3 ms-5 col-md-12 rightsideBar">
        <div
          className="container-fluid  bg-light justify-content-evenly pt-3"
          style={{ border: "solid 0.5px lightgray" }}
        >
          <h5 className="p-2fw-bold">Order Summary</h5>
          <div className="input-group ">
            <input
              type="text"
              className="form-control p-2"
              placeholder="Copoun Code or Gift Card"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-primary p-2 text-uppercase fw-bold"
              type="button"
              id="button-addon2"
            >
              apply
            </button>
          </div>
          <div className="row justify-content-between">
            <dt className="col-8 text-capitalize text-secondary">
              subtotal
              {props.num === 1 ? (
                <span> ({props.num} item) </span>
              ) : (
                <span> ({props.num} items)</span>
              )}
            </dt>
            <dd className="col-4 "> {props.total}</dd>
          </div>

          <div className="row justify-content-between ">
            <dt className="col-8 text-capitalize text-secondary"> shipping</dt>
            <dd className="col-4  fw-bold text-primary text-capitalize float-end">
              {" "}
              free
            </dd>
          </div>
          <hr />
          <div className="row justify-content-between">
            <dt className="col-5 fw-bold fs-5 text-dark">
              Total <p style={{ fontSize: "10px" }}>(inclusive of VAT)</p>
            </dt>
            <dd className="col-4 fw-bold fs-5 text-secondary">
              {" "}
              EGP{props.total}
            </dd>
          </div>
          <div className="row p-2" style={{ backgroundColor: "lightyellow" }}>
            <div className="col-1 p-2">
              {/* <!-- <i class ="fas fa-university text-warning fs-3"></i> --> */}
              <img
                src="https://z.nooncdn.com/s/app/com/noon/icons/emi.svg"
                alt="bank-icon"
              />
            </div>
            <div className="col-11">
              <p>
                buy now, pay later with select cards, Choose this option during
                checkout.
                <a href="/#" className="link-primary m-1">
                  view more details
                </a>
              </p>
            </div>
          </div>
          <div className="row text-center p-4">
            <button
              className="btn btn-primary text-white text-uppercase"
              style={{ width: "100%" }}
              onClick={handleCheckOut}
            >
              Checkout
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <p
            className="fw-bold "
            style={{ color: "limegreen ;font-size: 15px" }}
          >
            <img
              src="https://z.nooncdn.com/s/app/com/noon/icons/vip.svg"
              alt=""
            />{" "}
            &nbsp; Earn EGP14.02 bachback
            <span className="text-secondary fw-normal">
              Add noon VIP to cart
            </span>
          </p>
          <div className="row p-3">
            <img
              src="https://a.nooncdn.com/rn/vip/en_eg_cart_nonloyal_desktop.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

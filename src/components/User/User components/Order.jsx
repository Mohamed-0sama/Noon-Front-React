import React, { useEffect, useState } from "react";
import { Card, Button, Alert} from "antd";
import axios from "axios";
import RatingProduct from "./RatingProduct.jsx";
const Order = () => {
  const imagesUrl = "https://noon-ecommerce.herokuapp.com/images/";
  const [products, setProducts] = useState(() => []);
  const [order, setOrder] = useState(() => {});
  // const [x, setX] = useState(() => "");
  // let x = "Rate";
  const [successMsg, setSuccessMsg] = useState("");
  // const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    axios
      .get("https://noon-ecommerce.herokuapp.com/api/orders/find/61965b8bd77aff0d40a1d004")
      // .get("http://localhost:5000/api/orders/find/61965b8bd77aff0d40a1d004")
      .then(function (response) {
        setOrder(response.data[0]);
        const urls = response.data[0].products.map(
          (product) =>
            `https://noon-ecommerce.herokuapp.com/api/products/find/${product.productId}`
        );
        console.log(urls);
        const promises = urls.map((url) =>
          fetch(url).then((response) => response.json())
        );
        console.log(promises);
        Promise.all(promises).then((data) => {
          console.log(data);
          setProducts(data);
        });
        console.log(promises);
      });
  }, []);
  // const rateORcancel = () => {
  //   console.log(x);
  //   if (x === "Rate") {
  //     // axios.put(`http://localhost:5000/api/order/find/61965b8bd77aff0d40a1d004`, values)
  //     // .then(() => {setSuccessMsg("ALL is Done"); setErrMsg("")})
  //     // .catch((err) =>{setErrMsg(err.message); setSuccessMsg("")} )
  //   } else if (x === "Cancel") {
  //     axios
  //       .delete(`http://localhost:5000/api/order/find/61965b8bd77aff0d40a1d004`)
  //       .then(() => {
  //         setSuccessMsg("Deleted successfully");
  //         setErrMsg("");
  //       })
  //       .catch((err) => {
  //         setErrMsg(err.message);
  //         setSuccessMsg("");
  //       });
  //   }
  // };
 
  const cancel = () => {
    axios
          .delete(`http://localhost:5000/api/orders/find/${order._id}`) //we need to delete product from order contain more than one product 
          // .delete(`http://localhost:5000/api/order/find/${order._id}`) //we need to delete product from order contain more than one product 
          .then(() => {
            setSuccessMsg("Deleted successfully");
            setErrMsg("");
          })
          .catch((err) => {
            setErrMsg(err.message);
            setSuccessMsg("");
          });
      
  };
  
  return (
    <div>
      {successMsg && <Alert message={successMsg} type="success" />}

      {errMsg && <Alert message={errMsg} type="error" />}
     
      {products.map((product) => {
        console.log(products);
        console.log(order._id);
        return (
          <>
            <Card
              type="inner"
              className="mb-3"
              title={product.brand}
              // extra={<a href="#l">More</a>}
            >
              <div className="d-flex flex-wrap justify-content-center  justify-content-md-between align-items-center">
                <div
                  className="card mb-3"
                  style={{ maxWidth: "540px", border: "none" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={imagesUrl + product.imageSrc}
                        className="img-fluid rounded-start"
                        alt={product.imageSrc}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.desc}</p>
                        <p
                          className="card-text"
                          style={{
                            color:
                              order.status === "delievered" ? "green" : "black",
                          }}
                        >
                          {order.status}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated
                            {" " +
                              new Date(order.updatedAt).toLocaleDateString(
                                "en-us",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {order.status === "delievered" ? (
                  <RatingProduct />
                ) : (
                  <Button onClick={cancel()} size={"large"}>
                    cancel
                  </Button>
                )}             
              </div>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default Order;

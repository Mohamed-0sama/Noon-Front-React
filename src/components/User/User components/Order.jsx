import React, { useEffect, useState } from "react";
import { Card, Button, Alert} from "antd";
import axios from "axios";
import RatingProduct from "./RatingProduct.jsx";
// import { message, Space } from 'antd';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
// const success = () => {
//   message.success('Data Saved');
// };
// const error = () => {
//   message.error('sorry, there was a problem');
// };
const Order = () => {
  const imagesUrl = "https://noon-ecommerce.herokuapp.com/images/";
  const [products, setProducts] = useState(() => []);
  const [order, setOrder] = useState(() => {});
  const [loading, setLoading] = useState(false);

  // const [x, setX] = useState(() => "");
  // let x = "Rate";
  const [successMsg, setSuccessMsg] = useState("");
  // const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  // const userId = localStorage.getItem("userId")

  useEffect(() => {
    const userId = localStorage.getItem("userId")
    setLoading(true);
    axios
      // .get("https://noon-ecommerce.herokuapp.com/api/orders/find/61965b8bd77aff0d40a1d004", 
         .get(`https://noon-ecommerce.herokuapp.com/api/orders/find/${userId}`,
       {
        
          headers: {
            'token': localStorage.getItem('userToken')
          }
        
        // token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTQ1NGNkYzI0MGFhNzlkNDYxMGViNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTA3MjM0MCwiZXhwIjoxNjM5MzMxNTQwfQ.tfOeCrY3HjvmFwMqmF3t-ImY35Of75sx6bD-psAgabc"
      })
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
      }).catch((err) => {
        setErrMsg(err.message)
      }).finally(() => {
        setLoading(false);
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
          .delete(`https://noon-ecommerce.herokuapp.com/api/orders/find/${order._id}`) //we need to delete product from order contain more than one product 
          // .delete(`http://localhost:5000/api/order/find/${order._id}`) //we need to delete product from order contain more than one product 
          .then(() => {
            setSuccessMsg("Deleted successfully");
            setErrMsg("");
          })
          .catch((err) => {
            setErrMsg(err.message);
            setSuccessMsg("");
          }).finally(() => setLoading(false));
      
  };
  if (loading) {
    return <Spin indicator={antIcon} />;
    // return "loading...";
  }
  return (
    <div>
      {/* {successMsg && <Alert message={successMsg} type="success" closable />} */}

      {errMsg && <Alert message={errMsg} type="error" closable/>}
     
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

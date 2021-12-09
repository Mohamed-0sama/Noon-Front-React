import React, { useEffect, useState } from "react";
import { Card } from "antd";
import axios from "axios";
const Order = () => {
  const imagesUrl = "https://noon-ecommerce.herokuapp.com/images/";
  const [products, setProducts] = useState(() => []);

  useEffect(() => {
    axios
          .get("http://localhost:5000/api/orders/find/61965b8bd77aff0d40a1d004")
          .then(function (response) {
            const urls = response.data[0].products.map(product =>
               `http://localhost:5000/api/products/find/${product.productId}`)
            console.log(urls);
            const promises = urls.map(url => fetch(url).then((response) => response.json()))
            console.log(promises);
              Promise.all(promises).then((data) => {
                console.log(data)
                setProducts(data)
              })
            console.log(promises);
          })
          }
          , []);

  return (
    <div>
      {/* <Card title="Card title"> */}
      {/* <p>vdsb {products[0].title}</p> */}
      {products.map((product) => {
        console.log(products);
        console.log(product);
        return (
          <>
            <Card
              type="inner"
              className="mb-3"
              title={product.brand}
              // extra={<a href="#l">More</a>}
            >
              <div className="card mb-3" style={{ maxWidth: "540px", border: "none" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={imagesUrl + product.imageSrc}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default Order;

import React, { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { Card } from "antd";
import {
  myBrandContext,
  // myMainCatContext,
  // mySubCatContext,
  myQueryContext,
} from "./../pages/Home";
import axios from "axios";
const RoutingDiv = () => {
  const query = new URLSearchParams(useLocation().search) // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  console.log(query);
  // const myMainCat = useContext(myMainCatContext);
  // const mySubCat = useContext(mySubCatContext);
  const myBrand = useContext(myBrandContext);
  // const myQuery = useContext(myQueryContext)
  const myQuery = useContext(myQueryContext);
  console.log(myQuery);
  console.log(myBrand);
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products?${myQuery}=${myBrand}`)
      .then((response) => {
        setMyData(response.data);
        console.log(response.data);
      });
    return () => {
      // cleanup
    };
  }, [myBrand, myQuery]);
  return (
    <div>
      <h1>Welcome</h1>

      {myData.map((data) => {
        return (
          <>
            <Card
              title="Default size card"
              // extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <p>{data.title}</p>
              <p>{data.desc}</p>
              <p>{data.quantity}</p>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default RoutingDiv;

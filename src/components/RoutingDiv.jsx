import React, {useContext, useEffect, useState} from "react";

import { useLocation } from "react-router-dom";
import { Card } from "antd";
import { myBrandContext, myMainCatContext, mySubCatContext } from './../pages/Home';
import  axios  from 'axios';
const RoutingDiv = () => {
// const query = new URLSearchParams(useLocation().search) // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// console.log(query);
  const myMainCat = useContext(myMainCatContext)
  const mySubCat = useContext(mySubCatContext)
  const myBrand = useContext(myBrandContext)

  const [myData, setMyData] = useState({})
  useEffect(() => {
    axios.get("http://localhost:5000/api/products?brand="+myBrand)
    .then(response =>{
      setMyData(response.data[0])
      console.log(response.data[0])
    })
    return () => {
      // cleanup
    }
  }, [myBrand])
  return (
    <div>
      <h1>Welcome</h1>
      <Card
        title="Default size card"
        // extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        
        <p>{myData.title}</p>
        <p>{myData.desc}</p>
        <p>{myData.quantity}</p>
        
      </Card>
   
    </div>
  );
};

export default RoutingDiv;

import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Input } from 'antd';
import "./profile.scss";
import axios from "axios";
const Address = () => {
  const [userInfo, setUserInfo] = useState({});
  const [enableEdit, setEnableEdit] = useState(false) 
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/find/61965bc1d77aff0d40a1d006`)
      .then((response) => {
        console.log(response.data);
        setUserInfo(response.data);
      });
  }, []);
  return (
    <div>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Primary Addresss"
        extra={<a href="#d">More</a>}
      >
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-3">
            <span>Name</span>
            <p>{userInfo.username}</p>
            <Input placeholder="User Name" bordered={false} disabled={true}/>
          </div>
          <div className="col-md-6 col-lg-3">
            <span>Address</span>
            <address>
              محافظة البحر الاحمر - مدينة سفاجا - شارع الاذاعة والتليفزيون,
            </address>
          </div>
          <div className="col-md-6 col-lg-3">
            <span>Phone Number</span>
            <p>01006150263</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <button
              type="button"
              className="btn button__firstDiv"
              style={{ background: "#F1F3FA" }}
            >
              Edit
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Address;

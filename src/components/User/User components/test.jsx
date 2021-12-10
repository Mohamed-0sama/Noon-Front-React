// import React from 'react'
// import "./profile.scss";
import { Alert, Card } from "antd";
import React, { useState, useEffect, useRef} from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
// import {Form.Control} from 'react-bootstrap'
// const HorizontalLoginForm = () => {
    
const Test = () => {
    const [enableEdit, setEnableEdit] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  // To disable submit button at the beginning.
  const editBtn = useRef();
  const saveBtn = useRef();
  const dispaly = () => {
    setEnableEdit(true);
    saveBtn.current.style.display = "block";
    editBtn.current.style.display = "none";
    console.log(userInfo);
  };
  useEffect(() => {
    forceUpdate({});
  }, []);

  useEffect(() => {
    // const userData = JSON.parse(localStorage.getItem('userToken'))
   const userId = localStorage.getItem("userId")
    // axios.headers.setDefault // in app component
    setLoading(true);
    axios
      // .get(`http://localhost:5000/api/users/find/${userData._id}`)
      // .get(`http://localhost:5000/api/users/find/${userId}`)
      .get(`http://localhost:5000/api/users/find/61965bc1d77aff0d40a1d006`)
      .then((response) => {
        console.log(response.data);
        setUserInfo(response.data);
        // setUser(userInfo);
      
      })
      .catch((err) => {
        console.log(err);
        setErrMsg(err.message)
       
      }).finally(() => {
        setLoading(false);
      })
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
    setLoading(true);
    axios.put(`http://localhost:5000/api/users/edit/61965bc1d77aff0d40a1d006`, values)
    .then(() => {setSuccessMsg("ALL is Done"); setErrMsg("")})
    .catch((err) =>{setErrMsg(err.message); setSuccessMsg("")} )
    .finally(() => setLoading(false));
  };

  if (loading) {
    return "loading...";
  }
  // if (errMsg) {
  //   return errMsg;
  // }
  return (
    <div className="profileComponent">
      {/* <h1>Profile</h1>
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="" /> */}
      {/*  */}
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="General Information"
        //   extra={<a href="#h">More</a>}
      >
        {
          successMsg&&<Alert message={successMsg} type="success" />
        }

        {
          errMsg&&<Alert message={errMsg} type="error" />
        }
           <Form
          form={form}
          layout="vertical"
          // layout="inline"
          // initialValues={userInfo}
          initialValues={userInfo}
        
          name="horizontal_login"
          onFinish={onFinish}
        >
          {/*  */}
          
          {/* {console.log(userInfo.username)} */}
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <Form.Item
                name="username"
                label="Name"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your firsr name!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Name"
                  bordered={false}
                  disabled={!enableEdit}
                />
              </Form.Item>
            </div>
            <div className="col-md-6 col-lg-3">
              <Form.Item
                name="address"
                label="Address"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your Address",
                  },
                ]}
              >
                <Input
                  // prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Address"
                  bordered={false}
                  disabled={!enableEdit}
                />
              </Form.Item>
            </div>
            {/* </div> */}
            {/* <div className="row"> */}
            <div className="col-md-6 col-lg-3">
              <Form.Item
                name="phone"
                label="Phone Number"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number!",
                  },
                ]}
              >
                <Input
                  // prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Phone Number"
                  type="number"
                  bordered={false}
                  disabled={!enableEdit}
                />
              </Form.Item>
            </div>
            <div
              className="col-md-6 col-lg-3"
              ref={saveBtn}
              style={{ display: "none" }}
            >
              <Form.Item shouldUpdate className="text-center" label=" ">
                {() => (
                  <Button
                    type="primary"
                    // size="large"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form
                        .getFieldsError()
                        .filter(({ errors }) => errors.length).length
                    }
                  >
                    Save
                  </Button>
                )}
              </Form.Item>
            </div>
            <div className="col-md-6 col-lg-3" ref={editBtn}>
              <Form.Item shouldUpdate className="text-center" label=" ">
                <Button
                  type="light"
                //   size="large"
                //   className="btn "
                //   style={{ background: "#F1F3FA" }}
                  onClick={dispaly}
                >
                  Edit
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
        
      </Card>
      {/*fffffffffffffffffffffffffffffffffffffffffff  */}
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Link Your Account"
        //   extra={<a href="#h">More</a>}
      >
        <div className="">
          <div className="my-1 fw-bold">Homat Al Watan account</div>
          <div className="row">
            <div className="col-md-8 d-flex align-items-center">
              Now you can link your Homat Al Watan account with your noon
              account
            </div>
            <div className="text-end col-md-4 mt-3 mt-md-0">
              <button type="button" className="btn button__firstDiv">
                Link Account
              </button>
            </div>
          </div>
        </div>
      </Card>
     
    </div>
  );
};

export default Test;

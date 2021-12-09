// import React from 'react'
import "./profile.scss";
import { Alert, Card } from "antd";
import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
// import {Form.Control} from 'react-bootstrap'
// const HorizontalLoginForm = () => {

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  useEffect(() => {
    // const userData = JSON.parse(localStorage.getItem('userData'))
    // axios.headers.setDefault // in app component
    setLoading(true);
    axios
      // .get(`http://localhost:5000/api/users/find/${userData._id}`)
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
          initialValues={userInfo}
          name="horizontal_login"
          onFinish={onFinish}
        >
          <div className="row">
            <div className="col-md-6 col-12 my-2">
              <Form.Item
                name="username"
                label="First Name"
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
                  placeholder="firsrName"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 col-12 my-2">
              <Form.Item
                name="lastname"
                label="Last Name"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="lastName"
                />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 my-2">
              <Form.Item
                name="email"
                label="Email"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                  type="email"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 col-12 my-2">
              <Form.Item
                name="password"
                label="Password"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-end">
            {/* button__firstDiv */}
            <Form.Item shouldUpdate className="">
              {() => (
                <Button
                  type="primary"
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
        </Form>
        {/* <form className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="First Name">First Name</label>
              <input type="text" className="form-control" id="First Name" />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="Last Name">Last Name</label>
              <input type="text" className="form-control" id="Last Name" />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col-md-4">
              <label>Preferred language</label>
              <div>
                <select className="browser-default custom-select form-control">
                  <option>Choose your option</option>
                  <option value="arabic">العربية</option>
                  <option value="english">English</option>
                </select>
              </div>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>
          <div className=" w-100">
            <div className="text-end mt-3">
              <button type="button" className="btn button__firstDiv">
                Save
              </button>
            </div>
          </div>
        </form> */}
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
      {/* <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Security"
        //   extra={<a href="#h">More</a>}
      >
        <Form
          form={form}
          initialValues={{
            email: "abdelmomennasreldin@gmail.com",
            password: "password",
          }}
          name="horizontal_login"
          layout="inline"
          onFinish={onFinish}
        >
          <div className="col-md-6 col-12 my-2">
            <Form.Item
              name="email"
              // className="col-md-6 mx-0"
              rules={[
                {
                  // required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                type="email"
              />
            </Form.Item>
          </div>
          <div className="col-md-6 col-12 my-2">
            <Form.Item
              name="password"
             
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
          </div>
          <div className="col-12 d-flex justify-content-end">
         
            <Form.Item shouldUpdate className="">
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  Log in
                </Button>
              )}
            </Form.Item>
          </div>
        </Form>
      </Card> */}
      {/*ddddddddddddddddddddddddddddddddddddddddd  */}
    </div>
  );
};

export default Profile;

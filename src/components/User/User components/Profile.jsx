// import React from 'react'
import "./profile.scss";
import { Alert, Card, Tooltip } from "antd";
import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
import { message } from 'antd';


  const success = () => {
    message.success('Data Saved');
  };
  const error = () => {
    message.error('sorry, there was a problem');
  };
const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  // const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  // To disable submit button at the beginning.

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
      .get(`${process.env.REACT_APP_API_URL}/api/users/find/${userId}`,
      // .get(`https://noon-ecommerce.herokuapp.com/api/users/find/61965bc1d77aff0d40a1d006`, 
      {
        
        headers: {
          'token': localStorage.getItem('userToken')
        }
      
      // token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTQ1NGNkYzI0MGFhNzlkNDYxMGViNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTA3MjM0MCwiZXhwIjoxNjM5MzMxNTQwfQ.tfOeCrY3HjvmFwMqmF3t-ImY35Of75sx6bD-psAgabc"
    })
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
    const userId = localStorage.getItem("userId");
    const config = {
      //change token with userToken
      headers: {
        token: localStorage.getItem("userToken"),
      },
    };
    console.log("Finish:", values);
    setLoading(true);
    axios.put(`${process.env.REACT_APP_API_URL}/api/users/edit/${userId}`, values,config)
    .then(() => {success()})
    .catch((err) =>{error(); setErrMsg(err.message)} )
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
        {/* {
          successMsg&&<Alert message={successMsg} type="success" />
        } */}

        {
          errMsg&&<Alert message={errMsg} type="error" closable/>
        }
        <Form
          form={form}
          layout="vertical"
          // layout="inline"
          // initialValues={{...userInfo, password : ""}}
          // initialValues={{...userInfo}}
          initialValues={{...userInfo, password : "01006150263"}}
          name="horizontal_login"
          onFinish={onFinish}
        >
          <div className="row">
            <div className="col-md-6 col-12 my-2">
            <Form.Item
                name="username"
                label="username"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: false,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="username"
                />
              </Form.Item>
            </div>
            <div className="col-md-6 col-12 my-2">
              <Form.Item
                name="password"
                label="New Password"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: false,
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
          <div className="row">
            <div className="col-md-6 col-12 my-2">
              <Form.Item
                name="email"
                label="Email"
                // className="col-md-6 mx-0"
                rules={[
                  {
                    required: false,
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
            <div className="col-md-6 col-12 d-flex justify-content-end">
            {/* button__firstDiv */}
            <Form.Item shouldUpdate className="mt-4">
           
              {() => (
                 <Tooltip title="Must change all fields to enable this button" color={"#2db7f5"} key={"#2db7f5"}>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  Save
                </Button>
                </Tooltip>
              )}
             
            </Form.Item>
          </div>
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

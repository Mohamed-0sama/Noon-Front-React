import React, { useState } from "react";

import "./user.scss";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ShopOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Outlet } from 'react-router';
import HeaderOne from './../Header/Header components/HeaderOne';
import FooterThree from "../Footer/Footer components/FooterThree";
import UserHeader from './User components/UserHeader';

const { Header, Sider, Content } = Layout;
const User = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [name, setName] = useState("");
  const toggle = () => {
    console.log(!collapsed);
    setCollapsed(!collapsed);
  };
  const componentName = (name)=>{
    setName(name)
  }
  return (
    <>
    <UserHeader />
      <Layout style={{minHeight:" 70vh"}}>
        <Sider className="sider" trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu className="sider" theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />} onClick={()=>componentName("Address")}>
              <Link to="/User/address">Address</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ShopOutlined />} onClick={()=>componentName("Order")}>
              <Link to="/User/order">Order</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />} onClick={()=>componentName("Profile")}>
              <Link to="/User/profile">Profile</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background icon-header" style={{ padding: 0 }}>
              
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
            <h2>{name}</h2>
            {/* <MenuUnfoldOutlined className="trigger" onClick={toggle}/> */}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
      <FooterThree />
      {/* <Layout>
    <Header className="header">
    
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background" collapsible onCollapse={onCollapse}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>, */}
    </>
  );
};

export default User;

import React from 'react';
import 'antd/dist/antd.css';
import './layout.css';
import profile from '../images/profile.jpg';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Pantforward from "./projectfolder/Pantforward";


import { Layout, Menu, Breadcrumb } from 'antd';
import {
  FireOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class LayoutFrame extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <HashRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Avatar size="large" className="logo" src={profile} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <UserOutlined />
              <NavLink to="/">About</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <PhoneOutlined />
              <NavLink to="/contact">Contact</NavLink>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <FireOutlined />
                  <NavLink to="/projects">Projects</NavLink>
                </span>
              }
            >
              <Menu.Item key="3"><NavLink to="/projects/pantforward">Pant Forward</NavLink></Menu.Item>
              <Menu.Item key="4"><NavLink to="/projects/getatractor">Get a tractor</NavLink></Menu.Item>
              <Menu.Item key="5"><NavLink to="/projects/visdomspodden">Visdomspodden</NavLink></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Nikolai</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Route exact path="/" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route exact path="/projects" component={Projects}/>
              <Route path="/projects/pantforward" component={Pantforward}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2020 Created by Nikolai Toverud</Footer>
        </Layout>
      </Layout>
      </HashRouter>
    );
  }
}

export default LayoutFrame;

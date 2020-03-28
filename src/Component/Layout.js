import React from 'react';
import './layout.css';
import profile from '../images/profile.jpg';
import About from "./About";
import Contact from "./Contact";
import Pantforward from "./projectfolder/Pantforward";
import Getatractor from "./projectfolder/Getatractor";
import WordGame from "./projectfolder/Wordgame";

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  FireOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Result } from 'antd';
import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from "react-router-dom";

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
                  Projects
                </span>
              }
            >
              <Menu.Item key="3"><NavLink to="/projects/pantforward">Pant Forward</NavLink></Menu.Item>
              <Menu.Item key="4"><NavLink to="/projects/getatractor">Get a tractor</NavLink></Menu.Item>
              <Menu.Item key="5"><NavLink to="/projects/wordgame">Word Game</NavLink></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Welcome to Nikolai’s portfolio site</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route exact path="/" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/projects/pantforward" component={Pantforward}/>
                <Route exact path="/projects/getatractor" component={Getatractor}/>
                <Route exact path="/projects/WordGame" component={WordGame}/>
                <Route path="*"><NoMatch /></Route>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2020 Created with React by Nikolai Toverud</Footer>
        </Layout>
      </Layout>
      </HashRouter>
    );
  }
}

function NoMatch() {
  return (
    <div>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button href="/" type="primary">Back Home</Button>}
    />
    </div>
  );
}

export default LayoutFrame;

import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './layout.css';
import profile from '../images/profile.jpg';

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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Avatar size="large" className="logo" src={profile} />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <UserOutlined />
              <span>About</span>
            </Menu.Item>
            <Menu.Item key="9">
              <PhoneOutlined />
              <span>Contact</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <FireOutlined />
                  <span>Projects</span>
                </span>
              }
            >
              <Menu.Item key="3">Pant Forward</Menu.Item>
              <Menu.Item key="4">Get a tractor</Menu.Item>
              <Menu.Item key="5">This site</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<LayoutFrame />, document.getElementById('container'));

export default LayoutFrame;

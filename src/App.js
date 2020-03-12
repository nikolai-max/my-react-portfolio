import React from 'react';
import './App.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <div className="App">
    <Layout>
    <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
);

export default App;

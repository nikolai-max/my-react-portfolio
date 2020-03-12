import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { Typography } from 'antd';
import SiderDemo from './Component/Layout'

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const App = () => (
  <div className="App">
    <SiderDemo></SiderDemo>
  </div>
);

export default App;

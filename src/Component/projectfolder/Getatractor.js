import React, { Component } from "react";
import './projects.css'
import { Modal, Button } from 'antd';
import ReactPlayer from 'react-player'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive'
import { VideoCameraOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import getatractor from '../../images/getatractor.png';
import tractorlogo from '../../images/tractorlogo.png';
import Getatractormob from '../../images/Getatractormob.mp4';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

class Getatractor extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Get a tractor - just get it!</h2>
          <div onClick={this.showModal} class="custom-link"><VideoCameraOutlined /> Video: Get a tractor</div>
          <Mobile><img src={getatractor} className="container-image-mobile" alt="A mobile with the 'Get a tractor' application interface" /></Mobile>
          <Tablet><img src={getatractor} className="container-image-tablet" alt="A mobile with the 'Get a tractor' application interface" /></Tablet>
          <Desktop><img src={getatractor} className="container-image-desktop" alt="A mobile with the 'Get a tractor' application interface" /></Desktop>

          <p>Norway is full of unused tractors. 'Get a tractor' get them used by being the world's first marketplace for swapping tractors. Through the app, you can hire out our tractor, or you can instantly hire a tractor.</p>
          <p>Get a tractor was part of my 5 days 'marketplace' week in the Le Wagon code Bootcamp. The app is made with love together with my partner, Dennis Neely.</p>

          <Mobile><img src={tractorlogo} className="logo-adjustments-mobile" alt="A mobile with the 'Get a tractor' application interface" /></Mobile>
          <Tablet><img src={tractorlogo} className="logo-adjustments-tablet" alt="A mobile with the 'Get a tractor' application interface" /></Tablet>
          <Desktop><img src={tractorlogo} className="logo-adjustments-desktop" alt="A mobile with the 'Get a tractor' application interface" /></Desktop>
          <Button type="link" block href="https://github.com/portlandnorway/airtractor" target="_blank" >
            <FontAwesomeIcon icon={faGithub} />&nbsp;GitHub
          </Button>
        </div>

        <div>
          <Modal
            title="Get a tractor demo video"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
          <ReactPlayer url={Getatractormob}
                  className="video"
                    width="100%"
                    height="100%"
                    controls={true}
                  />

          </Modal>
        </div>
      </div>
    );
  }
}

export default Getatractor;

import React, { Component } from "react";
import getatractor from '../../images/getatractor.png';
import tractorlogo from '../../images/tractorlogo.png';
import Getatractormob from '../../images/Getatractormob.mp4';
import { VideoCameraOutlined } from '@ant-design/icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './projects.css'
import { Modal, Button } from 'antd';
import ReactPlayer from 'react-player'

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
          <Button type="link" block onClick={this.showModal}>
            <VideoCameraOutlined />Video of Get a tractor
          </Button>
          <img src={getatractor} className="container-image" alt="A mobile with the 'Get a tractor' application interface" />

          <p>Get a tractor was part of my 5 days 'markedplace' week in the Le Wagon code bootcamp. The ass is made with love together with my partner, Dennis Neely.</p>
          <p>Norway is full of unused tractors, and Get a tractor get them used by being the worlds first markedplace for swapping tractors.
          Through the app, you can hire out our tractor, or you can instantly hire a tractor.</p>
          <img src={tractorlogo} className="logo-adjustments" alt="Get a tractor logo" />
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

import React, { Component } from "react";
import getatractor from '../../images/getatractor.png';
import tractorlogo from '../../images/tractorlogo.png';
import Pantforwardmob from '../../images/Pantforwardmob.mp4';

import './projects.css'
import { Modal } from 'antd';
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
          <img src={tractorlogo} className="logo-adjustments" alt="Get a tractor logo" />
          <h2>Get a tractor - just get it!</h2>
          <p>Get a tractor was part of my 5 days 'markedplace' week in the Le Wagon code bootcamp. The ass is made with love together with my partner, Dennis Neely.</p>
          <p>Norway is full of unused tractors, and Get a tractor get them used by being the worlds first markedplace for swapping tractors.</p>

          <p>Click on the mobile to open a video of the app.</p>
          <img src={getatractor} className="container-image" onClick={this.showModal} alt="A mobile with the 'Get a tractor' application interface" />
        </div>

        <div>
          <Modal
            title="Pant Forward demo video"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
          <ReactPlayer url={Pantforwardmob}
                  className="video"
                    width="100%"
                    height="100%"
                  />

          </Modal>
        </div>
      </div>
    );
  }
}

export default Getatractor;

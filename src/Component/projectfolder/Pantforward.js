import React, { Component } from "react";
import pantforward from '../../images/pantforward.png';
import Pantforwardmob from '../../images/Pantforwardmob.mp4';

import './projects.css'
import { Modal } from 'antd';
import ReactPlayer from 'react-player'

class Pantforward extends Component {
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
        <div className="container-image">
          <h2>THIS IS PANT FORWARD BABY</h2>
          <p>Pant Forward was part of my 10 days Le Wagon final project together with my partner, Dennis Neely.</p>
          <p>The application is made for making it easier to recycle bottles in Norway.</p>

          <p>Click on the mobile to open a video of the app.</p>
          <img src={pantforward} onClick={this.showModal} alt="A mobile with the 'pantforward' application interface" />
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
                    loop="true"
                    controls="true"
                  />

          </Modal>
        </div>
      </div>
    );
  }
}

export default Pantforward;

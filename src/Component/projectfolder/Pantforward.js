import React, { Component } from "react";
import pantforward from '../../images/pantforward.png';
import Pantforwardmob from '../../images/Pantforwardmob.mp4';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './projects.css'
import { Modal, Button } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
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
        <div>
          <h2>Pant Forward</h2>
          <Button type="link" block onClick={this.showModal}>
            <VideoCameraOutlined />Pant Forward
          </Button>
          <img src={pantforward} className="container-image" alt="A mobile with the 'pantforward' application interface" />
          <p>Pant Forward was part of my 10 days Le Wagon final project together with my partner, Dennis Neely.</p>
          <p>The purpose of the application is to make it easier to recycle bottles in Norway.
          The app connect people who want to throw bottles with people who want to earn some cash.
          Due to our 'pant' system in Norway, any person will get money(by pant) back when delivering bottles back to the store,
          thereby the person can earn a reward by pick up other peoples bottles.</p>
          <Button type="link" block href="https://github.com/portlandnorway/PantForward" target="_blank" >
            <FontAwesomeIcon icon={faGithub} />&nbsp;GitHub
          </Button>
          <Button type="link" block href="https://www.pantforward.com/" target="_blank" >
            <FontAwesomeIcon icon={faHome} />&nbsp;Homepage
          </Button>
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
                    controls={true}
                  />

          </Modal>
        </div>
      </div>
    );
  }
}

export default Pantforward;

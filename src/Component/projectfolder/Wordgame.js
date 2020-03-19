import React, { Component } from "react";
import './projects.css'
import { Modal, Button } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Wordgame from '../../images/wordgame.png';
import Pantforwardmob from '../../images/Pantforwardmob.mp4';

class WordGame extends Component {
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
          <h2>Longest word game</h2>
          <div onClick={this.showModal} class="custom-link"><VideoCameraOutlined /> Video: Word Game</div>
          <img src={Wordgame} className="container-image-mobile" alt="A mobile with the 'pantforward' application interface" />
          <p>The game was part of the full-stack challenges on the Le Wagon Bootcamp.</p>
          <p>The game is simple, you´ll get a random set of words in front of you. Find the longest possible word out of the set of words you are given in the shortest amount of time. The word will be check through a dictionary API. As soon as you submit your word, you will get your score based on length and time.</p>
          <Button type="link" block href="https://github.com/nikolai-max/rails-longest-word-game" target="_blank" >
            <FontAwesomeIcon icon={faGithub} />&nbsp;GitHub
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

export default WordGame;

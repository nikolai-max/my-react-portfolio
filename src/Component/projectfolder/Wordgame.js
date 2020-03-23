import React, { Component } from "react";
import './projects.css'
import { Modal, Button } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive'

import Wordgame from '../../images/wordgame.png';
import wordgamemov from '../../images/wordgamemov.mp4';

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
          <Mobile><img src={Wordgame} onClick={this.showModal} className="container-image-mobile img-margin pointer" alt="A mobile with the 'Wordgame' application interface" /></Mobile>
          <Tablet><img src={Wordgame} onClick={this.showModal} className="container-image-tablet img-margin pointer" alt="A mobile with the 'Wordgame' application interface" /></Tablet>
          <Desktop><img src={Wordgame} onClick={this.showModal}  className="container-image-tablet img-margin pointer" alt="A mobile with the 'Wordgame' application interface" /></Desktop>

          <Mobile>
            <div>
              <p>The game was part of the full-stack challenges on the Le Wagon Bootcamp.</p>
              <p>The game is simple, you´ll get a random set of words in front of you. Find the longest possible word out of the set of words you are given in the shortest amount of time. The word will be check through a dictionary API. As soon as you submit your word, you will get your score based on length and time.</p>
            </div>
          </Mobile>

          <Tablet>
            <div className="container-p-tablet">
              <p>The game was part of the full-stack challenges on the Le Wagon Bootcamp.</p>
              <p>The game is simple, you´ll get a random set of words in front of you. Find the longest possible word out of the set of words you are given in the shortest amount of time. The word will be check through a dictionary API. As soon as you submit your word, you will get your score based on length and time.</p>
            </div>
          </Tablet>
        
          <Desktop>
            <div className="container-p-desktop">
              <p>The game was part of the full-stack challenges on the Le Wagon Bootcamp.</p>
              <p>The game is simple, you´ll get a random set of words in front of you. Find the longest possible word out of the set of words you are given in the shortest amount of time. The word will be check through a dictionary API. As soon as you submit your word, you will get your score based on length and time.</p>
            </div>
          </Desktop>
  
          <Button type="link" block href="https://github.com/nikolai-max/rails-longest-word-game" target="_blank" >
            <FontAwesomeIcon icon={faGithub} />&nbsp;GitHub
          </Button>
        </div>

        <div>
          <Modal
            title="Word game demo video"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
          <ReactPlayer url={wordgamemov}
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

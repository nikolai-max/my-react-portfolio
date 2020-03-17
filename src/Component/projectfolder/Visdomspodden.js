import React, { Component } from "react";
import Iframe from 'react-iframe'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';

import './projects.css'

class Visdomspodden extends Component {
  render() {
    return (
      <div>
        <h2>Visdomspodden</h2>
        <p>I have always been curius about the big questions in life.
        What is a good life? Who am I between thoughts, feelings and urges? How can we live better?
        I try to get answers to these questions through thie podcast, inviting wise minds and experts to answer.</p>
        <p>Here is on sample episode, with Sissel Gran. Norways most cited relationship expert.</p>
        <p>NB! Episodes are in Norwegian</p>
        <Iframe url="//html5-player.libsyn.com/embed/episode/id/7544870/height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/000000/"
        width="100%"
        height="90"
        scrolling="no"
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        oallowfullscreen
        msallowfullscreen
        />
        <Button type="link" block href="https://www.pantforward.com/" target="_blank" >
          <FontAwesomeIcon icon={faPodcast} />&nbsp;All episodes
        </Button>
      </div>
    );
  }
}

export default Visdomspodden;

import React, { Component } from "react";
import Iframe from 'react-iframe'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import { useMediaQuery } from 'react-responsive'

import './projects.css'

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

class Visdomspodden extends Component {
  render() {
    return (
      <div>
        <h2>Visdomspodden</h2>

        <Mobile>
          <div>
            <p>I have always been curious about the big questions in life. What is a good life? Who am I between thoughts, feelings, and urges? How can we live better? I try to get answers to these questions through the podcast, inviting wise minds and experts to answer.</p>
            <p>Here is on sample episode, with Sissel Gran. Norway's most cited relationship expert.</p>
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
          </div>
        </Mobile>

        <Tablet>
          <div className="container-p-tablet">
            <p>I have always been curious about the big questions in life. What is a good life? Who am I between thoughts, feelings, and urges? How can we live better? I try to get answers to these questions through the podcast, inviting wise minds and experts to answer.</p>
            <p>Here is on sample episode, with Sissel Gran. Norway's most cited relationship expert.</p>
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
          </div>
        </Tablet>
  
        <Desktop>
          <div className="container-p-desktop">
            <p>I have always been curious about the big questions in life. What is a good life? Who am I between thoughts, feelings, and urges? How can we live better? I try to get answers to these questions through the podcast, inviting wise minds and experts to answer.</p>
            <p>Here is on sample episode, with Sissel Gran. Norway's most cited relationship expert.</p>
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
          </div>
        </Desktop>

        <Button type="link" block href="https://www.listennotes.com/podcasts/visdomspodden-nikolai-toverud-_PilXgrE8Wk/" target="_blank" >
          <FontAwesomeIcon icon={faPodcast} />&nbsp;All episodes
        </Button>
      </div>
    );
  }
}

export default Visdomspodden;

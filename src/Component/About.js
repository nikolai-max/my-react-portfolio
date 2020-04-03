import React, { Component } from "react";
import { useMediaQuery } from 'react-responsive'

import Demoday from '../images/demoday2.jpg';
import './About.css'

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

class About extends Component {
  render() {
    return (
      <div>
        <img src={Demoday} className="container-demoday" alt="Nikolai presenting his app on Le Wagons demoday" />
        <Mobile><div className="container-p-mobile">
        <h2>Junior frontend developer with business background</h2>
          <p>Since I started to work with technology, I have always wanted to learn to program. After two and a half years in one of Norway's most successful tech startups, I decided to follow my urge. I completed the highly renowned ‘Le Wagon’ Bootcamp In march 2020 and am now open for jobs as a junior frontend developer.</p>
          <p>I'm a tech geek that loves to take projects and solutions that cover real needs out in the market. I have many years of experience with marketing and business development, with good results. I like to be ‘hands-on’ and have an inclusive management style based on my experience in the officer school in the military.</p>
        </div></Mobile>

        <Tablet><div className="container-p-tablet">
        <h2>Junior frontend developer with business background</h2>
          <p>Since I started to work with technology, I have always wanted to learn to program. After two and a half years in one of Norway's most successful tech startups, I decided to follow my urge. I completed the highly renowned ‘Le Wagon’ Bootcamp In march 2020 and are now looking for jobs as a junior frontend developer.</p>
          <p>I'm a tech geek that loves to take projects and solutions that cover real needs out in the market. I have many years of experience with marketing and business development, with good results. I like to be ‘hands-on’ and have an including management style based on my experience from the officer school in the military.</p>
        </div></Tablet>
        
        <Desktop><div className="container-p-desktop">
        <h2>Junior frontend developer with business background</h2>
          <p>Since I started to work with technology, I have always wanted to learn to program. After two and a half years in one of Norway's most successful tech startups, I decided to follow my urge. I completed the highly renowned ‘Le Wagon’ Bootcamp In march 2020 and are now looking for jobs as a junior frontend developer.</p>
          <p>I'm a tech geek that loves to take projects and solutions that cover real needs out in the market. I have many years of experience with marketing and business development, with good results. I like to be ‘hands-on’ and have an including management style based on my experience from the officer school in the military.</p>
        </div></Desktop>
      </div>
    );
  }
}
export default About;

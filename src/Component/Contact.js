import React, { Component } from "react";
import { useMediaQuery } from 'react-responsive'

import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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

class Contact extends Component {
  render() {
    return (
      <div>
      <Mobile>
        <div className="container-p-mobile-about">
          <h2>Get in touch</h2>
          <p>The easiest way to get in touch is to send me a personal message to my LinkedIn profile. You´ll find the link by clicking the LinkedIn icon below.
          </p>
          <div className="card-white">
            <h2>Follow me</h2>
            <ul className="list-inline">
              <li>
                <a href="https://www.linkedin.com/in/nikolaitoverud/" rel='noreferrer noopener' target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://github.com/nikolai-max" rel='noreferrer noopener' target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="http://visdomspodden.libsyn.com/" rel='noreferrer noopener' target="_blank">
                  <FontAwesomeIcon icon={faPodcast} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        </Mobile>

        <Tablet>
        <div className="container-p-mobile-about">
          <h2>Get in touch</h2>
          <p>The easiest way to get in touch is to send me a personal message to my LinkedIn profile. You´ll find the link by clicking the LinkedIn icon below.
          </p>
          <div className="card-white">
            <h2>Follow me</h2>
            <ul className="list-inline">
              <li>
                <a href="https://www.linkedin.com/in/nikolaitoverud/" rel='noreferrer noopener' target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://github.com/nikolai-max" rel='noreferrer noopener' target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="http://visdomspodden.libsyn.com/" rel='noreferrer noopener' target="_blank">
                  <FontAwesomeIcon icon={faPodcast} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        </Tablet>

        <Desktop>
        <div className="container-p-desktop-about">
          <h2>Get in touch</h2>
          <p>The easiest way to get in touch is to send me a personal message to my LinkedIn profile. You´ll find the link by clicking the LinkedIn icon below.
          </p>
          <div className="card-white">
            <h2>Follow me</h2>
            <ul className="list-inline">
              <li>
                <a href="https://www.linkedin.com/in/nikolaitoverud/" rel='noreferrer noopener' target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://github.com/nikolai-max" rel='noreferrer noopener' target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="http://visdomspodden.libsyn.com/" rel='noreferrer noopener' target="_blank">
                  <FontAwesomeIcon icon={faPodcast} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        </Desktop>
      </div>
    );
  }
}

export default Contact;

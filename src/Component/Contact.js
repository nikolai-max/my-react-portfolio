import React, { Component } from "react";
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Get in touch</h2>
        <p>The easiest way is to send me an personal message on my LinkedIn account.
        You´ll find the link by clicking the LinkedIn icon below.
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
    );
  }
}

export default Contact;

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
        <h2>Get in tutch</h2>
        <p>The easiest thing to do is to send me an pm on my LinkedIn account.
        You´ll find the link by clicking the LinkedIn icon below.
        </p>
        <div class="card-white">
          <h2>Follow me</h2>
          <ul class="list-inline">
            <li>
              <a href="https://www.linkedin.com/in/nikolaitoverud/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/nikolai-max" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="http://visdomspodden.libsyn.com/" target="_blank">
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

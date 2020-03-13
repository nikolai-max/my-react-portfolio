import React, { Component } from "react";
import Iframe from 'react-iframe'

import './projects.css'

class Visdomspodden extends Component {
  render() {
    return (
      <div>
        <h2>Visdomspodden</h2>
        <p>Jeg har alltid vært nysgjerrig på de store spørsmålene i livet. Hva er et godt liv? Hvem er jeg blant tanker, følelser og drifter? Hva kan jeg gjøre for å få det bedre? I Visdomspodden forsøker jeg å få svar gjennom å oppsøke og prate med kloke mennesker som har stilt de samme spørsmålene.</p>
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
    );
  }
}

export default Visdomspodden;

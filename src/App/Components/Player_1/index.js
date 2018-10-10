import React, { Component } from "react";
import { store } from "statorgfc";
import reverse from "lodash/reverse";

import Deck from "./Deck";
import Wrath from "./Wrath";

class Player_1 extends Component {
  render() {
    return (
      <React.Fragment>
        <Deck />
        <Wrath />
      </React.Fragment>
    );
  }
}

export default Player_1;

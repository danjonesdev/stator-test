import React, { Component } from "react";
import { store } from "statorgfc";
import reverse from "lodash/reverse";

class Log extends Component {
  constructor() {
    super();
    store.connectComponentState(this, ["GAME"]);
  }

  render() {
    const { GAME } = this.state;
    const { log } = GAME;

    return (
      <div className="log" style={{ background: `url('https://mbtskoudsalg.com/images/old-film-texture-png-1.png')`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
        {log.map((text, i) => <p key={i}>{text}</p>)}
      </div>
    );
  }
}

export default Log;

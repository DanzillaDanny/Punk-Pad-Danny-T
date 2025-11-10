import { useState } from "react";
import React from "react";

const Pedal = () => {
  const [on, setOn] = useState(true); // stomp switch toggles this

  return (
    <div className="pedal">
      {/*change to logo later or different text?*/}
      <div className="pedal-head">Punk Pad</div>

      {/* LED */}
      <div className={`pedal-led ${on ? "" : "off"}`} aria-label={on ? "On" : "Off"} />
      {/* Stomp switch */}
      <div className="pedal-stomp-wrap">
        <button
          type="button"
          className="pedal-stomp"
            aria-pressed={on}
          onClick={() => setOn(v => !v)}
          >
            <img src ="../chromeButton.png" alt="stomp switch" />
          </button>
      </div>
    </div>
  );
};

export default Pedal;

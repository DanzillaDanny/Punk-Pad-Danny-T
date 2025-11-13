import { useState } from "react";
import Knobs from "./KnobSelectors.jsx";

const KEYS = ["C","C#","D","Eb","E","F","F#","G","Ab","A","Bb","B"];

const Pedal = ({bpm, setBpm, keySig, setKeySig}) => {
  const [on, setOn] = useState(true); // stomp switch toggles this

  return (
    <div className="pedal">
      {/*change to logo later or different text?*/}
      <div className="pedal-head">Punk Pad</div>
      <div className="pedal-knobs">
  <Knobs
    label="Key"
    value={Math.max(0, KEYS.indexOf(keySig))}
    min={0}
    max={KEYS.length - 1}
    step={1}
    stops={KEYS.length}
    onChange={(i) => setKeySig(KEYS[i])}
    format={(i) => KEYS[i]}
    size="md"
  />
  <Knobs
    label="BPM"
    value={bpm}
    min={60}
    max={220}
    step={1}
    onChange={setBpm}
    size="md"
  />
</div>

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

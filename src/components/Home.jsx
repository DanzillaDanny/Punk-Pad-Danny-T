import React, { useState, useEffect, useMemo } from "react";
import Pedal from "./Pedal.jsx";
import Transport from "./Transport.jsx";
import { CHORD_TEMPLATES } from "./ChordTemplates.jsx";

//the logic flow of the home page lives here so I can just use App.jsx for routing

const HomePage = () => {
  //state management (useState, useEffect, useMemo)
  const initialGenreKey = Object.keys(CHORD_TEMPLATES)[0];
  const [isPlaying, setIsPlaying] = useState(false);
  const [progression, setProgression] = useState([]);
  const [bpm, setBpm] = useState(142);
  const [keySig, setKeySig] = useState("C");
  const [selectedGenre, setSelectedGenre] = useState(initialGenreKey);
  const [selectedSubGenre, setSelectedSubGenre] = useState('');
  
  //subGenres useMemo and useEffect logic
    const subGenres = useMemo(() => {
    return CHORD_TEMPLATES[selectedGenre] || {};
  }, [selectedGenre]);

  useEffect(() => {
    const firstSubGenreKey = Object.keys(subGenres) [0];
    if (firstSubGenreKey) {
      setSelectedSubGenre(firstSubGenreKey);
    } else {
      setSelectedSubGenre('');
    }
  }, [selectedGenre, subGenres]);

  //Handlers for transport/logic
  const handlePlay = () => setIsPlaying(true);
  const handleStop = () => setIsPlaying(false);
  const handleSave = () => console.log("Saving...");
  const handleExport = () => console.log ("Exporting...");
  const generateProgression = () => {
    if (selectedSubGenre && subGenres[selectedSubGenre]) {
      const templates = subGenres[selectedSubGenre];
      const randomIndex =Math.floor(Math.random() * templates.length);
      setProgression(templates[randomIndex]);
    } else {
      setProgression(["Select a valid genre/sub-genre"]);
   }
  };  


  return (
    // This is the content that appears between Header and Footer
    <main className="container panel-wrap">
      <section className="panel">
        <Pedal bpm={bpm} setBpm={setBpm} keySig={keySig} setKeySig={setKeySig} />
        <Transport
          isPlaying={isPlaying}
          onPlay={handlePlay}
          onStop={handleStop}
          onSave={handleSave}
          onExport={handleExport}
          progression={progression}
          onGenerate={generateProgression}
          genres={Object.keys(CHORD_TEMPLATES)}
          subGenres={Object.keys(subGenres)}
          selectedGenre={selectedGenre}
          selectedSubGenre={selectedSubGenre}
          onGenreChange={setSelectedGenre}
          onSubGenreChange={setSelectedSubGenre}
        />
        <div className="pedal-spacer" />
      </section>
    </main>
  );
};

export default HomePage;

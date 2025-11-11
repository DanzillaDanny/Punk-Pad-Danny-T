// src/App.jsx
import React, { useState, useEffect, useMemo } from "react";
import Header from "./components/Header.jsx";
import Pedal from "./components/Pedal.jsx";
import Transport from "./components/Transport.jsx";
import Footer from "./components/Footer.jsx";
import { CHORD_TEMPLATES } from "./components/ChordTemplates.jsx";

const App = () => {

  const initialGenreKey = Object.keys(CHORD_TEMPLATES)[0];

  const [isPlaying, setIsPlaying] = useState (false);
  const [progression, setProgression] = useState([]);
  //Set initial selected genre to the first key in the template object.
  const [selectedGenre, setSelectedGenre] = useState(initialGenreKey);
  const [selectedSubGenre, setSelectedSubGenre] = useState('');

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
}, [selectedGenre, subGenres]); //runs when selectedGenre is updated

  
//handlers for the transport.
      const handlePlay = () => setIsPlaying(true);
      const handleStop = () => setIsPlaying(false);
      const handleSave = () => console.log("Saving...");
      const handleExport = () => console.log ("Exporting...");

 //the core logic function.
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
<div className="page">
  {/*header/main/footer structure*/}
<Header logo= {<img src="/logo.svg" alt="Logo" className="logo" />} />
<main className="container panel-wrap">
  <section className="panel">
  <Pedal/>
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
<Footer />
<div className="spacer-bottom" />
</div>
  );
};

export default App;



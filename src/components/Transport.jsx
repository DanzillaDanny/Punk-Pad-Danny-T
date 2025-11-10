import React from "react";

const Transport = ({
    isPlaying,
    onPlay,
    onStop,
    onSave,
    onExport,
    progression,
    onGenerate,
    genres,
    subGenres,
    selectedGenre,
    selectedSubGenre,
    onGenreChange,
    onSubGenreChange
}) => {
    return (
        <div className = "transport-window">
             {/*chord display*/}
        <div className = "chord-display">
            {/*display chords separatd or a message if empty*/}
        {progression.length ? progression.join("|") : "No chords yet"}  
        </div>
{/*genre selection controls*/}
<div className = "genre-controls">
    {/*main genre dropdown (uses props */}
<select value={selectedGenre} onChange={(e) => onGenreChange(e.target.value)}>
    {genres.map(genre => (
        <option key={genre} value={genre}>{genre}</option>
    ))}
    </select>
    {/* Sub-Genre Dropdown (uses props) */}
            <select value={selectedSubGenre} onChange={(e) => onSubGenreChange(e.target.value)} disabled={!selectedGenre}>
                {subGenres.map(subGenre => (
                    <option key={subGenre} value={subGenre}>{subGenre}</option>
                ))}
            </select>


        <button onClick={onGenerate}>Generate Chords</button>
        </div>

        <div className = "controls">
        <button onClick = {isPlaying ? onStop : onPlay}>
        {isPlaying ? 'Stop' : 'Play'}
        </button>
        <button onClick = {onSave}>Save</button>
        <button onClick = {onExport}>Export</button>
        </div>
        </div>
    );
};

export default Transport;
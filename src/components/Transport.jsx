import React from "react";

const Transport = ({
    onSave,
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
             {/*chord display container starts here */}
        <div className="chord-display">
            {/*display chords separatd or a message if empty*/}
            {progression.length ? (
                progression.map((chord, index) => (
                    <React.Fragment key={index}>
                    <span key={index} className="chord-letter">{chord}</span>
                    {index<progression.length -1 && (
                    <span className="chord-separator">|</span>
                )}
                </React.Fragment>
            ))
        ):(
           []
            )}
        </div>
        {/*manages transport layout (header controls) */}
        <div className="transport-header-controls">
            
            {/*main genre positioned on the left side of the transport*/}
            <div className="genre-controls">
                {/*main genre dropdown (uses props */}
                <select value={selectedGenre} onChange={(e) => onGenreChange(e.target.value)}>
                    {genres.map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
                {/* Sub-Genre Dropdown */}
                <select value={selectedSubGenre} onChange={(e) => onSubGenreChange(e.target.value)} disabled={!selectedGenre}>
                    {subGenres.map(subGenre => (
                        <option key={subGenre} value={subGenre}>{subGenre}</option>
                    ))}
                </select>
            </div>

            {/* Center: Generate Button (Moved here in its own container) */}
            <div className="center-generate-control">
                <button onClick={onGenerate} className="transport-btn">
                    Generate Chords
                </button>
            </div>


            {/*Play, Save, Export on the top right of transport window.*/}
            <div className="control-buttons">
                {/* Added className="transport-btn" to all buttons here */}
                <button onClick={onSave} className="transport-btn">Add To Favorites</button>
            </div>
        </div>
        </div>
    );
};

export default Transport;
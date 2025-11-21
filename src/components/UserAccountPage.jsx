import React from "react";



const UserAccountPage = ({favorites, onDelete, onRename}) => {
  return (
    // Reusing the signup styles for a consistent card look
    <div className="signup-container"> 
      <section className="signup-form">
        <h2>My Favorite Progressions</h2>
        
        {favorites.length > 0 ? (
          <ul>
        {favorites.map(prog => (
  <li key={prog.id} style={{ marginBottom: '10px' }}>
      {prog.name} ({prog.chords.join(' | ')})
        <button onClick={()=> onRename(prog.id)}>Rename</button>
        <button onClick={()=> onDelete(prog.id)}>Delete</button>
        </li>
        ))}
          </ul>
        ) : (
          <p>You haven't saved any chord progressions yet!</p>
        )}
   
      </section>
    </div>
  );
};

export default UserAccountPage;
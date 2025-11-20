import React, { useState, useEffect } from 'react';

const UserAccountPage = () => {
    
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect runs the API fetching logic when the component loads
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('/api/user/favorites');
        
        if (!response.ok) {
            throw new Error('Failed to fetch favorite progressions.');
        }

        const data = await response.json();
        
        setFavorites(data.progressions);

      } catch (err) {
        setError(err.message);
        console.error("Error fetching favorites:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, []); // The empty array [] ensures this runs only once when the component mounts

  if (isLoading) {
    return <p>Loading your favorites...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  return (
    // Reusing the signup styles for a consistent card look
    <div className="signup-container"> 
      <section className="signup-form">
        <h2>My Saved Progressions</h2>
        
        {favorites.length > 0 ? (
          // Simple unordered list implementation
          <ul>
            {favorites.map(prog => (
              <li key={prog.id} style={{ marginBottom: '10px' }}>{prog.name}</li>
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

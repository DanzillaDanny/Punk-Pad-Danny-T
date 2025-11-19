import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

  //Authorization logic.
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
      });

  if (response.ok) {
    navigate('/Home');
    } else {
  const data = await response.json();
  throw new Error(data.message || "Invalid credentials");
    }
  } catch (err) { 
    setError(err.message || 'A network error occurred.');
      console.error("Login Error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="signup-container"> 
    <section className="signup-form">
      <h2>Log in</h2>
      {/* Display general API errors using the error-text CSS class */}
        {error && <p className="error-text">{error}</p>}

      
      {/* Use handleSubmit for authorization */}
        <form onSubmit={handleSubmit} className="auth__form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} 
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} 
              required minLength={6} 
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? 'Verifying...' : 'Log In'}
          </button>
        </form>

        <p className="signup-link">
          No account? 
          <Link to="/signup" className="link">
            Create one
          </Link>
        </p>
      </section>
    </div>
  );
}; 

export default Login;

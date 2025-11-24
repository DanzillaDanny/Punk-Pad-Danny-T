import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  navigate("/");
  }

  return (
    <div className="signup-container"> 
    <section className="signup-form">
      <h2>Log in</h2>
      {/* Use handleSubmit for authorization */}
        <form onSubmit={handleSubmit} className="auth__form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} 
              required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} 
              required minLength={6}/>
          </div>
          <button type="submit" className="submit-btn">Log In</button>
        </form>
        <p className="signup-link">No account? 
          <Link to="/signup" className="link">Create Account</Link>
        </p>
      </section>
    </div>
  );
}; 

export default Login;

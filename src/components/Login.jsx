import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    // TODO: plug in real auth; for now, pretend success
    console.log("Logged in with:", email);
    // After successful login navigate back to home page
     navigate('/Home');
  }

  return (
    <main className="container panel-wrap"> 
    <section className="panel auth">
      <h2>Log in</h2>
      <form onSubmit={submit} className="auth__form">
        <label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></label>
        <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={6} /></label>
        <button type="submit" className="btn primary">Log in</button>
      </form>
              <p className="auth__swap">
          No account? 
          <Link to="/signup" className="link">
            Create one
          </Link>
        </p>
    </section>
    </main>
  );
}

export default Login;

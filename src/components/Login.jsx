import { useState } from "react";

const Login = ({ onSuccess, onSwap }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    // TODO: plug in real auth; for now, pretend success
    onSuccess?.({ email });
  }

  return (
    <section className="panel auth">
      <h2>Log in</h2>
      <form onSubmit={submit} className="auth__form">
        <label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></label>
        <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={6} /></label>
        <button type="submit" className="btn primary">Log in</button>
      </form>
      <p className="auth__swap">No account? <button type="button" className="link" onClick={onSwap}>Create one</button></p>
    </section>
  );
}

export default function Login;

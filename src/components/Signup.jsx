import { useState } from "react";

const Signup = ({ onSuccess, onSwap }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  function submit(e) {
    e.preventDefault();
    // TODO: real signup; for now, pretend success
    onSuccess?.({ email, dob });
  }

  return (
    <section className="panel auth">
      <h2>Create account</h2>
      <form onSubmit={submit} className="auth__form">
        <label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></label>
        <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={6} /></label>
        <label>Date of birth<input type="date" value={dob} onChange={e=>setDob(e.target.value)} /></label>
        <button type="submit" className="btn primary">Sign up</button>
      </form>
      <p className="auth__swap">Already have an account? <button type="button" className="link" onClick={onSwap}>Log in</button></p>
    </section>
  );
}

export default function Signup;

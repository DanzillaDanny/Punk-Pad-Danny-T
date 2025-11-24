import { useState } from "react";

const Signup = () => {
 // State variables for user input
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default browser page reload
  };

  return (
    <div className= "signup-container">
      {/*onSubmit event handler*/}
      <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Create account</h2>
      <div className="form-group">
        <label>
        Username
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </label>
        </div>
        <div className="form-group"><label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}required/>
        </div>
        <div className="form-group"><label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}required/>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
    </form>
    </div>
  );
};

export default Signup;
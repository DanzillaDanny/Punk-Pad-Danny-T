import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
 // State variables for user input
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // State variables for displaying validation errors to the user
  const [errors, setErrors] = useState({});

const validateForm = () => {
    let newErrors = {};
    // Username Validation
    if (!username.trim()) newErrors.username = 'Username is required.';
    else if (username.length < 6) newErrors.username = 'Username must be at least 6 characters.';

    // Email Validation (basic format check)
    if (!email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email address is invalid.';

    // Password Validation
    if (!password) newErrors.password = 'Password is required.';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
    // You could add regex for complexity here (e.g., must have a number)

    setErrors(newErrors);
    // Return true if the errors object is empty
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default browser page reload

    if (validateForm()) {
      { username, email, password };
      // Clear form fields
      setUsername('');
      setEmail('');
      setPassword('');
      navigate("/"); //take user to home page if login is successful.
    }
  };

  return (
    <div class= "signup-container">
      {/*onSubmit event handler*/}
      <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Create account</h2>
      {/*display general errors in CSS*/}
      {errors.api && <p className="error-text">{errors.api}</p>}
      <div className="form-group">
        <label for="username">Username(min 6 chars)</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}
        required minLength="6"
        />
          {errors.username && <p className="error-text">{errors.username}</p>}
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
        required
        />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-group">
        <label htmlFor="password">Password(min 6 chars)</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
        required minlength="6"
        />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>
        <button type="submit" class="submit-btn">
          Submit
        </button>
    </form>
    </div>
  );
};

export default Signup;



import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 
    setError("");

    try {
      const response = await fetch("http://localhost:5001/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }), 
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Signup Successful! Please log in.");
        setName("");
        setEmail("");
        setPassword("");
        setRole("");
      } else {
        setError(`❌ ${data.message || "Signup failed"}`);
      }
    } catch (error) {
      setError("❌ Server error. Please try again later.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="signup">
      <h2 className="signup-heading">Sign Up</h2>
      
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-label">Name:</label>
        <input 
          className="signup-input" 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name" 
          required 
        />

        <label className="signup-label">Email:</label>
        <input  
          className="signup-input" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          required 
        />

        <label className="signup-label">Password:</label>
        <input  
          className="signup-input" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Create a password" 
          required 
        />
        
        <label className="signup-label">Role:</label>
        <select 
          className="signup-select" 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          required
        >
          <option value="">Select role</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <button className="signup-button" type="submit">Sign Up</button>
      </form>

      <p className="signup-footer">Already have an account? <a href="/front">Login</a></p>
    </div>
  );
};

export default Signup;

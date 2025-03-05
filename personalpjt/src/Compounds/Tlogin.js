import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tlogin.css';

function Tlogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setMessage('login sucessfull');
    // setErrorMessage('something went wrong');

    
    if (!formData.email || !formData.password) {
      setErrorMessage("Both fields are required!");
      return;
    }

    
    setTimeout(() => {
      if (formData.email === 'teacher@example.com' && formData.password === 'teacher123') {
        setMessage("Login successful! Redirecting...");
        setTimeout(() => {
          navigate('/teacher-dashboard');  
        }, 3000);
      } 
      // else {
      //   setErrorMessage("Invalid email or password!");
      // }
    }, 1500);  
  };

  return (
    <div className='form1'>
      <div className='form2'>
    
      <h1 className='heading'><center>Teacher Login</center></h1>
      </div>
   
      <div className='form3'>
      <form onSubmit={handleSubmit}>
        <center>
        <label><center><b>Email:</b></center></label><br></br>
        <input type="email" name="email"value={formData.email} onChange={handleChange}required/><br></br>
        

        <label><center><b>password:</b></center></label><br></br>
        <input type="password"name="password"value={formData.password}onChange={handleChange}required/>
        <br></br>
        {/* <button onClick={handleSubmit}type="submit">Login</button> */}

        <button onClick={()=>navigate('/upload')}type="submit">Login</button>
        </center>
      </form>

      {message && <div className="success-message">{message}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
}

export default Tlogin;

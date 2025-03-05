import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Slogin.css"
export default function Slogin() {


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

   
    setMessage('Login sucessfull');
    
    
    if (!formData.email || !formData.password) {
      setErrorMessage("Both fields are required!");
      return;
    }

    
    setTimeout(() => {
      if (formData.email === 'student@example.com' && formData.password === 'student123') {
        setMessage("Login successful! Redirecting...");
        setTimeout(() => {
          navigate('/student-dashboard');  
        }, 10000);
       }
      
    }, 1500);  
  };

  return (
    <div className='form1'>
    <div className="form2">
      <h1><center>Student Login</center></h1>
      </div>
      <div className='form3'>
      <form onSubmit={handleSubmit}>
        <label><center><b>Email:</b></center></label><br></br>
        <input type="email"name="email"value={formData.email}onChange={handleChange}required/><br></br>
        
      <label><center><b>Password:</b></center></label><br></br>
        <input type="password"name="password"value={formData.password}onChange={handleChange}required/><br></br>
        

        
        <center><button  onClick={()=>navigate('/submit')} type="submit">Login</button></center>
      </form>

      {message && <div className="success-message">{message}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
    </div>
   
  );
}



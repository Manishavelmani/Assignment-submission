import React, { useState } from "react";
import "./Contactus.css"; 

function Contactus() {
  const [formData, setFormData] = useState({
    name: "", 
        email: "", 
            message: "", 
            });
  const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prevData) => ({      ...prevData,[name]: value,}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    alert("Thank you for your message!");
     setFormData({
      name: "",
      email: "",
      message: "",
   });
  };

  return (
    <div className="contact">
      <div className="contact1">
        <h1>Contact Us</h1>
        <p>
          Have questions or need help with the assignment submission or grading
          system? Reach out to us, and we will get back to you as soon as
          possible.
        </p>
      </div>
      <div className="contact2">
        <h3>Email:</h3><p>assignment@gmail.com</p>
        <h3>Phoneno:</h3><p>+91 65239 84523</p>
        <h3>You have any doubt contact the Moblie Number</h3>
      </div>
      <div className="contact3">
      <form onSubmit={handleSubmit}>
            <center>
            <label className='co1'>FirstName</label>
            <input className='c02'type='text'name='name'value={formData.name}onChange={handleChange}/><br></br> 
             <label className='co1'>Email</label>
            <input className='c02' type='email'name='email'value={formData.email}onChange={handleChange}/><br></br>
            <label className='co1'>Comment or Message</label>
            <input className='co2'type='message'name='message'value={formData.message}onChange={handleChange}/><br></br>
            <button>Send Message</button>
           
            </center>
            </form>
      </div>
      </div>

      
  )}
        

export default Contactus;


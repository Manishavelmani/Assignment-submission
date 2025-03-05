import React from 'react'
import "./Home.css";
import { Link, Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div>
         <div className='home1'>
            <div className='home2'>
            <h1>Student Assignment Submission And Grading System</h1> 
            </div>
            </div>
            <div className='page'>
            <div className="home4">
          <nav>
            <Link to="/aboutus">About Us</Link>
          </nav>
        </div>
        <div className="home5">
          <nav>
            <Link to="/contactus">Contact Us</Link>
          </nav>
          </div>
          <div className="home6">
          <nav>
            <Link to="/signup">Signup</Link>
          </nav>
          </div>
          <div className="home7">
          <nav>
            <Link to="/front">Login</Link>
          </nav>
          </div>
          <div className='home9'>
          <nav>
            <Link to="/upload">Assignment</Link>
          </nav>
          </div>
          <div className='home10'>
          <nav>
            <Link to="/submit">Submission</Link>
          </nav>
          </div>
          </div>
          
        <div className='page1'>
            <div className="home3">
            <h1>.</h1> 
            
        </div>
         <div className='des'>
          <h1><center>Descption</center></h1>
          <ul>
            <li>This system aims to streamline the process of assignment submission and grading, making it more efficient for both students and teachers.</li><br></br>
            <li>Students can attach files, input assignment details, and submit securely.</li><br></br>
            <li>Students can view submitted assignments, grades, and feedback.</li><br></br>
            <li>Password-protected user accounts to prevent unauthorized access.</li><br></br>
            <li>Allows students to track their performance over time with a record of past submissions and grades.</li><br></br>
            <li>Teachers can track student progress and identify areas that need improvement.</li><br></br>
          </ul>
              </div> 
           
          
        
        </div>
        
        
            

        
            
           
            
      
        </div>
        
        
    
  )
}

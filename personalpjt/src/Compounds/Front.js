import React from 'react'
import "./Front.css";
import {useNavigate} from 'react-router-dom'
export default function Front() {
    const navigate=useNavigate()

  return (
    <div>
        <div className='fr1'>
            <div className='fr2'>
                <h3>Submit Your assignment In Online</h3>

            </div>
            

            <div className='fr3'>
                <button className='fr4' onClick={()=>navigate('/tlogin')}>Login for Teacher</button> </div>
            <div className='fr3'>
                <button className='fr4'onClick={()=>navigate('/slogin')}>Login for Students</button></div>
        
        </div>

    </div>
  )
}

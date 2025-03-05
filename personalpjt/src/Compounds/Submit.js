

import React, { useState } from 'react'
import './Submit.css';

export default function Submit() {
  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    assignmentFile: null,
    
  });

  const [message, setMessage] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onload = () => {
        setFormData({ ...formData, assignmentFile: reader.result});
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('⏳ Submitting...');

    if (!formData.studentName || !formData.studentId || !formData.assignmentFile) {
        setMessage('⚠️ Please fill in all fields and attach an assignment file.');
        return;
    }

    const submissionData = {
        studentName: formData.studentName,
        studentId: formData.studentId,
        fileData: formData.assignmentFile,
    };

    console.log('📤 Sending data to backend:', submissionData); // Debug log

    try {
        const response = await fetch('http://localhost:5001/submit-assignment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submissionData),
        });

        const result = await response.json();
        console.log('🔄 Server response:', result);

        setMessage(response.ok ? '✅ Assignment submitted successfully!' : `❌ ${result.message || 'Submission failed'}`);

        if (response.ok) {
            setFormData({ studentName: '', studentId: '', assignmentFile: null });
        }
    } catch (error) {
        console.error('❌ Submission Error:', error);
        setMessage('❌ Error submitting assignment. Please try again.');
    }
};
  return (
    <div className="ass">
      <div className='ass1'>
        <h1>Assignment Submission</h1>
      </div>
      <div className='ass2'>
        <form onSubmit={handleSubmit}>
          <center>
            <label htmlFor="studentName">Student Name:</label><br />
            <input type="text" id="studentName" name="studentName" value={formData.studentName} onChange={handleChange} required /><br /><br />

            <label htmlFor="studentId">Student ID:</label><br />
            <input type="text" id="studentId" name="studentId" value={formData.studentId} onChange={handleChange} required /><br /><br />

            <label htmlFor="assignmentFile">Assignment File:</label><br />
            <input type="file" id="assignmentFile" name="assignmentFile" accept=".pdf, .docx, .txt" onChange={handleFileChange} required /><br /><br />

            <button type="submit" className="btn">Submit Assignment</button><br />
          </center>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

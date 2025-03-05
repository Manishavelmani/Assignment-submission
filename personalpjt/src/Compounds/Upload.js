// import React, { useState } from 'react';
// import './Upload.css';

// export default function Upload() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     dueDate: '',
//     fileName: '',
//     fileData: null, // Stores Base64 string
//   });

//   const [message, setMessage] = useState('');

//   // Handle text input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle file selection and convert to Base64
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setFormData({ ...formData, fileName: file.name, fileData: reader.result });
//     };
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5001/upload', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       setMessage(response.ok ? 'Assignment uploaded successfully!' : result.message || 'Upload failed');
//     } catch (error) {
//       setMessage('Error uploading file. Please try again.');
//     }
//   };

//   return (
//     <div className="upload">
//       <div className='up2'>
//       <h1>Upload Assignment</h1>
//       </div>
//       <div className='up3'>
//       <form onSubmit={handleSubmit}>
//         <cenetr>
//         <label>Title:</label>
//         <input type="text" name="title" value={formData.title} onChange={handleChange} required />

//         <label>Description:</label>
//         <textarea name="description" value={formData.description} onChange={handleChange} required />

//         <label>Due Date:</label>
//         <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} required />

//         <label>File:</label>
//         <input type="file" accept=".pdf, .docx, .txt" onChange={handleFileChange} required />

//         <button type="submit">Upload</button>
//         </cenetr>
//       </form>

//       {message && <p className="message">{message}</p>}
//     </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import './Upload.css';

export default function Upload() {
  const [formData, setFormData] = useState({
    
    title: '',
    description: '',
    dueDate: '',
    fileName: '',
    fileData: null,
  });

  const [message, setMessage] = useState('');

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file selection and convert to Base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData({ ...formData, fileName: file.name, fileData: reader.result });
    };
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setMessage(response.ok ? '✅ Assignment uploaded successfully!' : result.message || '❌ Upload failed');
    } catch (error) {
      setMessage('❌ Error uploading file. Please try again.');
    }
  };

  return (
    <div className="upload">
      <h1>Upload Assignment</h1>
      <div className='upload1'>
      <form onSubmit={handleSubmit}>
        
        

        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Description:</label>
        <textarea  className='des' name="description" value={formData.description} onChange={handleChange} required />

        <label>Due Date:</label>
        <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} required />

        <label>File:</label>
        <input type="file" accept=".pdf, .docx, .txt" onChange={handleFileChange} required />

        <button type="submit">Upload</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
    </div>
  );
}

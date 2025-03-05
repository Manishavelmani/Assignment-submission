
 import React from "react";
 import "./Aboutus.css"; 

function Aboutus() {
  return (
    <div className="ab">
    <div className="about">
      <div className="about1">
        <h1>About Us</h1>
        <p>Welcome to our Student Assignment Submission and Grading System!</p>
      </div>
<div className="ad2">
      <div className="about2">
        <h2>Our Vision</h2>
        <p>
          At [System Name], we aim to revolutionize the way assignments are
          submitted, graded, and managed in educational institutions. We
          leverage technology to make the learning process seamless and
          transparent for both students and teachers.
        </p>
      </div>

      <div className="about2">
        <h2>What We Do</h2>
        <p>
          Our platform enables:
          <ul>
            <li>
              <strong>Students</strong> to submit assignments securely, access
              feedback, and view their grades.
            </li>
            <li>
              <strong>Instructors</strong> to grade assignments, provide feedback,
              and track student progress with ease.
            </li>
          </ul>
        </p>
      </div>

      <div className="about2">
        <h2>Key Features</h2>
        <ul>
          <li>Seamless Assignment Submission (multiple file formats supported)</li>
          <li>Customizable Grading Rubrics</li>
          <li>Real-Time Feedback for Students</li>
          <li>Plagiarism Detection to Ensure Academic Integrity</li>
          <li>Performance Analytics for Both Students and Instructors</li>
        </ul>
      </div>

      <div className="about2">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Efficiency in handling assignment submissions and grading.</li>
          <li>Secure system with top-tier data encryption and user authentication.</li>
          <li>Transparency in grading and feedback.</li>
          <li>Reliable customer support for all technical issues.</li>
        </ul>
      </div>

      <div className="about2">
        <h2>Our Commitment</h2>
        <p>
          We are committed to providing a platform that enhances the educational
          experience for students and instructors alike. Our goal is to make the
          process of submitting and grading assignments smoother, faster, and more
          transparent for everyone.
        </p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Aboutus;


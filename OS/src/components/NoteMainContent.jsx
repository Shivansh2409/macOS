import React from "react";
import "./NoteMainContent.scss";

const NoteMainContent = (pop) => {
  function profile() {
    return (
      <div className="main-content">
        <div className="main-content-top">
          <h1>SHIVANSH RATHORE</h1>

          <p>Occupation: Software Engineer</p>
          <p>Location: Lucknow,UP</p>
          <p>
            contact:{" "}
            <a href="mailto:shivanshrathore61@gmai.com">
              shivanshrathore61@gmail.com
            </a>
          </p>
        </div>
        <div className="main-content-bottom">
          <h2>Professional Summary</h2>
          <p>
            Experienced Software Engineer with a strong background in developing
            scalable web applications and working across the full stack.
            Proficient in JavaScript, React, Node.js, and database management.
            Adept at collaborating with cross-functional teams to deliver
            high-quality software solutions.
          </p>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript, React, Node.js</li>
            <li>HTML, CSS, SASS</li>
            <li>RESTful APIs</li>
            <li>Database Management (SQL, NoSQL)</li>
            <li>Version Control (Git)</li>
          </ul>
        </div>
      </div>
    );
  }
  function pro_2() {
    return (
      <div className="project-content">
        <h1>WonderLust – Travel Booking Platform</h1>
        <p>
          WonderLust is a full-stack travel booking platform that allows users
          to explore and book travel experiences worldwide. The application
          features user authentication, dynamic search and filtering of travel
          packages, and a seamless booking process. The backend is built with
          Node.js and Express, while the frontend utilizes React for a
          responsive and engaging user interface.
        </p>
        <h2>Technologies Used:</h2>
        <ul>
          <li>EJS</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>RESTful APIs</li>
          <li>MongoDB</li>
          <li>CSS Modules</li>
          <li>Axios</li>
          <li>Stripe API for Payments</li>
        </ul>
        <h2>Features:</h2>
        <ul>
          <li>User Registration and Login with JWT Authentication</li>
          <li>Browse and Search Travel Packages</li>
          <li>Filter Packages by Destination, Price, and Duration</li>
          <li>Book Travel Experiences with Secure Payment Integration</li>
          <li>User Dashboard to View Bookings and Manage Profile</li>
        </ul>
        <h2>New Learning</h2>
        <p>
          Through this project, I enhanced my skills in building full-stack web
          applications, particularly in implementing secure user authentication
          and integrating third-party payment gateways. I also gained experience
          in designing responsive user interfaces with React and managing state
          effectively.
        </p>
      </div>
    );
  }
  function pro_3() {
    return (
      <div className="project-content">
        <h1>Zerodha Clone – Stock Portfolio Management System</h1>
        <p>
          This project is a full-stack clone of the popular Indian trading
          platform, Zerodha. The goal was to build a secure and intuitive
          application where users can manage their stock investments. The
          application features a complete client-server architecture, from a
          dynamic frontend to a robust backend with secure authentication.
        </p>
        <h2>Technologies Used:</h2>
        <ul>
          <li>React</li>
          <li>Axios</li>
          <li>JWT for Authentication</li>
          <li>CSS Modules for Styling</li>
          <li>MongoDB for Database Management</li>
        </ul>
        <h2>Features:</h2>
        <ul>
          <li>User Registration and Login with JWT Authentication</li>
          <li>View Real-time Stock Prices and Market Data</li>
          <li>Buy and Sell Stocks with Simulated Transactions</li>
          <li>Portfolio Management to Track Investments</li>
          <li>Responsive Design for Desktop and Mobile</li>
        </ul>
        <h2>New Learning</h2>
        <p>
          This project provided me with valuable experience in building secure
          web applications with user authentication using JWT. I also improved
          my skills in React for creating dynamic user interfaces and managing
          application state. Additionally, I gained insights into handling
          real-time data and implementing financial transaction simulations.
        </p>
      </div>
    );
  }

  function pro_4() {
    return (
      <div className="project-content">
        <h1>DavelAI - AI power Coding Platform with Friends</h1>
        <p>
          DavelAI is an innovative coding platform that leverages AI to assist
          developers in writing, debugging, and optimizing code. The platform
          offers real-time code suggestions, error detection, and performance
          improvements using advanced machine learning algorithms. Additionally,
          DavelAI includes collaborative features that allow developers to work
          together on coding projects seamlessly.
        </p>
        <h2>Technologies Used:</h2>
        <ul>
          <li>React for Frontend Development</li>
          <li>Node.js and Express for Backend Services</li>
          <li>WebContainer</li>
          <li>WebSocket for Real-time Collaboration</li>
          <li>MongoDB for Data Storage</li>
        </ul>
        <h2>Features:</h2>
        <ul>
          <li>AI-powered Code Suggestions and Autocompletion</li>
          <li>Real-time Error Detection and Debugging Assistance</li>
          <li>Performance Optimization Recommendations</li>
          <li>Collaborative Coding Environment with Friends</li>
          <li>Version Control Integration</li>
        </ul>
        <h2>New Learning</h2>
        <p>
          Working on DavelAI allowed me to explore the integration of AI and
          machine learning into web applications. I gained experience in
          developing real-time collaborative features using WebSocket and
          enhancing user experience with AI-driven functionalities. This project
          also deepened my understanding of backend development and database
          management.
        </p>
      </div>
    );
  }

  return (
    <>
      {pop.selectedNote === 1 && profile()}
      {pop.selectedNote === 2 && pro_2()}
      {pop.selectedNote === 3 && pro_3()}
      {pop.selectedNote === 4 && pro_4()}
    </>
  );
};

export default NoteMainContent;

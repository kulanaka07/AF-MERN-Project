import React from "react";
import "./css/aboutus.css";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-section">
        <div className="about-us-title">
          <h1>About Us</h1>
        </div>
        <p>
          Welcome to our website! We are a team of dedicated individuals
          passionate about providing high-quality products and services.
        </p>
        <p>
          Our mission is to exceed customer expectations by delivering
          innovative solutions that meet their needs.
        </p>
        <p>
          With years of experience in the industry, we have built a strong
          reputation for our reliability, professionalism, and exceptional
          customer service.
        </p>
        <p>
          At our company, we value integrity, collaboration, and continuous
          improvement. We strive to create a positive impact in the communities
          we serve.
        </p>
        <p>
          Feel free to explore our website and learn more about our offerings.
          If you have any questions or inquiries, don't hesitate to reach out to
          us.
        </p>
        <p>Thank you for choosing us!</p>
        <div className="images-container">
          <img src="../Assets/homePage/logo.jpg" alt="national-logo" />
          <img src="../Assets/homePage/tikiri.jpg" alt="national-logo" />
          <img src="../Assets/homePage/flag.png" alt="sabaragamuwa-flag" />
        </div>
      </div>
    </div>
  );
}

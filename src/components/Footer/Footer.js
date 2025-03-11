import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear(); // 현재 연도 자동 추출

  return (
    <div className="footer">
      <p className="footer-text">© {currentYear} Created by Team.Passione</p>
      <div className="image-container">
        <img 
          src="/teamIcon.png" 
          alt="Team Icon" 
          className="footer-image" 
        />
      </div>
    </div>
  );
}

export default Footer;

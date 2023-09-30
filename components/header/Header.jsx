import React from 'react';
import './Header.css'; // Import your CSS file for styling

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="left-content">
          <img src="../../images/header.jpeg" alt="Collaboration" className="image" />
        </div>
        <div className="right-content">
          <h1>Let's Soar Together</h1>
          <p>Where Collaboration Leads to Achievement</p>
        </div>
      </div>
    </div>
  );
}

export default Header;


import React, { useState } from 'react';
import './NavBar.css';
import LoginModal from '../LoginModal/LoginModal'; // Corrected import

const NavBar = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLoginStatusChange = (isLoggedIn) => {
    setLoginStatus(isLoggedIn);
    setIsModalVisible(false); // Close the modal after login/logout
  };

  const openLoginModal = () => {
    setIsModalVisible(true);
  };


  const storedUser =  JSON.parse(sessionStorage.getItem('user'));

  

  return (
    <header className="header">
      <nav>
        <ul className='navbar fade-in-border'>
          <li>Home</li>
          <li>About</li>
          <li id="Log" onClick={openLoginModal}>
            Login
          </li>
          <p id="PageHeader">Lorka Elearning Portal  </p>
          <img id='logo' src='https://lirp.cdn-website.com/87a49eaf/dms3rep/multi/opt/lorka+logo-126w.png'/>
        </ul>
      </nav>
      
      {/* Conditionally render LoginModal based on isModalVisible */}
      {isModalVisible && (
        <LoginModal closeModal={() => setIsModalVisible(false)} onLoginStatusChange={handleLoginStatusChange} />
      )}
    </header>
  );
};

export default NavBar;

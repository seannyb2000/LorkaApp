import React, { useState } from 'react';
import NavBar from '../NavBar/Navbar';
import LoginModal from '../LoginModal/LoginModal';
import Gateway from './Course_Gateway';

const Home = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
        setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div>
      <NavBar openLoginModal={openLoginModal} />
      {/* Your other content goes here */}
      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}

      <Gateway/>
    </div>
  );
};

export default Home;

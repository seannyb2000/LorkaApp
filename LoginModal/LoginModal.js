import React, { useState, useEffect } from 'react';
import './LoginModal.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBdEIFxdGqch2HGm44pGyvWF6DSfTZjbNU",
  
    authDomain: "lorkaapp.firebaseapp.com",
  
    projectId: "lorkaapp",
  
    storageBucket: "lorkaapp.appspot.com",
  
    messagingSenderId: "118940519647",
  
    appId: "1:118940519647:web:070ba55a327c8d9aeced6a",
  
    measurementId: "G-XTKZD6B1XM"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  
  const analytics = getAnalytics(app);

  const LoginModal = ({ closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      // Initialize Firebase
      const app = firebase.initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
  
      const auth = firebase.auth();
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
  
        // Store user state in sessionStorage
        sessionStorage.setItem('user', JSON.stringify(user));
      });
  
      return () => {
        unsubscribe();
        // Clear user state from sessionStorage when component is unmounted
        sessionStorage.removeItem('user');
      };
    }, []);
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        if (user) {
          await signOut(); // If user is already logged in, perform logout
          alert('User signed out');
        } else {
          await signIn(); // If user is not logged in, perform login
          alert(`User signed in successfully!`);
        }
        // Handle state changes or any other logic here
      } catch (error) {
        alert(`Authentication error: ${error.message}`);
      }
    };
  
    const signIn = () => {
      const auth = firebase.auth();
      closeModal();
      document.getElementById('Log').innerText = 'Logout';
      return auth.signInWithEmailAndPassword(email, password);
    };
  
    const signOut = () => {
      const auth = firebase.auth();
      closeModal();
      document.getElementById('Log').innerText = 'Login';
      return auth.signOut();
    };
  
    // Retrieve user state from sessionStorage
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
  
    var logged = "";
    // Render based on authentication state
    if (storedUser|| user) {
    
        document.getElementById('Log').innerText = 'Logout';
        document.getElementById('sub').innerText = 'Logout';
        document.getElementById('uname').style.display="none"
        document.getElementById('username').style.display="none";
        document.getElementById('psw').style.display="none"
        document.getElementById('password').style.display="none";
        document.getElementById('check').style.display="none"
        document.getElementById('forg').style.display="none";
        document.getElementById('msg').style.display="block";
      } else {
        document.getElementById('Log').innerText = 'Login';
      }
  

  return (
    <div>
    <div id="id01" className="modal">
      <form className="modal-content animate" onSubmit={handleLogin}>
        <div className="imgcontainer">
          <img src="https://lirp.cdn-website.com/87a49eaf/dms3rep/multi/opt/lorka+logo-126w.png" alt="Avatar" className="avatar" />
        </div>
    
        <div className="container">
          <label htmlFor="uname" id='uname'>
            <b>Email</b>
          </label>
          <input
            id='username'
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
    
          <label htmlFor="psw" id="psw">
            <b>Password</b>
          </label>
          <input
          id='password'
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <p id="msg">Are you sure you want to log out?</p>
          <button id='sub' type="submit">Login</button>
          <label id='check'>
            <input  type="checkbox" defaultChecked name="remember" /> Remember me
          </label>
        </div>
    
        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
          <button type="button" onClick={closeModal} className="cancelbtn">
            Cancel
          </button>
          <span id="forg" className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
    </div>
);
};

export default LoginModal;

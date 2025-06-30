import React from 'react';
import { StrictMode } from 'react'
import '../index.css'
import App from '../App'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router";
import './enter.css'
import { 
  // useState,
   useEffect } from 'react';
import { auth } from '../firebase/config'
import { onAuthStateChanged } from "firebase/auth";
import Loading from '../comp/Loading';
const Enter = () => {
  // const [theme, settheme] = useState(localStorage.getItem('themo') ||'Light');
  //   const toggleTheme = () => {
  //     settheme(theme === "Light"? "Dark" : "Light")
  // };
    let navigate = useNavigate();
       useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (!user) {
                    navigate("/signin");
                }
                if (user) {
                  if (!user.emailVerified) {
              navigate("/signup")
            }    
                }
            });   return () => unsubscribe(); // Clean up the listener
        }, [navigate]);

  return (
    <div className='enterbody'>
    
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Modern Product Store</title>
  <link rel="stylesheet" href="enter.css" />
  <style dangerouslySetInnerHTML={{ __html: "\n        \n    " }} />
  <div className="background" />
  <div className="grid-overlay" />
  <div className="neon-glow" />
  <div className="digital-particles" id="particles" />
  <div className="content">
    <h1 className='enterh11'>Digital Secure Shop</h1>

{/* 
      <button className="Finish themebtn" id="themebtn" onClick={() => {
              toggleTheme();
    console.log(theme=='Dark' ? 'Light' : 'Dark');
  localStorage.setItem('themo' ,  (theme=='Dark' ? 'Light' : 'Dark')   )
      }}>
        {theme=='Dark' ? 'Dark' : 'Light'}
      </button> */}

    <p className='enterp1'>
      Experience the beauty of each product with our cutting-edge payment
      systems and secure digital wallet solutions.
    </p>
  <br />
  
    <br /> 
     <div className="credit-card">
      <div className="chip" />
      <div className="hologram" />
      <div className="card-number">4812 •••• •••• 7623</div>
      <div className="card-details">
        <div className="card-holder">JOHN DOE</div>
        <div className="expires">12/28</div>
      </div>    </div>
    <button
      className="cta-button" onClick={() => {
        navigate("/shopping")
      }}
    >
      Get Started
    </button>

  
  
    </div>


    </div>
  );
}

export default Enter;

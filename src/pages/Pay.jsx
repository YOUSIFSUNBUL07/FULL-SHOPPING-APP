import React from 'react';
import { StrictMode } from 'react'
import '../index.css'
import './pay.css'
import Footer from '../comp/Footer';
import App from '../App'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { auth } from '../firebase/config'
// import { useContext } from "react";
import Shopping from "./Shopping";
import { useEffect,useState } from 'react';
// import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
const Pay= () => {
    let navigate = useNavigate();
let totalPrice=localStorage.getItem("totalPrice")
const user = auth.currentUser;
const [theme, settheme] = useState(localStorage.getItem('themo') ||'Light');
  // const toggleTheme = () => {
  //     settheme(theme === "Light"? "Dark" : "Light")
  // };
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/signin");
      }
      if (user) {
            if (!user.emailVerified) {
              navigate("/signup")
            }
      }
    });
    return () => unsubscribe();
  }, [navigate]);


  return (
    <div className={ ` ${theme} app `}
    //  id='paybody'
     >
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link rel="stylesheet" href="Shopping.css" />
  <link rel="stylesheet" href="theme.css" />
  <button className="Finish themebtn" id="themebtn" onClick={() => {
    // toggletheme()
  }}>
    Dark
  </button>
  <div
   id="alor" 
  // className="Finish visibile"
className={ `Finish visibile${theme}`}
  >
    Created By Yousif
  <br />
  
    For Contact: <a href="mailto:Yousif.study4me@gmail.com">Yousif.study4me@gmail.com</a>

    <br />
   Total Price = {totalPrice}; 
         <div className="credit-card"><p id='priceincard'>{totalPrice}$</p> 
      <div className="chip" />
      <div className="hologram" /> 
      <div className="card-number">4812 •••• •••• 7623</div>
      <div className="card-details">
        <div className="card-holder">JOHN DOE</div>
        <div className="expires">12/28</div>
      </div>    </div>

    <button onClick={() => {
      navigate("/shopping")
        localStorage.setItem('totalPrice', 0);
    }}
    className='Finish'
    >Pay</button>
    <br />

    
  </div>
    <Footer/>
  {/* <style>body { transform: scale(1.5); transform-origin: top left; width: 66.6667%; }</style> */}

</>

        </div>
  );
}

export default Pay;

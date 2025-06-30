import React from 'react';
import { StrictMode } from 'react'
import '../index.css'
import './signin.css'
import App from '../App'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import { auth } from '../firebase/config'
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail  } from "firebase/auth";


const Signin = () => {
    const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const auth = getAuth();
      const [hasError, sethasError] = useState(false);
    const [firebaseError, setfirebaseError] = useState("");
const user = auth.currentUser;
  const navigate = useNavigate();
const [theme, settheme] = useState(localStorage.getItem('themo') ||'Light');
  const toggleTheme = () => {
      settheme(theme === "Light"? "Dark" : "Light")
  };


   useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/");
            if (!user.emailVerified) {
              navigate("/signup")
            }
            }
        });   return () => unsubscribe(); // Clean up the listener
    }, [navigate]);
  
  return (
  <div className='enterbody'>

<>
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

      {/* <button className="Finish themebtn" id="themebtn" onClick={() => {
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
<form action="" className='signform'>

    <input  required placeholder=" E-mail : " type="email" className='signinput' onChange={(eo) => {
    
    setemail(eo.target.value)
    console.log(email);
  }} />

    <input  required placeholder=" Password : " type="Password" className='signinput' onChange={(eo) => {
    setpassword(eo.target.value)
    console.log(password);
  }}/>
  <br />
    Don't have an account <Link id='signlink' to="/signup"> Sign-up</Link>
</form>

    <br />
  

    <button
      className="cta-button"
      onClick={() => {


const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);


sethasError(true)


                switch (errorCode) {

                  case "auth/invalid-email":
                    setfirebaseError("Wrong Email")
                    break;


                  case "auth/user-not-found":
                    setfirebaseError("Wrong Email")
                    break;


                  case "auth/wrong-password":
                    setfirebaseError("Wrong Password")
                    break;


                  case "auth/too-many-requests":
                    setfirebaseError("Too many requests, please try aganin later")
                    break;


                  default:
                    setfirebaseError("Please check your email & password")
                    break;

                }




  });

      }}
    >
    Sign-In
    </button>
    <br />


    <form action="" className="forgot">
<div className="close" id='x1' onClick={() => {
  let forgot=document.querySelector(".forgot")
  forgot.style.scale= 0;

  let checkEmail=document.querySelector(".check-email")
  checkEmail.style.display= 'flex';

}}> 
X
 {/* <i className="fa-solid fa-xmark"></i> */}
  </div>
<br />
  <input required placeholder=" E-mail : " type="email" id='resetemailinbox' className='signinput' />
  <br />
  <br />
  <br />
  <br />
  <br />
<button className='Finish' onClick={(eo) => {
  eo.preventDefault()
  let checkEmail=document.querySelector(".check-email")
  checkEmail.style.display= 'block';

  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
  })
  .catch((error) => {
console.log(error);
  });
}}>Reset email</button>
<p className="check-email" >Please check your email inbox to reset your password</p>
</form>



<p id="forget"
             onClick={() => {
  let forgot=document.querySelector(".forgot")
  forgot.style.scale= 1;
  let checkEmail=document.querySelector(".check-email")
  checkEmail.style.display= 'none';
  
}}>Forgot Password?</p>
  {hasError && <h2>{firebaseError}</h2>}
       {/* <div className="credit-card">
      <div className="chip" />
      <div className="hologram" />
      <div className="card-number">4812 •••• •••• 7623</div>
      <div className="card-details">
        <div className="card-holder">JOHN DOE</div>
        <div className="expires">12/28</div>
      </div> */}
    {/* </div> */}
    </div>
</>
    </div>
  );}
export default Signin ;

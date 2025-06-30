

import React from 'react';
import { StrictMode } from 'react'
import '../index.css'
import App from '../App'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword,updateProfile,onAuthStateChanged, sendEmailVerification,signOut  } from "firebase/auth";
import { useState,useEffect } from 'react';
import { auth } from '../firebase/config'
import { useNavigate } from "react-router";


const Signup = () => {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
    const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");
const [theme, settheme] = useState(localStorage.getItem('themo') ||'Light');
  const toggleTheme = () => {
      settheme(theme === "Light"? "Dark" : "Light")
  };

  const auth = getAuth();
const user = auth.currentUser;
  let navigate = useNavigate();
   useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              if (user.emailVerified) {
                      navigate("/");
                console.log(user);
              }
    
            }
  
        });   return () => unsubscribe(); // Clean up the listener
    }, [navigate]);



if (user) {
        if (!user.emailVerified) {
            return( 
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
          {/* <button className="Finish themebtn" id="themebtn" onClick={() => {
              toggleTheme();
    console.log(theme=='Dark' ? 'Light' : 'Dark');
  localStorage.setItem('themo' ,  (theme=='Dark' ? 'Light' : 'Dark')   )
      }}>
        {theme=='Dark' ? 'Dark' : 'Light'}
      </button> */}
    <p className='enterp1 '>
  An email verification link has been sent, please check your email inbox 
    </p>
        <button className='Finish' onClick={() => {
  const auth = getAuth();
sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
}}>Send Again</button>

<button     className='firebutton'
        onClick={() => {
          signOut(auth).catch((error) => console.log(error));
        }}>Sign-out</button>
                  </div>  </div>




            )
          }
}
          if (!user) {
              return(
                
    <div className='enterbody'>
{/* 
          <button className="Finish themebtn" id="themebtn" onClick={() => {
              toggleTheme();
    console.log(theme=='Dark' ? 'Light' : 'Dark');
  localStorage.setItem('themo' ,  (theme=='Dark' ? 'Light' : 'Dark')   )
      }}>
        {theme=='Dark' ? 'Dark' : 'Light'}
      </button> */}

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
    <p className='enterp1'>
      Experience the beauty of each product with our cutting-edge payment
      systems and secure digital wallet solutions.
    </p>
<form action="" className='signform'>

    <input  required placeholder=" Username : " type="text" className='signinput' onChange={(eo) => {
setusername(eo.target.value)
// user.displayName=displayName
console.log(username);

    }}/>

  <input  required placeholder=" E-mail : " type="email" className='signinput' onChange={(eo) => {
    
    setemail(eo.target.value)
    console.log(email);
  }} />

    <input  required placeholder=" Password : " type="Password" className='signinput' onChange={(eo) => {
    setpassword(eo.target.value)
    console.log(password);
  }}/>
  <br />
        <p className="account">
              Already have an account <br /><Link to="/signin" id='signlink'> Sign-in</Link> 
            </p>
</form>

    <br />
    <br />
    <button
      className="cta-button"
      onClick={() => {
        // window.location.href='/Shopping'
createUserWithEmailAndPassword( auth , email, password,updateProfile)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);

const auth = getAuth();
sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });

    updateProfile(auth.currentUser, {
  displayName: username, 
  // photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  console.log(error);
  // An error occurred
  // ...
});
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
    // ..
  });

      }}
    >
      Sign-Up
    </button>
    <br />
{hasError && <h2>{firebaseError}</h2>}
      {/* <div className="credit-card">
      <div className="chip" />
      <div className="hologram" />
      <div className="card-number">4812 •••• •••• 7623</div>
      <div className="card-details">
        <div className="card-holder">JOHN DOE</div>
        <div className="expires">12/28</div>
      </div>
    </div> */}


  </div>
</>





    </div>


              )
            }


  return (

<h1>hi,if you see this page there is an error, you shouldn't ever see this</h1>

  );
} 
export default Signup;
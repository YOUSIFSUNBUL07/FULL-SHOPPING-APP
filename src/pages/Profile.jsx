


import Loading from '../comp/Loading';
import './profile.css'
import { formatDistanceToNow } from 'date-fns';
import Footer from '../comp/Footer';
import React, { useEffect,useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase/config';
import { useNavigate } from "react-router";
import { deleteUser, signOut } from "firebase/auth";
const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [theme, settheme] = useState(localStorage.getItem('themo') ||'Light');
  const toggleTheme = () => {
      settheme(theme === "Light"? "Dark" : "Light")
  };
  const navigate = useNavigate(); 

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
  }, [navigate]); // ✅ top-level effect

  if (loading) return <Loading/>;
  if (error) return <p>Sorry, an error occurred: {error.message}</p>;

  return (

    <div className={`app
     ${theme}`}>
      <br />
      <button className="Finish themebtn" id="themebtn" onClick={() => {
              toggleTheme();
    console.log(theme=='Dark' ? 'Light' : 'Dark');
  localStorage.setItem('themo' ,  (theme=='Dark' ? 'Light' : 'Dark')   )
      }}>
        {theme=='Dark' ? 'Dark' : 'Light'}
      </button>
      
<br /><br />
      <div className='proprofile'>
        <p className='protext' > Name: <b>{user?.displayName || "N/A"}</b></p>
  
        <p className='protext'  > Email:<a href={'mailto:{user?.email}'}> {user?.email}</a></p>

        <p className='protext' > Last Log-In: <b>{formatDistanceToNow(new Date(user.metadata.lastSignInTime), { addSuffix: true })}</b></p>
      
        <p className='protext' > Account Created:     <b>{formatDistanceToNow(new Date(user.metadata.creationTime), { addSuffix: true })}</b></p>
  

<br />
   
      </div>
<br />
<div className='profilebtn'>
      <button className='cta-button' onClick={() => {
        navigate("/shopping")
      }}>Return to page</button>
  <button
        className='cta-button'
        onClick={() => {
          signOut(auth).catch((error) => console.log(error));
        }}
      >
        Log-Out
      </button>

      <button className='cta-button'
        onClick={() => {
          if (user) {
            deleteUser(user)
              .then(() => {
                console.log("User deleted");
                navigate("/signup");
              })
              .catch((error) => console.log(error));
          }
        }}
      >
        Delete Account
      </button>
          <br />    <br />    <br /><br />
<br />    <br />
</div>



  
      <br />
<Footer/>

    </div>
  );
};

export default Profile;

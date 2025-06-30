import React from 'react';
//Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
import { StrictMode } from 'react'
import '../index.css'
import './shopping.css'
import Footer from '../comp/Footer';
import App from '../App'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import lamborgeenee from './Images/lamorgeenee.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import  all  from '@awesome.me/kit-KIT_CODE/icons'
// import {  Fasun } from '@awesome.me/kit-KIT_CODE/icons/'
import { Link, NavLink } from "react-router-dom";
// import { useContext } from 'react';
// import { CartContext } from '../CartContext'
import { useNavigate } from "react-router";
import  house1  from './Images/house1.jpg';
import  house2  from './Images/house2.jpg';
import  s25  from './Images/s25U.jpg';
import promax from './Images/iphone15promax.jpg';
import  laptop  from './Images/Llaptop.jpg';
import  ps5  from './Images/ps5.jpg';
import  applewatch  from './Images/applewatch.jpg';
import  kny  from './Images/KNY.jpg';
import  harry  from './Images/harry.jpg';
import s7 from './Images/s7.jpg' ;
import minecraft from './Images/minecraft.jpg';
import ferrari from './Images/ferrari.jpg';
import marc from './Images/marc.jpg' ;
import oxford from './Images/Oxford.jpg' ;
import ygo from './Images/ygo.jpg' ;
import harvard from './Images/Harvard.jpg' ;
import Photoshop from './Images/Photoshop.jpg' ;
import cart from './Images/cart (1).svg';
import '../mobile-screen.css';
import { useState, useEffect } from 'react';
import { auth } from '../firebase/config'
import {onAuthStateChanged} from "firebase/auth";

const Shopping = () => {
  localStorage.setItem('totalPrice', 0);
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
  const [theme, settheme] = useState(localStorage.getItem('themo') ||'Light');
    const products = [
  { id: 'lamborgeenee', name: 'Lamborghini', price: 60893, image: lamborgeenee },
    { id: 'house1', name: 'Modern House', price: 904507884, image: house1 },
    { id: 'house2', name: 'Modern House 2', price: 8799285, image: house2 },
    { id: 's25', name: 'S25 Ultra', price: 1690, image: s25 },
    { id: 'iphone15', name: 'iPhone 15 Pro Max', price: 2106, image: promax },
    { id: 'RichLaptop', name: 'Premium Laptop', price: 7960, image: laptop  },
    { id: 'ps5', name: 'PlayStation 5', price: 640, image: ps5  },
    { id: 'applewatch', name: 'Apple Watch', price: 820, image: applewatch  },
    { id: 'KNY', name: 'Kimetsu No Yaiba', price: 84, image: kny },
    { id: 'harry', name: 'Harry Potter', price: 125, image: harry },
    { id: 'S7', name: 'Tab S7 Plus', price: 1420, image: s7},
    { id: 'cube', name: 'Minecraft', price: 16, image: minecraft},
    { id: 'ferrari', name: 'Ferrari', price: 535477, image: ferrari },
    { id: 'marc', name: 'Mercedes', price: 66544367, image: marc },
    { id: 'oxford', name: 'Oxford', price: 96854333226, image: oxford },
    { id: 'yugi', name: 'Yugioh', price: 32, image: ygo },
    { id: 'harvard', name: 'Harvard', price: 987456226, image: harvard },
    { id: 'addobe', name: 'Adobe Photoshop', price: 65, image: Photoshop }
  ];
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantities, setQuantities] = useState(Array(products.length).fill(0));
  const [itemTotals, setItemTotals] = useState(Array(products.length).fill(0));




  const toggleTheme = () => {
      settheme(theme === "Light"? "Dark" : "Light")
    
    
  };



  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Number(value);
    setQuantities(newQuantities);
    const newItemTotals = [...itemTotals];
    const itemTotal = newQuantities[index] * products[index].price;
    newItemTotals[index] = itemTotal;
    setItemTotals(newItemTotals);
    const newTotalPrice = newItemTotals.reduce((sum, current) => sum + current, 0);
    setTotalPrice(newTotalPrice);
    
  };
      localStorage.setItem('totalPrice', totalPrice);
  return (
    <div className={`app
     ${theme}`}>

      <button className="Finish themebtn" id="themebtn" onClick={() => {
              toggleTheme();
    console.log(theme=='Dark' ? 'Light' : 'Dark');
  localStorage.setItem('themo' ,  (theme=='Dark' ? 'Light' : 'Dark')   )
      }}>
        {theme=='Dark' ? 'Dark' : 'Light'}
      </button>
<button className='Finish' onClick={() => {
  navigate("/profile")
}}>Account</button>

{/* <FontAwesomeIcon icon="fa-solid fa-sun" style={{color: "#74C0FC",}} />
<FontAwesomeIcon icon="fa-solid fa-sun" />
          <i
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-moon"
        ></i>
        <i
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-sun"
        ></i> */}
        {/* <FontAwesomeIcon icon="fa-solid fa-sun" /> */}




{/*  yousif  */}
      <div id="big">
    <span style={{ cursor: 'pointer' }} onClick={() => navigate('/pay')}>
          <img id="buyPlace" src={cart} alt="Shopping cart" />
        </span>



        <div id="father" >
          {products.map((product, index) => (
            <div className="product" id={product.id} key={product.id}>
              <div className="iprice">{product.price}$</div>
              <img
                id={`${product.id}img`}
                className="product-img "
                src={product.image}
                alt={product.name}
              />
              <br />
              <input
                type="number"
                min="0"
                value={quantities[index]}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
                className="input"
              />
              <div className="atocart">
                Add To Cart {quantities[index]} Items Price = {itemTotals[index]}$
              </div>
            </div>
          ))}
        </div>

      </div>
<Footer/>
    </div>
  );
};

export default Shopping;
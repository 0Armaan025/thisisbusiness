import React from 'react'
import NavBar from '../../components/navbar/Navbar';
import Carousel from '../../components/carousel/Carousel'
import MiddlePart from '../../components/middlepart/Middlepart';
import Footer from '../../components/footer/Footer';
import './homescreen.css';
import { Route, Routes, Router } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
    <NavBar/>
    <Carousel/>
    <MiddlePart/>
    <Footer/>
    </>
  )
}

export default HomeScreen

import React from "react";
import './index.css';
import NavBar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import MiddlePart from "./components/middlepart/Middlepart";

function App() {
  return (
    <>
    <NavBar/>
    <Carousel/>
    <MiddlePart/>
    </>
  );
}

export default App;

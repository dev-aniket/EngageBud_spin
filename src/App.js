// import logo from './logo.svg';
// import './App.css';
import React, {useState, useLayoutEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Spin from "./components/Spin"
import Output from "./components/Output";
import "./index.css"



function App() {

  const[gameResult, setGameResult] = useState('')
  const [windowSize, setWindowSize] = useState([0,0])
  const[showSpin, setShowSpin] = useState(false);
  const [showOutput, setShowOutput] = useState(false);


  const updateWindowSize = () => { 
      setWindowSize([window.innerWidth, window.innerHeight])
  }

  useLayoutEffect(() => {
      window.addEventListener('resize', updateWindowSize);
      updateWindowSize();
      return () => window.removeEventListener('resize', updateWindowSize);
  },[])


  return (
    <>
    <Router>
    <Navbar />
    <Hero windowSize= {windowSize} setShowSpin = {setShowSpin}/>
    <Spin windowSize= {windowSize} setGameResult={setGameResult} setShowOutput = {setShowOutput} showSpin = {showSpin}/>
    <Output windowSize= {windowSize} gameResult = {gameResult} showOutput = {showOutput}/>
    </Router>
    </>

    
  );
}

export default App;

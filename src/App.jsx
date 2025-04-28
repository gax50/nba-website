import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Nba from "./components/Nba";
import Mq1 from './components/Mq';
import Btn from './components/Jouer';
import All from './components/All';
import Photo from './components/Photo';
import Joueur from "./components/Joueur";
import Plaque from "./components/Plaque";
import Section from "./components/Section"
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
      
        <Sidebar />
        
      
        <div className="flex-1 flex flex-col pl-0"> 
          <Navbar  className='z-1000' />
          
          {/* Contenu */}
          <div className="overflow-y-auto flex-1 customa-scroll">
            <Mq1 />
            
            <All />
            <Photo /> 
            <Joueur />
          
           <Nba />
           <Plaque />
           <Section />
            <br />
            <br />
            <br />
            <br />
              
            <Btn className='z-10' />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

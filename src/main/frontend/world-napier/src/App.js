import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {HashRouter as R, Route, Routes} from "react-router-dom";
import Nav from "./Components/Navigators/Nav";
import Home from "./Components/Home";

/**
 * Component
 * @returns {JSX.Element}
 * @constructor,
 */
function App() {

  return (
      <R>
        <div className="App">
          <Nav/>
          <div className='rom-app'>
            <Routes>
              <Route element={<Home/>} path='/'/>
            </Routes>
          </div>
        </div>
      </R>
  );
}

export default App;

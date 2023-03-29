import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

/**
 * Component
 * @returns {JSX.Element}
 * @constructor, fucx s8ke zin
 */
function App() {
  const [text, setText] = useState("")
  useEffect(
      ()=>{
        fetch('app/api/wPopulation').then(res=>res.text()).then(data =>{setText(data)})
      }
  ,[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react'
import logo from './logo.svg';
import './App.css';
// import {FetchData} from './FetchData';
import Fetch from "./fetch";

function App() {
  return (
    <div className="App">
            {/* <FetchData /> */}
            <Fetch url={"https://www.greetingsapi.com/random"}/>
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
          Learn React
        </a>
      </header>
      

    </div>
  );
}

export default App;

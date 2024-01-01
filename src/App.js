// LIBS
import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

// UI & LOGOS
import KawaiiNekoFactBtn from './assets/pictures/kawaii_nekofact_btn.png';
import NekoLogo from './assets/pictures/logo.png';


function App() {
  const [nekoFact, setNekoFact] = useState("");

  // NEKO-FACT FUNC
  const fetchNekoFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setNekoFact(res.data.fact);
    });
  }

  return (
    <div className="App">
      <div className="neko-fact">
        <h1>{nekoFact}</h1>
        <center>
          <button onClick={fetchNekoFact} className='nekofact-btn'>
            <img src={KawaiiNekoFactBtn} alt="lol" />
          </button>
        </center>
      </div>
      <br /><br /><br />
      <footer>
        It's a prototype so wait a bit cat lovers. The app is under development.
        <br />
        <b>&copy; 2023-2024 Neko Senpai</b>
        <br />
        <img className='neko-neko-btn' src={NekoLogo} alt='Neko Neko' />
      </footer>
    </div>
  );
}

export default App;

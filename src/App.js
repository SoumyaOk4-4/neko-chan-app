import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {
  const [nekoFact, setNekoFact] = useState("");

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
          <button onClick={fetchNekoFact} className='neko-btn'>
            Neko Neko
          </button>
        </center>
      </div>
      <br /><br /><br />
      <footer>
      It's a prototype so wait a bit cat lovers. The app is under development.
      <br />
      <b>&copy; 2023 Neko Senpai</b>
      </footer>
    </div>
  );
}

export default App;

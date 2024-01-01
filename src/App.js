// LIBS
import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// UI & LOGOS
import KawaiiNekoFactBtn from './assets/pictures/kawaii_nekofact_btn.png';
import NekoLogo from './assets/pictures/logo.png';


function App() {
  const [nekoFact, setNekoFact] = useState("");
  const [_20, set_20] = useState(0);

  // NEKO-FACT FUNC
  const fetchNekoFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setNekoFact(res.data.fact);
      congrats_20();
    });
  }

  const congrats_20 = () => {
    set_20(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 21) {
        toast.info(`Congratulations! You've read ${_20} Neko(Cat) facts!`);
      }
      return newCount;
    });
  }

  return (
    <div className="App">
      <div className="neko-fact-fullpage">
        <div className='neko-fact-outputbox'>
          <h1>{nekoFact}</h1>
        </div>
        <div>
          <button onClick={fetchNekoFact} className='nekofact-btn'>
            <img src={KawaiiNekoFactBtn} alt="Click Here!" />
          </button>
        </div>
      </div>
      <br /><br />
      <footer>
        It's a prototype so wait a bit cat lovers. The app is under development.
        <br />
        <b>© 2023-2024 Neko Senpai</b>
        <br />
        <img className='neko-neko-btn' src={NekoLogo} alt='Neko Neko' />
      </footer>
    </div>
  );
}

export default App;

// LIBS
import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// UI & LOGOS
import KawaiiNekoFactBtn from './assets/pictures/kawaii_nekofact_btn.png';
import NekoLogo from './assets/pictures/logo.png';


function App() {
  const [nekoFact, setNekoFact] = useState("");
  const [_10, set_10] = useState(0);

  // NEKO-FACT FUNC
  const fetchNekoFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setNekoFact(res.data.fact);
      congrats_10();
    });
  }

  const congrats_10 = () => {
    set_10(_10 + 1);
      if (_10 === 9) {
        toast.success(`Congratulations! You've read ${_10+1} Neko(Cat) facts!`);
      }
    }


  return (
    <div className="App">
      <ToastContainer />  {/* Success after 10 click */}
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

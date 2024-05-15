// LIBS
import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from 'react-loading';

// Others
import KawaiiNekoFactBtn from './assets/pictures/kawaii_nekofact_btn.png';
import NekoLogo from './assets/pictures/logo.png';
import TingAudio from './assets/sounds/ting.mp3';
import NyaAudio from './assets/sounds/nya_nya.mp3';


function App() {
  const [nekoFact, setNekoFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [_10, set_10] = useState(0);

  //Loading
  useEffect(() => {
    const delayTime = 2000;
    const delayLoading = setTimeout(() => {
      setLoading(false);
    }, delayTime);

    return () => clearTimeout(delayLoading);
  }, []);

  // NEKO-FACT FUNC
  const fetchNekoFact = () => {
    Axios
      .get("https://catfact.ninja/fact").then((res) => {
        setNekoFact(res.data.fact);
        congrats_10();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const congrats_10 = () => {
    set_10(_10 + 1);

    if (_10 > 0 && (_10 % 10) === 0) {
      ting();
      toast.success(`You've read ${_10} Neko(Cat)Facts. This is Fact no. ${_10 + 1}!`, { autoClose: 3300, });
    }
    else if (_10 === 29) {
      nya_nya();
      toast.info("You're a Neko Geek now!! 😻", { autoClose: 2500, });
    }
    else if (_10 === 0) {
      ting();
      toast.info("1st Neko Fact! 😺", { autoClose: 2500, });
    }
  }

  const ting = () => {
    const tingAudio = new Audio(TingAudio);
    tingAudio.play();
  }
  const nya_nya = () => {
    const nyaAudio = new Audio(NyaAudio);
    nyaAudio.play();
  }

  return (
    <div className="App">
      <ToastContainer
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
      />
      {loading ? ( // Loading...
        <center>
          <img src={NekoLogo} alt='Neko Neko' className='loading-pic' />
          <Loading type="bars" color="rgb(255, 65, 65)" />
        </center>
      ) : (
        <>
          <div className="neko-heading">
            NEKO NET
          </div>
          <div className="neko-fact-fullpage">
            <div className='neko-fact-outputbox'>
              <h1>{nekoFact}</h1>
            </div>
            <div>
              <button onClick={fetchNekoFact} className='nekofact-btn'>
                <img src={KawaiiNekoFactBtn} alt="Click Here!" id='neko-btn-img' />
              </button>
            </div>
          </div>
          <br /><br />
          <footer>
            It's a prototype so wait a bit cat lovers. The app is under development.
            <br />
            <b>© 2023-2024 Neko Senpai</b>
            <br />
            <img src={NekoLogo} alt='Neko Neko' />
            <br />
            <i>
              Give me a <a href="https://forms.gle/erAJtRTKzQNiLAS5A" target="_blank" rel="noopener noreferrer"><b>Feedback</b></a> 👻
            </i>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;

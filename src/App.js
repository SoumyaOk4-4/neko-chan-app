// LIBS
import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from 'react-loading';

// Components
import Navbar from './components/navbar';

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
    const delayTime = 4000;
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

// congrats funcs
  const congrats_10 = () => {
    set_10(_10 + 1);

    if (_10 > 0 && (_10 % 10) === 0) {
      ting();
      toast.success(`You've read ${_10} Neko Facts. This is Fact no. ${_10 + 1}!`, { autoClose: 3300, });
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

// did you knows
  const dyk = "Did you know:";
  const DYK_arr = [
    dyk + " Neko means cat in japanese!",
    dyk + " You get a notification after 1st Neko fact!",
    dyk + " You get a notification after every 10th Neko fact!",
    dyk + " You get a special notification sound after 30th Neko fact!",
    dyk + " If you reload you'll lost progress of Fact Reading!  :'-(",
    dyk + " The 4 second loading screen is to help you to read 'Did you knows'!",
    dyk + " I made this app because I was in love with someone who likes cats! :'-(",
    dyk + " Clicking on the logo down in NekoNet you can hear a cat meowing!",
  ];
  function getRandom_DYK(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
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
          <br /><br /><br />
          <h4 className='did-you-know'>{getRandom_DYK(DYK_arr)}</h4>
        </center>
      ) : (
        <>
          <div className="neko-heading">
            NekoNet 
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
            The app is under development.
            <br />
            <b>© 2023-2024 Neko Senpai</b>
            <br />
            <button onClick={nya_nya} id='nya_nya'><img src={NekoLogo} alt='Neko Neko' /></button>
            <br />
            <i>
              Give me a <a href="https://forms.gle/erAJtRTKzQNiLAS5A" target="_blank" rel="noopener noreferrer"><b>Feedback</b></a> 👻
            </i>
          </footer>
          <Navbar />
        </>
      )}
    </div>
  );
}

export default App;

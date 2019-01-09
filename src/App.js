import React, { Component } from 'react';
import tVCoverShow1 from './black-mirror-tv-show.jpg';
import tVCoverShow2 from './BreakingBad.jpg';
import tVCoverShow3 from './lightdeathnoteposter.jpg';
import tVCoverShow4 from './GameOfThrones.jpg';
import tVCoverShow5 from './The-Walking-Dead-Season-3.jpg';
import tVCoverShow6 from './TheWire.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="item">
            <img src={tVCoverShow1}  className="tVCover" alt='' />
            <div className='overlay'>
              <h1>Black Mirror</h1>
            </div>
          </div>
          <div class="item">
            <img src={tVCoverShow2} className="tVCover" alt='' />
            <div className='overlay'>
              <h1>Breaking Bad</h1>
            </div>
          </div>
          <div class="item">
            <img src={tVCoverShow3} className="tVCover" alt='' />
            <div className='overlay'>
              <h1>Death Note</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="item">
            <img src={tVCoverShow4} className="tVCover" alt='' />
            <div className='overlay'>
              <h1>GOT</h1>
            </div>
          </div>
          <div class="item">
            <img src={tVCoverShow5} className="tVCover" alt='' />
            <div className='overlay'>
              <h1>Walking</h1>
            </div>
          </div>
          <div class="item">
            <img src={tVCoverShow6} className="tVCover" alt='' />
            <div className='overlay'>
              <h1>The Wire</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

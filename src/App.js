import React, { Component } from 'react';
import tvShow1 from './black-mirror-tv-show.jpg';
import tvShow2 from './BreakingBad.jpg';
import tvShow3 from './lightdeathnoteposter.jpg';
import tvShow4 from './GameOfThrones.jpg';
import tvShow5 from './The-Walking-Dead-Season-3.jpg';
import tvShow6 from './TheWire.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="item">
            <img src={tvShow1} alt='' />
          </div>
          <div class="item">
            <img src={tvShow2} className="TV" alt='' />
          </div>
          <div class="item">
            <img src={tvShow3} className="TV" alt='' />
          </div>
        </div>
        <div class="container">
          <div class="item">
            <img src={tvShow4} className="TV" alt='' />
          </div>
          <div class="item">
            <img src={tvShow5} className="TV" alt='' />
          </div>
          <div class="item">
            <img src={tvShow6} className="TV" alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

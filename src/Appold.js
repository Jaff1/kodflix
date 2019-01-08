import React, { Component } from 'react';
import logo from './pulpFiction.jpg';
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
        <header className="App-header">
        <div class="row">
          <div align="center" class="column">
            <h3>Black Mirror</h3>
          </div>
           <div align="center" class="column">
          <h3>Braking Bad</h3>
          </div>
           <div align="center" class="column">
            <h3>Death Note</h3>
          </div>
        </div>
   <div class="row">
           <div align="center" class="column">
          <h3>Game of Thones</h3>
          </div>
           <div align="center" class="column">
          <h3>The Walking Dead</h3>
          </div>
           <div align="center" class="column">
          <h3>The Wire</h3>
          </div>
        </div>
        </header>
      </div>
    );
  }
}

export default App;

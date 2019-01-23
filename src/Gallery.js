import React from 'react';
import TVShow from './TVShow';

import blackMirror from './black-mirror-tv-show.jpg';
import breakingBad from './BreakingBad.jpg';
import deathNote from './lightdeathnoteposter.jpg';
import gameOfThrones from './GameOfThrones.jpg';
import walkingDead from './The-Walking-Dead-Season-3.jpg';
import wire from './TheWire.jpg';

export default function Gallery(props) {
    return (
    <div>
        <div class="container">
            <TVShow id = 'blackMirror' name='Black Mirror' cover={blackMirror} />
            <TVShow id = 'breakingBad' name='Breaking Bad' cover={breakingBad} />
            <TVShow id = 'deathNote' name='Death Note' cover={deathNote} />
            <TVShow id = 'gameofThrones' name='Game of Thrones' cover={gameOfThrones} />
            <TVShow id = 'deadWalkers' name='Dead Walkers' cover={walkingDead} />
            <TVShow id = 'wire' name='Wire' cover={wire} />
        </div>
    </div>
    )
}

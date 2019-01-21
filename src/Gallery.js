import React from 'react';
import TVShow from './TVShow';

import tVCoverShow1 from './black-mirror-tv-show.jpg';
import tVCoverShow2 from './BreakingBad.jpg';
import tVCoverShow3 from './lightdeathnoteposter.jpg';
import tVCoverShow4 from './GameOfThrones.jpg';
import tVCoverShow5 from './The-Walking-Dead-Season-3.jpg';
import tVCoverShow6 from './TheWire.jpg';

export default function Gallery(props) {
    return (
    <div>
        <div class="container">
            <TVShow id = 'blackMirror' name='Black Mirror' cover={tVCoverShow1} />
            <TVShow id = 'breakingBad' name='Breaking Bad' cover={tVCoverShow2} />
            <TVShow id = 'deathNote' name='Death Note' cover={tVCoverShow3} />
        </div>
        <div class="container">
            <TVShow id = 'gameofThrones' name='Game of Thrones' cover={tVCoverShow4} />
            <TVShow id = 'deadWalkers' name='Dead Walkers' cover={tVCoverShow5} />
            <TVShow id = 'wire' name='Wire' cover={tVCoverShow6} />
        </div>
    </div>
    )
}

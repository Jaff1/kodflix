import blackMirror from './black-mirror-tv-show.jpg';
import breakingBad from './BreakingBad.jpg';
import deathNote from './lightdeathnoteposter.jpg';
import gameOfThrones from './GameOfThrones.jpg';
import walkingDead from './The-Walking-Dead-Season-3.jpg';
import wire from './TheWire.jpg';
// Introduce component state #13


export default function getGallery() {
    return [
        { id: 'blackMirror', name: 'Black Mirror', cover: blackMirror },
        { id: 'breakingBad', name: 'Breaking Bad', cover: breakingBad },
        { id: 'deathNote', name: 'Death Note', cover: deathNote }, 
        { id: 'gameofThrones', name: 'Game of Thrones', cover: gameOfThrones },
        { id: 'deadWalkers', name: 'Dead Walkers', cover: walkingDead },
        { id: 'wire', name: 'Wire', cover: wire }
    ]
}
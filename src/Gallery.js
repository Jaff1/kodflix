import React from 'react';
import TVShow from './TVShow';
import getGallery from './Gallery-get';

export default function Gallery(props) {
    return (
    <div>
        <div class="container">
        {
            getGallery().map(tVShow => (
                <TVShow 
                  key={tVShow.id} 
                  id={tVShow.id} 
                  name={tVShow.name} 
                  cover={tVShow.cover} />
            ))
        }
        </div>
    </div>
    )
}


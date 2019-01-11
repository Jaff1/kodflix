import React from 'react';
export default function TVShow (props) {
    return (<div class="item">
    <img src={props.cover}  className="tVCover" alt='' />
    <div className='overlay'>
      <h1>{props.name}</h1>
    </div>
    </div>)
    }
    
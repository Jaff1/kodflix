import React from 'react';
import { Link } from 'react-router-dom';

export default function TVShow(props) {
    return (
        <Link to={`/${props.id}`} className="item">
            <img src={props.cover} className="tVCover" alt='' />
            <div className='overlay'>
                <h1>{props.title}</h1>
            </div>
        </Link>)
}

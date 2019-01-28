
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import getGallery from './Gallery-get';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            show: {}
        };
    }

    componentDidMount() {
        let showId = this.props.match.params.showId; 
        let show = getGallery()
            .find((show) => show.id === showId);
        this.setState({ show });        
    }

    render() {
        return (
            <div>
                <h1>{this.state.show.name}</h1>
                <Link to='/'>Back to home page</Link>
            </div>
        );
    }
}
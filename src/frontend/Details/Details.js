
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../Gallery-get';

import './Details.css';

export default class Details extends Component {

	constructor() {
		super();
		this.state = {
			show: {}
		};
	}

	componentDidMount() {
		fetch('/rest/shows')
			.then(response => response.json())
			.then(shows => {
				let showId = this.props.match.params.showId;
				let show = shows.find((show) => show.id === showId);
				this.setState({ show });
			});
	}

	render() {
		if (this.state.show === undefined) {
			return <Redirect to='/not-found' />;
		} else {
			return (
				<div className='Details'>
					<h1>{this.state.show.name}</h1>
					<div className='content'>
						<div className='text'>
							{this.state.show.synopsis}
						</div>
						<img
							className='image'
							src={require(`..\/..\/common/images/${this.state.show.coverImg}.jpg`)}
							alt={this.state.show.name} />
					</div>
					<Link to='/'>Back to home page</Link>
				</div>
			);
		}
	}
}
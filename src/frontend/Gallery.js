import React, { Component } from 'react';
import TVShow from './TVShow';
import getGallery from './Gallery-get';

export default class Gallery extends Component {

	constructor() {
		super();
		this.state = {
			loadingMessage: 'Loading JafFlix show data dudes'
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loadingMessage: 'Loading JafFlix show data man'
			});
		}, 3000);
	}

	render() {
		return (
			<div>
				<div className="container">
					<h1>{this.state.loadingMessage}</h1>
					{
						getGallery().map(tVShow => (
							<TVShow
								key={tVShow.id}
								id={tVShow.id}
								title={tVShow.name}
								cover={tVShow.cover} />
						))
					}
				</div>
			</div>
		);

	}
}
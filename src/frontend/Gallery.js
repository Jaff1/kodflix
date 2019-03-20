import React from 'react';
import TVShow from './TVShow';

export default class Gallery extends React.Component {

	constructor() {
		super();
		this.state = { shows: [] };
	}

	componentDidMount() {
		fetch('/rest/shows')
			.then(response => response.json())
			.then(shows => this.setState({ shows }));
	}

	render() {
		return (
			<div>
				<div className="container">
					{
						this.state.shows.map(tVShow => (
							<TVShow
								key={tVShow.id}
								id={tVShow.id}
								title={tVShow.title}
								coverImg={tVShow.coverImg} />
						))
					}
				</div>
			</div>
		);
	}
}

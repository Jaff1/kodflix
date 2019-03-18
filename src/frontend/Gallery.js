import React, { Component } from 'react';
import TVShow from './TVShow';
import getGallery from './Gallery-get';

export default class Gallery extends Component {

	constructor() {
		super();
		this.state = {
			loadingMessage: 'Loading JafFlix show data dudes',
			shows: [
				{
					id: 'black-mirror',
					title: 'Black Mirror',
					synopsis: 'An anthology series exploring a twisted, high-tech world where humanity\'s greatest innovations and darkest instincts collide.'
				},
				{
					id: 'breakingBad',
					title: 'Breaking Bad',
					synopsis: 'A once loyal father and chemistry teacher, Walter White, turns to a life of crime due to developing stage 3 terminal lung cancer. He is told he has two years to live. ... Breaking Bad follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy.'
				},
				{
					id: 'deathNote',
					title: 'Death Note',
					synopsis: 'Light Yagami (Tatsuya Fujiwara) is a normal, undistinguished college student -- that is, until he discovers an odd notebook lying on the ground. He soon discovers that the notebook has magic powers: If someone\'s name is written on it while the writer imagines that person\'s face, he or she will die. Intoxicated with his new godlike power, Light kills those he deems unworthy of life. But a mysterious detective known only as L (Ken\'ichi Matsuyama) becomes determined to put a stop to his reign.'
				},
			]
		};
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
					<h1>{this.state.loadingMessage}</h1>
					{
						this.state.shows.map(tVShow => (
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
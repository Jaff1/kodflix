import React from 'react';
import { Link } from 'react-router-dom';

export default class TVShow extends React.Component {

	render() {
		let { id, title, coverImg } = this.props;
		return (
			<Link to={`/${id}`} className="item">
				<img src={require(`./common/images/${coverImg}.jpg`)} className="tVCover" alt='' />
				<div className='overlay'>
					<h1>{title}</h1>
				</div>
			</Link>);
	}
}
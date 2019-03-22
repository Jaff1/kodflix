import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div>
			<h1> Sorry....The page doesn't exist :-( </h1>
			<Link to='/'>Back to home page</Link>
		</div>
	);
}
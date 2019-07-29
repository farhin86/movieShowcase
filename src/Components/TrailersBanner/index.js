import React, { Component } from 'react';
import './index.css';

export default class TrailerBanner extends Component {
	render() {
		return (
			<div className='trailers-banner'>
				<img src={'https://in.bmscdn.com/events/moviecard/ET00015426.jpg'} className='trailers-image' />
			</div>
		);
	}
}

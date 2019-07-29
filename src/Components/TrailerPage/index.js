import React, { Component } from 'react';
import './index.css';
import TrailersBanner from '../TrailersBanner';
import axios from 'axios';

export default class TrailerPage extends Component {
	state = {
		bannerData: {}
	};
	componentDidMount() {
		// let url= 'https://api.myjson.com/bins/hqa19';
		let url = 'https://api.myjson.com/bins/17pg09';
		axios
			.get(url)
			.then(res => {
				console.log(res);
				this.setState({
					bannerData: res.data[1]
				});
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		let { bannerData } = this.state;
		console.log('bannerData', bannerData);
		return (
			<div className='trailers-page'>
				<TrailersBanner image={'ET00015426'} />
			</div>
		);
	}
}

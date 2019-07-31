import React, { Component } from 'react';
import './index.css';
import TrailersBanner from '../TrailersBanner';
import axios from 'axios';
import VideoDetails from '../VideoDetails';

export default class TrailerPage extends Component {
	state = {
		bannerData: {},
		playId: null,
		playVideoCode: null
	};
	componentDidMount() {
		// let url= 'https://api.myjson.com/bins/hqa19';
		let url = 'https://api.myjson.com/bins/17pg09';
		axios
			.get(url)
			.then(res => {
				// console.log(res);
				this.setState({
					bannerData: res.data[1]
				});
			})
			.catch(err => {
				console.log(err);
			});
	}
	playVideoCode = (videoCode, index) => {
		console.log(videoCode, index);
		this.setState({
			playId: index,
			playVideoCode: videoCode
		});
	};
	render() {
		let { bannerData, playId, playVideoCode } = this.state;
		// console.log('bannerData', bannerData);
		return (
			<div className='trailers-page'>
				{bannerData &&
					Object.keys(bannerData).map((key, index) => {
						return (
							<div className='video-banner' key={key + index}>
								{playId === index ? (
									<VideoDetails
										playVideoCode={playVideoCode}
										closeVideo={() => {
											this.setState({ playId: null });
										}}
									/>
								) : (
									''
								)}
								<TrailersBanner
									image={key}
									id={index}
									data={bannerData[key]}
									videoClosed={playId}
									playVideoCode={videoCode => this.playVideoCode(videoCode, index)}
								/>
							</div>
						);
					})}
				<VideoDetails
					playVideoCode={playVideoCode ? playVideoCode : 'https://www.youtube.com/watch?v=BuZRJZ5FVM4'}
					closeVideo={() => {
						this.setState({ playId: null });
					}}
				/>
			</div>
		);
	}
}

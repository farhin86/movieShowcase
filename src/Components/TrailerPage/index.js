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
		let url = 'https://api.myjson.com/bins/sfnkh';
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
	playVideoCode = (videoCode, index) => {
		console.log(videoCode, index);
		this.setState({
			playId: index,
			playVideoCode: videoCode
		});
	};
	render() {
		let { bannerData, playId, playVideoCode } = this.state;
		let dataAll = Object.keys(bannerData);
		let numOfBanner = 6;
		let count = 0;
		let dataAllWith6 = [];
		let data6 = [];
		dataAll.map((id, index) => {
			if (index === dataAll.length - 1 && count < numOfBanner) {
				data6.push(id);
				dataAllWith6.push(data6);
			} else if (index === dataAll.length - 1) {
				data6 = [];
				data6.push(id);
				dataAllWith6.push(data6);
			} else if (count < numOfBanner) {
				count++;
				return data6.push(id);
			} else {
				dataAllWith6.push(data6);
				data6 = [];
				count = 1;
				return data6.push(id);
			}
		});
		//[ [1,2,3,4,5,6], [7,8,9,10,11,12], []]
		// console.log({ bannerData, dataAll, dataAllWith6 });
		return (
			<div className='trailers-page'>
				{dataAllWith6 &&
					dataAllWith6.map((data6, indexFirst) => {
						console.log({ data6, indexFirst });
						return (
							<div className='row-video-banner'>
								{playId === indexFirst ? (
									<VideoDetails
										playVideoCode={playVideoCode}
										closeVideo={() => {
											this.setState({ playId: null });
										}}
									/>
								) : (
									''
								)}
								<div className='each-row'>
									{data6.map((eachId, indexSecond) => {
										console.log({ eachId, indexSecond });
										return (
											<TrailersBanner
												indexFirst={indexFirst}
												image={eachId}
												indexSecond={indexSecond}
												data={bannerData[eachId]}
												videoClosed={playId}
												playVideoCode={videoCode => this.playVideoCode(videoCode, indexFirst)}
											/>
										);
									})}
								</div>
							</div>
						);
					})}
			</div>
		);
	}
}

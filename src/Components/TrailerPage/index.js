import React, { Component } from 'react';
import './index.css';
import TrailersBanner from '../TrailersBanner';
import axios from 'axios';
import VideoDetails from '../VideoDetails';

export default class TrailerPage extends Component {
	state = {
		bannerData: {},
		playId: null,
		playVideoCode: null,
		width: null,
		numOfBanner: 6,
		videoDetails: null
	};
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		let width = window.innerWidth;
		let numOfBanner;
		if (width <= 587) {
			numOfBanner = 2;
		} else if (width <= 846) {
			numOfBanner = 3;
		} else if (width <= 1094) {
			numOfBanner = 4;
		} else if (width <= 1317) {
			numOfBanner = 5;
		} else if (width <= 1440) {
			numOfBanner = 6;
		}
		this.setState({ numOfBanner: numOfBanner });
	};

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
		let url = 'https://api.myjson.com/bins/hqa19';
		// let url = 'https://api.myjson.com/bins/sfnkh';
		// let url = 'https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs';
		axios
			.get(url)
			.then(res => {
				this.setState({
					bannerData: res.data[1]
				});
			})
			.catch(err => {
				console.log(err);
			});
	}
	playVideoCode = (videoCode, id, index) => {
		this.setState({
			playId: index,
			playVideoCode: videoCode,
			videoDetails: id
		});
	};
	render() {
		let { bannerData, playId, playVideoCode, numOfBanner, videoDetails } = this.state;

		let dataAll = Object.keys(bannerData),
			count = 0,
			dataAllWith6 = [],
			data6 = [];
		dataAll.map((id, index) => {
			if (index === dataAll.length - 1 && count < numOfBanner) {
				data6.push(id);
				return dataAllWith6.push(data6);
			} else if (index === dataAll.length - 1) {
				data6 = [];
				data6.push(id);
				return dataAllWith6.push(data6);
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
		// console.log(videoDetails, bannerData[videoDetails]);
		return (
			<div className='trailers-page'>
				{dataAllWith6 &&
					dataAllWith6.map((data6, indexFirst) => {
						// console.log({ data6, indexFirst });
						return (
							<div className='row-video-banner' key={'array' + indexFirst}>
								{playId === indexFirst ? (
									<VideoDetails
										playVideoCode={playVideoCode}
										closeVideo={() => {
											this.setState({ playId: null });
										}}
										videoDetails={bannerData[videoDetails]}
									/>
								) : (
									''
								)}
								<div className='each-row'>
									{data6.map((eachId, indexSecond) => {
										return (
											<TrailersBanner
												videoClosed={playId}
												image={eachId}
												indexSecond={indexSecond}
												data={bannerData[eachId]}
												RunningVideoCode={playVideoCode}
												playVideoCode={(videoCode, id) =>
													this.playVideoCode(videoCode, id, indexFirst)
												}
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

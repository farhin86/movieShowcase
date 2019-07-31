import React, { Component } from 'react';
import './index.css';
import playIcon from '../../assets/images/download.png';

export default class TrailerBanner extends Component {
	state = {
		playTrailer: false
	};
	playTrailer = () => {
		this.setState({
			playTrailer: true
		});
		this.props.playVideoCode(this.props.data['TrailerURL'], this.props.image);
	};
	render() {
		let { image, data, RunningVideoCode, videoClosed } = this.props;

		let monthCap = data['DispReleaseDate']
				.split(' ')[0]
				.split('')
				.slice(0, 3)
				.join(''),
			month = monthCap.toLowerCase(),
			monthFinal = month.charAt(0).toUpperCase() + month.substring(1),
			day = data['DispReleaseDate'].split(' ')[1].substr(0, 2);
		return (
			<div className='trailer-banner-name'>
				<div
					className='trailers-banner'
					style={
						this.state.playTrailer && data['TrailerURL'] === RunningVideoCode && videoClosed != null
							? {
									backgroundImage: `url('https://in.bmscdn.com/events/moviecard/${image}.jpg')`,
									border: '2.5px solid #16dcb1d1'
							  }
							: { backgroundImage: `url('https://in.bmscdn.com/events/moviecard/${image}.jpg')` }
					}
				>
					<div className='release'>
						<div />
						<div className='release-date'>
							<div className='day'> {day}</div>
							<div className='month'> {monthFinal}</div>
						</div>
					</div>
					<div className='icon'>
						<div />
						{this.state.playTrailer && data['TrailerURL'] === RunningVideoCode && videoClosed != null ? (
							''
						) : (
							<img src={playIcon} alt='' className='play-icon' onClick={this.playTrailer} />
						)}
						<div />
					</div>
					<div className='like-part'>
						<div />
						<div className='liked'>
							<div className='liked-percent'>{data['avgRating']} %</div>
							<div className='liked-votes'>{data['totalVotes']} votes</div>
						</div>
					</div>
				</div>
				<div className='trailers-name'>{data['EventTitle']}</div>
			</div>
		);
	}
}

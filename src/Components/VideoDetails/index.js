import React, { Component } from 'react';
import './index.css';
import cancel from '../../assets/images/cancel.png';
import willWatch from '../../assets/images/willwatch.png';
import maybe from '../../assets/images/maybe.png';
import wontWatch from '../../assets/images/wontwatch.png';
import likes from '../../assets/images/likes.png';
import date from '../../assets/images/date.png';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

export default class VideoDetails extends Component {
	render() {
		let { playVideoCode } = this.props;

		let videoId = playVideoCode.split('=')[1].split('&')[0];
		console.log('playVideoCode', playVideoCode, videoId);
		const opts = {
			height: '450px',
			width: '100%',
			playerVars: {
				autoplay: 1
			}
		};
		return (
			<div className='video-page'>
				<div className='video'>
					<YouTube videoId={videoId} opts={opts} onReady={this._onReady} />
				</div>
				<div className='video-details'>
					<div className='details-text'>
						<div className='details-title-cancel'>
							<div className='details-title'>Venom</div>
							<img src={cancel} alt='cancel' className='cancel' onClick={this.props.closeVideo} />
						</div>
						<div className='details-language'>ENGLISH</div>
						<div className='type'>
							<div className='type1'>ACTION</div>
							<div className='type1'>SCIFI</div>
						</div>

						<div className='details-like'>
							<img src={likes} alt='likes' className='likes' onClick={this.props.closeVideo} />
							<div className='like'>
								<div className='percent'>100%</div>
								<div className='vote'>92936 votes</div>
							</div>
							<img src={date} alt='date' className='date-img' onClick={this.props.closeVideo} />
							<div className='bla-date'>
								<div className='date'>5 Aug</div>
								<div className='year'>2018</div>
							</div>
						</div>
						<div className='details-desc'>
							After their plain craches in Alaska, six oil workers are led by a, skilled huntsman to
							survival, but a pack of merciless wolves haunts their every step
						</div>
						<div className='more'>Read more</div>
					</div>
					<div className='details-icon'>
						<img src={willWatch} alt='willWatch' className='will-watch' />
						<img src={maybe} alt='maybe' className='maybe' />
						<img src={wontWatch} alt='wontWatch' className='wont-watch' />
					</div>
				</div>
			</div>
		);
	}
}

// VideoDetails.defaultProps = {
// 	playVideoCode: 'KJQjOozn8pk'
// };
// VideoDetails.propTypes = {
// 	playVideoCode: PropTypes.string
// };

import React, { Component } from 'react';
import './index.css';
import cancel from '../../assets/images/cancel.png';
import willWatch from '../../assets/images/willwatch.png';
import maybe from '../../assets/images/maybe.png';
import wontWatch from '../../assets/images/wontwatch.png';

export default class VideoDetails extends Component {
	render() {
		let { playVideoCode } = this.props;
		return (
			<div className='video-page'>
				<div className='video'>video</div>
				<div className='video-details'>
					<div className='details-text'>
						<div className='details-title-cancel'>
							<div className='details-title'>Venom</div>
							<img src={cancel} alt='cancel' className='cancel' onClick={this.props.closeVideo} />
						</div>
						<div className='details-language'>English</div>
						<div className='details-like'>
							<div className='like'>100%</div>
							<div className='release'>5 Aug</div>
						</div>
						<div className='details-desc'>text</div>
						<div className='details-text'>Read more</div>
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

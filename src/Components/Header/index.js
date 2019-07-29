import React, { Component } from 'react';
import './index.css';
import logo from '../../../src/assets/images/logo.png';
import dropArrow from '../../assets/images/drop-arrow.png';
import cancel from '../../assets/images/cancel.png';
import cancelFilter from '../../assets/images/cancel_filter.png';

export default class Header extends Component {
	render() {
		return (
			<div className='header-filter'>
				<div className='header-movie'>
					<div className='header-logo-button'>
						<img src={logo} alt='Logo' className='header-logo' />
						<div className='button-coming'>COMING SOON</div>
						<div className='button-showing'>NOW SHOWING</div>
					</div>
					<div className='header-cancel-button'>
						<div className='popular'>
							Popular <img src={dropArrow} alt='dropArrow' className='header-dropArrow' />
						</div>
						<div className='english'>
							English <img src={dropArrow} alt='dropArrow' className='header-dropArrow' />
						</div>
						<div className='genres'>
							Genres <img src={dropArrow} alt='dropArrow' className='header-dropArrow' />
						</div>
						<img src={cancel} alt='cancel' className='cancel' />
					</div>
				</div>
				<div className='applied-filter'>
					<div className='applied-filter-text'>Applied Filters:</div>
					<div className='filters'>
						English <img src={cancelFilter} alt='cancelFilter' className='header-cancelFilter' />
					</div>
				</div>
			</div>
		);
	}
}

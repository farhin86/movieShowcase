import React, { Component } from 'react';
import './index.css';

export default class Input extends Component {
	state = {
		duplicateNumbers: null,
		uniqueNumbers: null,
		insertedValue: null,
		existingArray: [12, 14, 1, 3, 6, 5] ////  This is the existing array
	};
	inputData = letter => {
		this.setState({
			insertedValue: letter.target.value
		});
	};
	submitInput = () => {
		this.setState({
			duplicateNumbers: null,
			uniqueNumbers: null
		});
		if (this.state.insertedValue) {
			this.inputArray();
		}
	};
	inputArray = () => {
		//1,2,3,1,2,3,5,6,1,9,7-10,1
		let arrayInput = [];
		this.state.insertedValue.split(',').map((element, index) => {
			if (element.indexOf('-') > -1) {
				let arrayRange = [];
				let elementArray = element.split('-');
				arrayRange = this.rangeArray(elementArray);
				// return arrayInput.concat(arrayRange);
				arrayRange.map(e => {
					return arrayInput.push(e);
				});
			} else {
				return arrayInput.push(parseInt(element));
			}
		});
		let uniq = [...new Set(arrayInput)];
		let mergedArray = this.state.existingArray.concat(uniq);
		this.uniquesArray(mergedArray);
	};
	rangeArray = elementArray => {
		let numericRange = elementArray.map(Number),
			finalInput = [];
		for (let i = numericRange[0]; i <= numericRange[1]; i++) {
			finalInput.push(i);
		}
		return finalInput;
	};
	uniquesArray = arr => {
		// console.log(arr);
		const frequency = arr.reduce((obj, value) => {
			!obj[value] ? (obj[value] = 1) : obj[value]++;
			return obj;
		}, {});
		let uniqueFrequency = Object.keys(frequency).filter(e => frequency[e] === 1);
		let uniq = [];

		uniqueFrequency.map(unique => {
			return this.state.existingArray.map(existing => {
				if (unique == existing) {
					return uniq.push(existing);
				}
			});
		});
		let duplicateFrequency = Object.keys(frequency).filter(e => frequency[e] > 1);
		this.setState({
			duplicateNumbers: duplicateFrequency,
			uniqueNumbers: uniq
		});
		// console.log(uniqueFrequency, uniq, duplicateFrequency);
	};
	render() {
		let { duplicateNumbers, uniqueNumbers, insertedValue, existingArray } = this.state;
		let duplicate = null,
			uniques = null;
		if (duplicateNumbers) {
			duplicate = duplicateNumbers.join(',');
		}
		if (uniqueNumbers) {
			uniques = uniqueNumbers.join(',');
		}

		return (
			<div className='input-body'>
				<div className='input-submit'>
					<input className='input-box' onChange={letter => this.inputData(letter)} value={insertedValue} />
					<div className='submit' onClick={this.submitInput}>
						SUBMIT
					</div>
				</div>
				<div className='input-output'>Duplicate Number: {duplicate}</div>
				<div className='input-output'>Unique Number: {uniques}</div>
				<div className='input-output'>Existing Array: {existingArray.join(',')}</div>
			</div>
		);
	}
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Input from './Components/Input';

const routing = (
	<Router>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/input' component={Input} />
		</div>
	</Router>
);
ReactDOM.render(routing, document.getElementById('root'));

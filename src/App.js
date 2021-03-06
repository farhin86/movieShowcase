import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import TrailerPage from './Components/TrailerPage';

function App() {
	return (
		<div className='App'>
			{/* <header className="App-header">
      CHANGED
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
			<Header />
			<TrailerPage />
		</div>
	);
}

export default App;

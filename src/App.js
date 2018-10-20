import React, { Component } from 'react';

// import logo from './logo.svg';
import Footer from './Footer';
import './App.css';
import MainContent from './MainContent';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Kennedy Space Center Neighborhood Fun Finder!</h2>
				</div>
				<MainContent />
				<Footer />
			</div>
		);
	}
}

export default App;

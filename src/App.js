import React, { Component } from 'react';
import Footer from './Footer';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MainContent />
				<Footer />
			</div>
		);
	}
}

export default App;

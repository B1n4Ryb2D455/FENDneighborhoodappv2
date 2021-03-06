import React, { Component } from 'react';
import Footer from './Footer';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';

// https://www.youtube.com/watch?v=QxzkxCwruo8
// https://youtu.be/lDVaZY0aG2w
// https://youtu.be/ywdxLNjhBYw

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

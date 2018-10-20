import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h2>Kennedy Space Center Neighborhood Fun Finder!</h2>
				</header>
					<div id="Main-content">
						<Grid>
							<Row className="show-grid">
								<Col id="Map-container" lg={12}>Hello container one</Col>
								<Col id="Sidebar-container" lg={6}>Hello container two</Col>
							</Row>
						</Grid>
					</div>
					<footer className="App-footer">
					<a className="App-link" href="https://www.linkedin.com/in/sarajoblevins/" target="_blank" rel="noopener noreferrer">Connect with Sara on LinkedIn</a>
					</footer>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Kennedy Space Center Neighborhood Fun Finder!</h1>
				</header>
					<p>
						<Grid>
							<Row className="show-grid">
								<Col id="Map-container" xs={12} md={8}>
									Hello container one
								</Col>
								<Col id="Sidebar-container" xs={6} md={4}>
									Hello container two
								</Col>
							</Row>
						</Grid>
					</p>
					<footer className="App-footer">
					<a className="App-link" href="https://www.linkedin.com/in/sarajoblevins/" target="_blank" rel="noopener noreferrer">Connect with Sara on LinkedIn</a>
					</footer>
			</div>
		);
	}
}

export default App;

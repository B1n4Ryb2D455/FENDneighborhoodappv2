import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						<Grid>
							<Row className="show-grid">
								<Col xs={12} md={8}>
									<code>{'<Col xs={12} md={8} />'}</code>
								</Col>
								<Col xs={6} md={4}>
									<code>{'<Col xs={6} md={4} />'}</code>
								</Col>
							</Row>
						</Grid>
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;

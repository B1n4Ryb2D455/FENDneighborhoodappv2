import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import logo from './logo.svg';
import Footer from './Footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Kennedy Space Center Neighborhood Fun Finder!</h2>
				</div>
					<div id="Main-content">
						<Grid>
							<Row className="show-grid">
								<Col id="Map-container" sm={12}>Hello container more words one</Col>
								<Col id="Sidebar-container" sm={6}>Hello container two</Col>
							</Row>
						</Grid>
					</div>
				<Footer />
			</div>
		);
	}
}

export default App;

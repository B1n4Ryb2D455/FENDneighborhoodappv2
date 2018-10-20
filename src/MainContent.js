import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';

export default class MainContent extends Component {

    render() {
        return <div id="Main-content">
            <Grid>
                <Row className="show-grid">
                    <Col id="Map-container" sm={12}>Hello container more words one</Col>
                    <Col id="Sidebar-container" sm={6}>Hello container two</Col>
                </Row>
            </Grid>
        </div>
    }
}

import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
          <Row>
            <Col>
              <SearchBar/>
            </Col>
          </Row>
          <Row>
            <Col md="8" sm="12">
              Video Detail
            </Col>
            <Col md="4" sm="12">
              Video List
            </Col>
          </Row>
      </Container>
    );
  }
}

export default App;

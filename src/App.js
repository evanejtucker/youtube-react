import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const apiKey = "AIzaSyCve38h3vuNZWubmID3lrSFTPbDOhgoS74";


class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.runSearch('extreme yodeling');
  }
  
  runSearch(term) {
    YouTubeSearch({ key: apiKey, term: term }, videos => {
      console.log(videos);
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

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
              <VideoDetail selectedVideo={this.state.selectedVideo} myName='Evan' />
            </Col>
            <Col md="4" sm="12">
              <VideoList/>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default App;

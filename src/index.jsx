/* eslint-env browser */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import KEY from './api_key';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: {},
    };

    this.videoSearch('pokemon');
  }

  videoSearch(term) {
    YTSearch({ key: KEY, term }, videos => this.setState({ videos, selectedVideo: videos[0] }));
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 500);
    return (
      <div>
        <SearchBar onSearchTermChange={term => videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

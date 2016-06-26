class App extends React.Component {
  constructor(props) {
    super(props);

    var that = this;

    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: exampleVideoData
    };
  }

  onVideoTitleClick (video) {
    this.setState( {
      currentVideo: video
    });
  }

  setUpYouTubeSearch(searchValue) {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: searchValue,
      max: 5
    }, function(listOfVideos) { 
      this.setState({
        currentVideo: listOfVideos[0],
        allVideos: listOfVideos
      });
    }.bind(this));
  }

  onSearch(event) {
    const searchValue = event.target.value;
    this.state.debouncedSearch(searchValue);
  }

  componentDidMount() {
    var that = this;
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: 'random cats',
      max: 5
    }, function(listOfVideos) { 
      that.setState({
        currentVideo: listOfVideos[0],
        allVideos: listOfVideos
      });
    });

    this.setState({
      debouncedSearch: _.debounce(this.setUpYouTubeSearch, 500).bind(this)
    });
  }

  render() { 
    return (
     <div>
      <Nav onSearch={this.onSearch.bind(this)}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList onVideoTitleClick={this.onVideoTitleClick.bind(this)} videos={this.state.allVideos}/>
      </div>
    </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations =

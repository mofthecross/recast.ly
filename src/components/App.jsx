class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: exampleVideoData
    };

    var youTubeData = this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: 'random cats',
      max: 5
    }, function() {});
  }

  onVideoTitleClick (video) {
    this.setState( {
      currentVideo: video
    });
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
  }

  render() { 
    return (
     <div>
      <Nav />
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
// `var` declarations will only exist globally where explicitly defined
window.App = App;


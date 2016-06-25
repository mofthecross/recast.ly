//HELLO
//hello again lets see if this works
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onVideoTitleClick (evt) {
    console.log('Firing!');
    this.setState( {
      done: !this.state.done
    })
  }
  render() { 
  
  return (
   <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer video={window.exampleVideoData[0]}/>
    </div>
    <div className="col-md-5">
      <VideoList videos={window.exampleVideoData}/>
    </div>
  </div>
  );
  } 
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


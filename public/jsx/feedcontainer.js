var React    = require('react'),
    ReactDOM = require('react-dom'),
    sampleData = require('../../sample-data-reviews.js'),
    sampleDataUpdated = require('../../sample-data-reviews-updated.js');

var FeedContainer = React.createClass({
  getInitialState: function(){
    return { displayWelcome: false,
             displayFeed: true,
             displayPost: false
             }
  },
  changeToFeed: function(){
    var state = { displayWelcome: false,
                  displayFeed: true,
                  displayPost: false }
    this.setState(state);
  },
  changeToPost: function(){
    var state = { displayWelcome: false,
                  displayFeed: false,
                  displayPost: true }
    this.setState(state);
  },
  render: function(){
    return(
      <div>
        <h1>guhhhh</h1>
        { this.state.displayWelcome ? <Welcome /> : null }
        { this.state.displayFeed ? <Feed /> : null }
        { this.state.displayPost ? <Post /> : null }
        { this.state.displayPost ? <button onClick={ this.changeToFeed }>RESULTS</button> : null }
        { this.state.displayFeed ? <button onClick={ this.changeToPost }>POST</button> : null }

      </div>
    )
  }
})

var Feed = React.createClass({
  getInitialState: function(){
    // return { locations: this.props.locations }
    // using our test data:
    return { locations: sampleData }
  },
  updateFeedItems: function(){
    var state;
    // this will be ajax to api
    state = { locations: sampleDataUpdated }
    this.setState(state);
  },
  render: function(){
    var self = this;
    var locations = this.state.locations.map(function(location, i){
      return(
          <FeedItem
            key={ i }
            name={ location.placeName }
            comment={ location.comment }
            updateFeedItems={ self.updateFeedItems }/>
      )
    })
    return(
      <article>
        <h4>Here's what we found...</h4>
        { locations }
      </article>
    )
  }
})

var FeedItem = React.createClass({
  clickHandler: function(e){
    console.log('you clicked a list item!');
    // function to update feed so it shows only items for that location
    this.props.updateFeedItems();

  },
  render: function(){
    return(
      <div className="feed-item" onClick={ this.clickHandler }>
        <p><em>{ this.props.name }</em></p>
        <p>{ this.props.comment }</p>
      </div>
    )
  }
})

var Welcome = React.createClass({
  render: function(){
    return (
      <div>
        <p>
          Welcome to PROJECT NAME! The place to see and share what's going on in your city.
          Share pictures, comments and more to the interactive map where others can catch a short lived glimpse
          of your activity. Search the map to see other posts to help you get off the couch and explore the city!
        </p>
        <p>
          Enter an address or press search to get started!
        </p>
      </div>
    )
  }
})

var Post = React.createClass({
  postHandler: function(){
    $.ajax({
      method: 'post',
      url: '/', // whatever this route is supposed to be
      data: { hey: 'this is test data' },
      success: function(data){
        console.log(data);
      },
      error: function(err){
        console.log(err);
      }
    });
  },
  render: function(){
    return (
      <div>

        <h3>Upload Image</h3>
        <input type="file" name="image" />
        <input type="hidden" name="image_as_base64" />
        <input onClick={ this.postHandler } type="button" value="Upload" />

        <div id="images"></div>

        <br />
        <label class="comment">Comment: </label>
        <input class="comment" type="text"></input>
      </div>
    )
  }
})

ReactDOM.render(<FeedContainer />, document.getElementById('newsfeed'));

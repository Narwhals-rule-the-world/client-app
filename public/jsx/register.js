var React    = require('react'),
    ReactDOM = require('react-dom'),
    _        = require('lodash');

var Register = React.createClass({
  getInitialState: function(){
    return(
      <form>
        <div class="welcome">
        "Welcome to PROJECT NAME! The place to see and share what's going on in your city. Share pictures, comments and more to the interactive map where others can catch a short lived glimps of your activity. Search the map to see other posts to help you get off the couch and explore the city!"
        </div>
      </form>
    )
  }
  addPost: function(){
    <form>
      <div>
      <label class="photo">Photo: </label>
      <input class="photo" type="photo"></input>
      </div>
      <div></div>
      <div></div>
      <div><div>
    </form>
  }
  render: function(){
    return(
      <form>
        <div class="input-row">
            <label class="name">Name: </label>
            <input class="name" type="text"></input>
        </div>
        <br />
        <div class="input-row">
            <label class="email">Email: </label>
            <input class="email" type="text"></input>
        </div>
        <br />
        <div class="input-row">
            <label class="password">Password: </label>
            <input class="password" type="text"></input>
        </div>
        <br />
        <div class="input-row">
            <label class="email">Re-Confirm Password: </label>
            <input class="password" type="text"></input>
        </div>
        <br />
        <div class="input-row">
            <label class="email">Default Address: </label>
            <input class="address" type="text"></input>
        </div>
        <br />
        <div class="input-row">
            <button type="button">Register</button>
        </div>
      </form>
    )
  }
})

ReactDOM.render(<Register />, document.getElementById('newsfeed'));

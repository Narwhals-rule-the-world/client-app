var React    = require('react'),
    ReactDOM = require('react-dom'),
    _        = require('lodash');

var Register = React.createClass({
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

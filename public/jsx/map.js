var React    = require('react'),
    ReactDOM = require('react-dom'),
    _        = require('lodash');


var GmapsMap = React.createClass({
  componentDidMount: function(){
    console.log('mounted');
  },

  render: function(){
    return(
      <div id='map'></div>
    )
  }
})

ReactDOM.render(<GmapsMap />, document.getElementById('map-container'));

var React    = require('react'),
    ReactDOM = require('react-dom'),
    _        = require('lodash');


var GmapsMap = React.createClass({
  componentDidMount: function(){
    console.log('the map mounted!');
    // set up the map
    var map = new GMaps({
      div: '#map',
      lat: 41.890663,
      lng: -87.626958
    });

    // show "loading" here

    // find user's position
    GMaps.geolocate({
      success: function(position) {
        // hide "loading" here
        map.setCenter(position.coords.latitude, position.coords.longitude);
      },
      error: function(error) {
        console.log('Geolocation failed: ' + error.message);
      },
      not_supported: function() {
        console.log("Your browser does not support geolocation");
      },
      always: function() {
        console.log("Done!");
      }
    });
  },

  render: function(){
    return(
      <div id='map'></div>
    )
  }
})

ReactDOM.render(<GmapsMap />, document.getElementById('map-container'));

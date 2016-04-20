var React    = require('react'),
    ReactDOM = require('react-dom'),
    sampleData = require('../../sample-data-reviews.js');

var AddressSearch = React.createClass({
  componentDidMount: function(){
    var self = this;
    $('#address-search-button').click(function(e){
      e.preventDefault();
      var address = $('#address-search').val();


      if (address){
        // ajax to google places api on the server
        // returns its best guess of a location
        // depending on what the user enters
        $.ajax({
          method: 'post',
          url: '/location',
          data: { place: address },
          success: function(data){
            // function to make [AJAX] call and grab locations
            // take the address and center the map at that location
            GMaps.geocode({
              address: data,
              callback: function(results, status) {
                if (status == 'OK') {
                  console.log(results);
                  var latlng = results[0].geometry.location;
                  self.props.centerMap(latlng.lat(), latlng.lng());
                }
              }
            });

          },
          error: function(err){
            console.log(err);
          }
        })
      }

    })
  },
  render: function(){
    return(
      <form>
        <input id="address-search" type="text"></input>
        <br />
        <button id="address-search-button" type="button">Seach Address</button>
        <button id="post-button">Post at Current Address</button>
      </form>
    )
  }
})



var GoogleMap = React.createClass({
  getInitialState: function(){
    return { lat: 41.890663,
             lng: -87.626958,
             locations: this.props.locations }
  },
  centerMap: function(lat, lng){
    this.props.setPosition(); // function from container to set location globally
    this.state.map.setCenter(lat, lng);
    this.state.map.addMarker({
        lat: lat,
        lng: lng
      })
    this.addMarkers();
  },
  addMarkers: function(){
    this.state.locations.forEach(function(location){
      map.addMarker({
        lat: location.lat,
        lng: location.lng,
        infoWindow: {
          content: <p>location.placeName</p>
        }
      });


    })
  },
  componentDidMount: function(){
    var state = this.state;
    var self  = this;
    // set up the map
    state.map = new GMaps({
      div: '#map',
      lat: state.lat,
      lng: state.lng,
      idle: function(){
        // function to make [AJAX] call and grab locations
        console.log('idle!!!');
      }
    });

    this.setState(state);

    // show "loading" here

    // find user's position
    GMaps.geolocate({
      success: function(position) {
        // hide "loading" here
        self.centerMap(position.coords.latitude, position.coords.longitude);
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
      <div>
        <div id='map'></div>
        <AddressSearch
          centerMap={ this.centerMap }/>
      </div>

    )
  }
})

ReactDOM.render(<GoogleMap />, document.getElementById('map-container'));

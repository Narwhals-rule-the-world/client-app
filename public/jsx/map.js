var React    = require('react'),
    ReactDOM = require('react-dom'),
    sampleData = require('../../sample-data-reviews.js');

var AddressSearch = React.createClass({
  componentDidMount: function(){
    var self = this;
    $('#address-search-button').click(function(e){
      e.preventDefault();

      $.ajax({
        method: 'post',
        url: '/location',
        data: { place: $('#address-search').val() },
        success: function(data){

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

    })
  },
  render: function(){
    return(
      <form>
        <input id="address-search" type="text"></input>
        <button id="address-search-button" type="button">Seach by Address</button>
      </form>
    )
  }
})

var listResults = React.createClass({
  getInitialState: function(){
    // ajax to api for to get data
    $.ajax({
      method: 'post',
      url: 'api',
      data: { lat: lat, lng: lng, radius: 0 },
      success: function(data){
        console.log('yay');
      },
      error: function(err){
        console.log('nooooo');
      }
    })
    return { results: sampleData };
  },
  componentDidMount: function(){
    // when one is clicked, display all for that location
  },
  render: function(){
    var noDuplicates = this.results.filter( function(location))

  }
})


var GmapsMap = React.createClass({
  getInitialState: function(){
    return { lat: 41.890663, lng: -87.626958 }
  },
  centerMap: function(lat, lng){
    this.state.map.setCenter(lat, lng);
    this.state.map.addMarker({
        lat: lat,
        lng: lng
      })
  },
  // function to make ajax call to api
  // findLocations: function(lat, lng){
  //   $.ajax({
  //     method: 'post',
  //     url: '', //api url
  //     data: { lat: lat, lng: lng},
  //     success: function(locations){
  //       locations.forEach(function(location){
  //         // do stuff
  //       })
  //     },
  //     error: function(err){
  //       console.log(err);
  //     }
  //   })
  // },
  componentDidMount: function(){
    console.log('the map mounted!');
    var state = this.state;
    var self  = this;
    // set up the map
    state.map = new GMaps({
      div: '#map',
      lat: state.lat,
      lng: state.lng
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

ReactDOM.render(<GmapsMap />, document.getElementById('map-container'));

// var React    = require('react'),
//     ReactDOM = require('react-dom'),
//     sampleData = require('../../sample-data-reviews.js');
//
// var AddressSearch = React.createClass({
//   componentDidMount: function(){
//     var self = this;
//     $('#address-search-button').click(function(e){
//       e.preventDefault();
//
//       // ajax to google places api on the server
//       // returns its best guess of a location
//       // depending on what the user enters
//       $.ajax({
//         method: 'post',
//         url: '/location',
//         data: { place: $('#address-search').val() },
//         success: function(data){
//           // function to make [AJAX] call and grab locations
//           // take the address and center the map at that location
//           GMaps.geocode({
//             address: data,
//             callback: function(results, status) {
//               if (status == 'OK') {
//                 console.log(results);
//                 var latlng = results[0].geometry.location;
//                 self.props.centerMap(latlng.lat(), latlng.lng());
//               }
//             }
//           });
//
//         },
//         error: function(err){
//           console.log(err);
//         }
//       })
//
//     })
//   },
//   render: function(){
//     return(
//       <form>
//         <input id="address-search" type="text"></input>
//         <br />
//         <button id="address-search-button" type="button">Seach Address</button>
//         <button id="post-button">Post at Current Address</button>
//       </form>
//     )
//   }
// })
//
//
//
// var GmapsMap = React.createClass({
//   getInitialState: function(){
//     return { lat: 41.890663, lng: -87.626958 }
//   },
//   centerMap: function(lat, lng){
//     this.state.map.setCenter(lat, lng);
//     this.state.map.addMarker({
//         lat: lat,
//         lng: lng
//       })
//   },
//   componentDidMount: function(){
//     console.log('the map mounted!');
//     var state = this.state;
//     var self  = this;
//     // set up the map
//     state.map = new GMaps({
//       div: '#map',
//       lat: state.lat,
//       lng: state.lng,
//       idle: function(){
//         // function to make [AJAX] call and grab locations
//         console.log('idle!!!');
//       }
//     });
//
//     this.setState(state);
//
//     // show "loading" here
//
//     // find user's position
//     GMaps.geolocate({
//       success: function(position) {
//         // hide "loading" here
//         self.centerMap(position.coords.latitude, position.coords.longitude);
//         // function to make [AJAX] call and grab locations? This one might not be neccesary
//       },
//       error: function(error) {
//         console.log('Geolocation failed: ' + error.message);
//       },
//       not_supported: function() {
//         console.log("Your browser does not support geolocation");
//       },
//       always: function() {
//         console.log("Done!");
//       }
//     });
//   },
//
//   render: function(){
//     return(
//       <div>
//         <div id='map'></div>
//         <AddressSearch
//           centerMap={ this.centerMap }/>
//       </div>
//
//     )
//   }
// })
//
// ReactDOM.render(<GmapsMap />, document.getElementById('map-container'));

var React    = require('react'),
    ReactDOM = require('react-dom'),
    sampleData = [{}],//require('../../sample-data-reviews.js'),
    sampleDataUpdated = [{}];//require('../../sample-data-reviews-updated.js');

// hiii
var Container = React.createClass({
  getInitialState: function(){
    return {
      lat: 0,
      lng: 0,
      locations: [],
      loggedIn: false,
    }
  },
  login: function() {
    var state = this.state;
    state.loggedIn = true;
    this.setState(state);
  },
  logout: function() {
    var state = this.state;
    state.loggedIn = false;
    this.setState(state);
  },
  createMap: function() {
    var self  = this;
    var state = this.state;
    // set up the map
    state.map = new GMaps({
      div: '#map',
      lat: state.lat,
      lng: state.lng,
      idle: function(){
        // function to make [AJAX] call and grab locations
        // console.log('idle!!!');
      }
    });

    this.setState(state);

  },
  setPosition: function(lat, lng){
    var self = this;
    var state = this.state;
    state.lat = lat;
    state.lng = lng;

    $.ajax({
      method: 'post',
      url: 'http://localhost:3000/search',
      data: { lat: lat, lng: lng, radius: 10 },
      success: function(returnedLocations){
        state.locations = returnedLocations;
        self.setState(state);
      },
      error: function(err){
        console.log(err);
      }
    })

  },

  render: function(){
    return(
      <div className="container">
        <Buttons  login={ this.login }
                  logout={ this.logout }
                  loggedIn={ this.state.loggedIn }/>
        <FeedContainer lat={ this.state.lat }
                       lng={ this.state.lng }
                       loggedIn={ this.state.loggedIn }/>

        <GoogleMap  lat={ this.state.lat }
                    lng={ this.state.lng }
                    locations={ this.state.locations }
                    setPosition={ this.setPosition }
                    createMap = { this.createMap }
                    map={ this.state.map }
                    loggedIn={ this.state.loggedIn }/>
      </div>

    )
  }
})

var GoogleMap = React.createClass({
  centerMap: function(lat, lng){
    this.props.setPosition(lat, lng); // function from container to set location globally
    this.props.map.setCenter(lat, lng);
    this.props.map.addMarker({
        lat: lat,
        lng: lng
      })
  },
  addMarkers: function(){
    var self = this;
    this.props.locations.forEach(function(location){
      // console.log(location);
      self.props.map.addMarker({
        lat: location.lat,
        lng: location.lng,
        infoWindow: {
          content: ('<p><b>' + location.placeName+ '</b></p><p>' + location.comment + '</p>')
        }
      });


    })
  },
  componentDidMount: function(){
    var self = this;
    this.props.createMap();

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
    this.addMarkers();
    return(
      <div id="map-and-search">
        <div id='map'></div>
        <AddressSearch
          centerMap={ this.centerMap }/>
      </div>

    )
  }
})


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
                  // console.log(results);
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
      <form id="search-form">
        <input id="address-search" type="text"></input>
        <br />
        <button id="address-search-button" type="button">SEARCH ADDRESS</button>
      </form>
    )
  }
})





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
      <div className="feed-container">
        <h1>guhhhh</h1>
        { this.state.displayWelcome ? <Welcome /> : null }
        { this.state.displayFeed ? <Feed lat={ this.props.lat } lng={ this.props.lng }/> : null }
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
    return { locations: [] }
  },
  updateFeedItems: function(){
    var self = this;
    console.log(self.props);
    // this will be ajax to api =================
    $.ajax({
      method: 'post',
      url: 'http://localhost:3000/search',
      data: { lat: self.props.lat, lng: self.props.lng, radius: 10 },
      success: function(returnedLocations){
        var state = {};
        console.log('success!!!!!!@#!@#');
        state.locations = returnedLocations;
        self.setState(state);
      },
      error: function(err){
        console.log(err);
      }
    })
    // ==============================
  },
  render: function(){
    this.updateFeedItems();
    var self = this;
    // console.log(this.state);
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
  getInitialState: function(){
    return{
      comment: '',
      picture: ''
    }
  },
  postHandler: function(e){
    e.preventDefault();
    var state = this.state;
    state.time = Date.now();
    console.log(state);
    $.ajax({
      method: 'post',
      url: 'http://localhost:3000/create', // whatever this route is supposed to be
      data: state,
      success: function(data){
        console.log(data);
      },
      error: function(err){
        console.log(err);
      }
    });
  },
  textChange: function(e){
    var state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  },
  imageChange: function(event){
    var input = $('#imgUpload')[0].files[0];
    var reader = new FileReader();
    var state = this.state;
    var self = this;

    reader.onload = function (e) {
      // console.log(e.target.result);
      state.picture = e.target.result;
      self.setState(state);
      $("#images").val(e.target.result);
    // console.log($('#myImage').val())
    };

    reader.readAsDataURL(input);
  },
  render: function(){
    return (
      <div>

        <h3>Upload Image</h3>
        <form onSubmit={ this.postHandler }>
          <input id="imgUpload" type="file" name="image" onChange={this.imageChange}/>
          <label className="comment">Comment: </label>
          <input className="comment" type="text" name="comment" onChange={ this.textChange }></input>
          <label className="name">Name:</label>
          <input className="name" type="text" name="userName" onChange={ this.textChange }></input>
          <button type="submit">Upload</button>
        </form>

        <div id="images"></div>

      </div>
    )
  }
})


var Buttons = React.createClass({
  // getInitialState: function(){
  //   return {
  //     welcomeScreen: true,
  //     userLoggedIn: false,
  //   }
  // },
  // handleLoggedIn: function(logged){
  //   if(logged){
  //     var state = this.state
  //     state.userLoggedIn = true
  //     this.setState(state)
  //     console.log(this.state)
  //   }
  // },
  // handleLoggedOut: function(logged){
  //   if(logged){
  //     var state = this.state
  //     state.userLoggedIn = false
  //     this.setState(state)
  //     console.log(this.state)
  //   }
  // },
  render: function(){
    return (
        <div>
          { this.props.loggedIn  ? <LogOut logout={ this.props.logout } /> :  <LogIn login={ this.props.login } />  }
        </div>

    )
  },
})

var LogIn = React.createClass({
  getInitialState: function(){
    return{
      username: '',
      email: '',
      password: ''
    }
  },
  loginHandler: function(e){
    var self = this;
    e.preventDefault();
    var state = this.state;
    $.ajax({
      method: 'post',
      url: 'http://localhost:3000/users/login',
      data: state,
      success: function(data){
        console.log(data);
        if(data.success){
          self.props.login()
        }else{
          console.log("NOT THE RIGHT PASSWORD OR EMAIL")
        }
      },
      error: function(err){
        console.log(err);
      }
    });
  },
  registerHandler: function(e){
    var self = this;
    e.preventDefault();
    var state = this.state;
    $.ajax({
      method: 'post',
      url: 'http://localhost:3000/users/signup',
      data: state,
      success: function(data){
        console.log(data);
        if(data.success){
          console.log('you successfully registered an account')
          console.log(self.props);
          self.props.login()
        }else{
          console.log('something went wrong')
        }
      },
      error: function(err){
        console.log(err);
      }
    });
  },
  textChange: function(e){
    var state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  },
  // handleLoginClick: function(event){
  //   this.props.handleLoggedIn(true)
  //   //event.target.value will get you values of inputs
  //   //this will need to be an ajax call for users log in
  //   console.log('ATTEMPTED LOGIN!')
  // },
  render: function(){
    return(
      <div id="header">
        <div id="title">WHO/WHAT/WHERE</div>
        <div className="input-row">
          <form id="login-form" onSubmit={ this.loginHandler }>

            <input className="email" type="text" name="email" placeholder="ENTER EMAIL"onChange={ this.textChange }></input>

            <input className="password" type="password" name="password" placeholder="ENTER PASSWORD" onChange={ this.textChange }></input>
            <button type="submit">LOGIN</button>
          </form>
            <br />
            <a className="register" href="#register-popup">Not Registered? Sign Up!</a>
            <div className="overlay" id="register-popup">
                <div className="popup">
                  <h4 id="register-title">ENTER INFO</h4>
                  <a className="close" href="#">&times;</a>
                  <form id="register-form" onSubmit={ this.registerHandler }>
                        <label className="register-label">Username: </label>
                        <input className="register-input" type="text" name="username" onChange={ this.textChange }></input>
                    <br />
                    <br />
                        <label className="register-label">Email: </label>
                        <input className="register-input" type="text" name="email" onChange={ this.textChange }></input>
                    <br />
                    <br />
                        <label className="register-label">Password: </label>
                        <input className="register-input" type="password" name="password" onChange={ this.textChange }></input>
                    <br />
                    <br />
                        <label className="register-label">Re-Confirm Password: </label>
                        <input className="register-input" type="password" name="reconfirmpassword" onChange={ this.textChange }></input>
                    <br />
                    <br />
                        <label className="register-label">Default Address: </label>
                        <input className="register-input" type="text" name="default_address" onChange={ this.textChange }></input>
                    <br />
                    <br />
                        <button id="register-button" type="submit">REGISTER</button>
                  </form>

                </div>
              </div>
        </div>
      </div>
    )
  }
})


var LogOut = React.createClass({
  handleLogoutClick: function(event){
    $.ajax({
      method: 'get',
      url: 'http://localhost:3000/users/logout',
      error: function(err){
        console.log(err);
      }
    })
    this.props.logout();
    console.log('ATTEMPTED LOGOUT!')
  },
  render: function(){
    return(
      <div id="header">
        <div id="title">WHO/WHAT/WHERE</div>
        <div id="signed-in">
          Welcome User
          <button onClick={this.handleLogoutClick} type="button">LOGOUT</button>
        </div>
      </div>

    )
  }
})

ReactDOM.render(<Container />, document.querySelector('main'));

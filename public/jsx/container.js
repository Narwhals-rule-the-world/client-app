var React    = require('react'),
    ReactDOM = require('react-dom');

var Container = React.createClass({
  // set all values to false
  getInitialState: function(){
    return {
      welcomeScreen: true,
      userLoggedIn: false,
    }
  },
  // DEFINE HANDLING REGISTER TO SWITCH USER REGISTERED TO TRUE
  // WHEN YOU CLICK REGISTER BUTTON
  handleRegister: function(registered){
    if(registered){
      var state = this.state
      state.userRegistered = true
      this.setState(state)
      console.log(this.state)
    }
    console.log('REGISTER IS NOW TRUE')
  },

  // DEFINE HANDLING LOGIN TO SWITCH userLoggedIn TO TRUE
  // WHEN YOU CLICK LOGIN BUTTON
  // TAKES US TO LOGGED IN AND BRINGS UP POST BUTTON
  handleLoggedIn: function(logged){
    if(logged){
      var state = this.state
      state.userLoggedIn = true
      this.setState(state)
      console.log(this.state)
    }
    console.log('LOGGED IN IS NOW TRUE')
  },

  // DEFINE HANDLING REGISTER TO SWITCH USER REGISTERED TO TRUE
  // WHEN YOU CLICK REGISTER BUTTON
  // ULTIMATELY TAKES US TO POST FORM
  handlePost: function(post){
    if(post){
      var state = this.state
      state.userPost = true
      this.setState(state)
      console.log(this.state)
    }
    console.log('WE WANT TO ADD A POST')
  },

  //RENDER ALL THE FUNCTIONS IN THE NEWSFEED
  render: function(){
    return (
        <div>

          {this.state.userRegistered ? <Register/> : <Welcome handleRegister={this.handleRegister} handleLoggedIn={this.handleLoggedIn}/>}

          {this.state.userLoggedIn ? <Logged handlePost={this.handlePost}/> : ''}

          {this.state.userPost ? <Post/> : ''}

        </div>
    )
  }
})

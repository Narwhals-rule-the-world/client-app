var Welcome = React.createClass({
  handleRegisterClick: function(event){
    // this.props.handleRegister(true)
    // this.props.handleLoggedIn(false)

    //event.target.value will get you values of inputs
    console.log('REGISTER')
    // console.log(this.state.userRegistered)
    // console.log(this.state.userLoggedIn)
  },
  handleLoginClick: function(event){
    // this.props.handleRegister(false)
    // this.props.handleLoggedIn(true)
    console.log('LOGIN')
    // console.log(this.state.userRegistered)
    // console.log(this.state.userLoggedIn)
  },
  render: function(){
    return (
      <div>
        Welcome to PROJECT NAME! The place to see and share what's going on in your city. Share pictures, comments and more to the interactive map where others can catch a short lived glimps of your activity. Search the map to see other posts to help you get off the couch and explore the city!
          <a href='#login-popup'><button onClick={this.handleLoginClick} type="button">LOGIN HERE</button></a>
          - OR -
          <a href='#register-popup'><button onClick={this.handleRegisterClick} type="button">REGISTER HERE</button></a>
      </div>
    )
  }
})

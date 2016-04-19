var React    = require('react'),
    ReactDOM = require('react-dom');

var Buttons = React.createClass({
  getInitialState: function(){
    return {
      welcomeScreen: true,
      userLoggedIn: false,
    }
  },
  handleLoggedIn: function(logged){
    if(logged){
      var state = this.state
      state.userLoggedIn = true
      this.setState(state)
      console.log(this.state)
    }
  },
  handleLoggedOut: function(logged){
    if(logged){
      var state = this.state
      state.userLoggedIn = false
      this.setState(state)
      console.log(this.state)
    }
  },
  render: function(){
    return (
        <div>
          {this.state.userLoggedIn ? <LogOut handleLoggedOut={this.handleLoggedOut} /> :  <LogIn handleLoggedIn={this.handleLoggedIn} handleLoggedOut={this.handleLoggedOut}/>  }
          <a class="register" href="#register-popup">Not Registered? Sign Up!</a>

        </div>

    )
  },
})

var LogIn = React.createClass({
  handleLoginClick: function(event){
    this.props.handleLoggedIn(true)
    //event.target.value will get you values of inputs
    //this will need to be an ajax call for users log in
    console.log('ATTEMPTED LOGIN!')
  },
  render: function(){
    return(
      <div class="input-row">
          <label class="email">Email: </label>
          <input class="email" type="text"></input>
          <label class="password">Password: </label>
          <input class="password" type="text"></input>
          <button onClick={this.handleLoginClick} type="button">LOGIN</button>
          <br />
          <div className="overlay" id="register-popup">
              <div className="popup">

                <h4>Register</h4>
                <a className="close" href="#">&times;</a>
                <form>
                  <div className="input-row">
                      <label className="name">Name: </label>
                      <input className="name" type="text"></input>
                  </div>
                  <br />
                  <div className="input-row">
                      <label className="email">Email: </label>
                      <input className="email" type="text"></input>
                  </div>
                  <br />
                  <div className="input-row">
                      <label className="password">Password: </label>
                      <input className="password" type="text"></input>
                  </div>
                  <br />
                  <div className="input-row">
                      <label className="email">Re-Confirm Password: </label>
                      <input className="password" type="text"></input>
                  </div>
                  <br />
                  <div className="input-row">
                      <label className="email">Default Address: </label>
                      <input className="address" type="text"></input>
                  </div>
                  <br />
                  <div className="input-row">
                      <button onClick={this.handleLoginClick} type="button">REGISTER</button>
                  </div>
                </form>

              </div>
            </div>
      </div>
    )
  }
})


var LogOut = React.createClass({
  handleLogoutClick: function(event){
    this.props.handleLoggedOut(true)
    console.log('ATTEMPTED LOGOUT!')
  },
  render: function(){
    return(
      <div>
        Welcome User
        <button onClick={this.handleLogoutClick} type="button">LOGOUT</button>
      </div>
    )
  }
})


ReactDOM.render(<Buttons />, document.getElementById('button-group'));

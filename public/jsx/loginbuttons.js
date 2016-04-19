var React    = require('react'),
    ReactDOM = require('react-dom'),
    _        = require('lodash');

var Buttons = React.createClass({
  getInitialState: function(){
    return {
      welcomeScreen: true,
      userLoggedIn: false,
      userRegistered: false
    }
  },
  handleRegister: function(registered){
    if(registered){
      var state = this.state
      state.userRegistered = true
      this.setState(state)
      console.log(this.state)
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

  render: function(){
    return (
        <div>
          {this.state.welcomeScreen ? <Welcome  handleRegister={this.handleRegister} handleLoggedIn={this.handleLoggedIn} /> : null }
          {this.state.userLoggedIn ? <LogIn /> : null }
          {this.state.userRegistered ? <Register /> : null }
        </div>
    )
  },
})

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
          <a href='#login-popup'><button onClick={this.handleLoginClick} type="button">LOGIN HERE</button></a>
          - OR -
          <a href='#register-popup'><button onClick={this.handleRegisterClick} type="button">REGISTER HERE</button></a>
      </div>
    )
  }
})

// var Register = React.createClass({
//   render: function(){
//     return (
//         <form>
//           <div class="input-row">
//               <label class="name">Name: </label>
//               <input class="name" type="text"></input>
//           </div>
//           <br />
//           <div class="input-row">
//               <label class="email">Email: </label>
//               <input class="email" type="text"></input>
//           </div>
//           <br />
//           <div class="input-row">
//               <label class="password">Password: </label>
//               <input class="password" type="text"></input>
//           </div>
//           <br />
//           <div class="input-row">
//               <label class="email">Re-Confirm Password: </label>
//               <input class="password" type="text"></input>
//           </div>
//           <br />
//           <div class="input-row">
//               <label class="email">Default Address: </label>
//               <input class="address" type="text"></input>
//           </div>
//           <br />
//           <div class="input-row">
//               <button type="button">Register</button>
//           </div>
//         </form>
//       )
//     }
// })
//END OF REGISTER COMPONENT

// var LogIn = React.createClass({
//   render: function(){
//     return(
//       <div class="input-row">
//           <label class="email">Email: </label>
//           <input class="email" type="text"></input>
//           <label class="password">Password: </label>
//           <input class="password" type="text"></input>
//       </div>
//     )
//   }
// })

ReactDOM.render(<Buttons />, document.getElementById('button-group'));

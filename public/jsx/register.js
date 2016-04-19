var React    = require('react'),
    ReactDOM = require('react-dom'),
    _        = require('lodash');

// THIS IS THE MAIN CONTAINER COMPONENT
var Container = React.createClass({
  // set all values to false
  getInitialState: function(){
    return {
      userRegistered: false,
      userLoggedIn: false,
      userPost: false
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

var Welcome = React.createClass({
  handleRegisterClick: function(event){
    this.props.handleRegister(true)
    //event.target.value will get you values of inputs
    console.log('click worked')
  },


  handleLoginClick: function(event){
    this.props.handleLoggedIn(true)
    //event.target.value will get you values of inputs
    console.log(event.target.value)
    console.log('click worked')
  },


  render: function(){
    return (

      <div>
      Welcome to PROJECT NAME! The place to see and share what's going on in your city. Share pictures, comments and more to the interactive map where others can catch a short lived glimps of your activity. Search the map to see other posts to help you get off the couch and explore the city!
      <br />
      Not a member?
      <br />

      <button onClick={this.handleRegisterClick} type="submit">REGISTER HERE</button>
      <br />
      or login
      <br />
      <div class="input-row">
      <input type="text" name="email" value=""  class="email" placeholder="EMAIL" />
      <input type="password" name="password" value="" class="password" placeholder="PASSWORD" />
      </div>
      <br />
      <button onClick={this.handleLoginClick} type="submit">LOGIN</button>

    </div>
    )
  }

})

var Logged = React.createClass({
  handlePostClick: function(event){
    this.props.handlePost(true)
    //event.target.value will get you values of inputs
    console.log('we should see post form')
  },
  render: function(){
    return (
      <div>
        YOU ARE LOGGED IN
        <br />
        <button onClick={this.handlePostClick} type="submit">ADD A POST</button>

      </div>
    )
  }
})

var Post = React.createClass({
  render: function(){
    return (
    <div class="input-row">
        <label class="picture">Upload Picture: </label>
        <input class="name" type="text" placeholder="STAND IN"></input>
        <br />
        <label class="comment">Comment: </label>
        <input class="comment" type="text"></input>
    </div>
  )
  }
})

// var Register = React.createClass({
//     getInitialState: function(){
//       return {message: ''};
//     },
//     registerClickHandler: function(){
//       this.setState({message: 'register'})
//     },
//     updateClickHandler: function(){
//       this.setState({message: 'update'})
//     },
//     addPostClickHandler: function(){
//       this.setState({message: 'addpost'})
//     },
//     render: function(){
//
//           return (
//           <form>
//             <div class="input-row">
//                 <label class="name">Name: </label>
//                 <input class="name" type="text"></input>
//             </div>
//             <br />
//             <div class="input-row">
//                 <label class="email">Email: </label>
//                 <input class="email" type="text"></input>
//             </div>
//             <br />
//             <div class="input-row">
//                 <label class="password">Password: </label>
//                 <input class="password" type="text"></input>
//             </div>
//             <br />
//             <div class="input-row">
//                 <label class="email">Re-Confirm Password: </label>
//                 <input class="password" type="text"></input>
//             </div>
//             <br />
//             <div class="input-row">
//                 <label class="email">Default Address: </label>
//                 <input class="address" type="text"></input>
//             </div>
//             <br />
//             <div class="input-row">
//                 <button type="button">Register</button>
//             </div>
//           </form>
//         )
//       }
// })

// ReactDOM.render(<Container />, document.getElementById('newsfeed'));

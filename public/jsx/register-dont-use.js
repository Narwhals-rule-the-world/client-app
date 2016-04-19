// var React    = require('react'),
//     ReactDOM = require('react-dom'),
//     _        = require('lodash');
//
// // THIS IS THE MAIN CONTAINER COMPONENT
//
//
// var Welcome = React.createClass({
//   handleRegisterClick: function(event){
//     this.props.handleRegister(true)
//     //event.target.value will get you values of inputs
//     console.log('click worked')
//   },
//
//
//   handleLoginClick: function(event){
//     this.props.handleLoggedIn(true)
//     //event.target.value will get you values of inputs
//     console.log(event.target.value)
//     console.log('click worked')
//   },
//
//
// })
//
// var Logged = React.createClass({
//   handlePostClick: function(event){
//     this.props.handlePost(true)
//     //event.target.value will get you values of inputs
//     console.log('we should see post form')
//   },
//   render: function(){
//     return (
//       <div>
//         YOU ARE LOGGED IN
//         <br />
//         <button onClick={this.handlePostClick} type="submit">ADD A POST</button>
//
//       </div>
//     )
//   }
// })
//
// var Post = React.createClass({
//   render: function(){
//     return (
//     <div class="input-row">
//         <label class="picture">Upload Picture: </label>
//         <input class="name" type="text" placeholder="STAND IN"></input>
//         <br />
//         <label class="comment">Comment: </label>
//         <input class="comment" type="text"></input>
//     </div>
//   )
//   }
// })
//
// // var Register = React.createClass({
// //     getInitialState: function(){
// //       return {message: ''};
// //     },
// //     registerClickHandler: function(){
// //       this.setState({message: 'register'})
// //     },
// //     updateClickHandler: function(){
// //       this.setState({message: 'update'})
// //     },
// //     addPostClickHandler: function(){
// //       this.setState({message: 'addpost'})
// //     },
// //     render: function(){
// //
// //           return (
// //           <form>
// //             <div class="input-row">
// //                 <label class="name">Name: </label>
// //                 <input class="name" type="text"></input>
// //             </div>
// //             <br />
// //             <div class="input-row">
// //                 <label class="email">Email: </label>
// //                 <input class="email" type="text"></input>
// //             </div>
// //             <br />
// //             <div class="input-row">
// //                 <label class="password">Password: </label>
// //                 <input class="password" type="text"></input>
// //             </div>
// //             <br />
// //             <div class="input-row">
// //                 <label class="email">Re-Confirm Password: </label>
// //                 <input class="password" type="text"></input>
// //             </div>
// //             <br />
// //             <div class="input-row">
// //                 <label class="email">Default Address: </label>
// //                 <input class="address" type="text"></input>
// //             </div>
// //             <br />
// //             <div class="input-row">
// //                 <button type="button">Register</button>
// //             </div>
// //           </form>
// //         )
// //       }
// // })
//
// // ReactDOM.render(<Container />, document.getElementById('newsfeed'));

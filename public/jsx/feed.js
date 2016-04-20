// var React    = require('react'),
//     ReactDOM = require('react-dom'),
//     sampleData = require('../../sample-data-reviews.js'),
//     sampleDataUpdated = require('../../sample-data-reviews-updated.js');
//
// var Feed = React.createClass({
//   getInitialState: function(){
//     // return { locations: this.props.locations }
//     // using our test data:
//     return { locations: sampleData }
//   },
//   updateFeedItems: function(){
//     var state;
//     // this will be ajax to api
//     state = { locations: sampleDataUpdated }
//     this.setState(state);
//   },
//   render: function(){
//     var self = this;
//     var locations = this.state.locations.map(function(location, i){
//       return(
//           <FeedItem
//             key={ i }
//             name={ location.placeName }
//             comment={ location.comment }
//             updateFeedItems={ self.updateFeedItems }/>
//       )
//     })
//     return(
//       <article>
//         <h4>Here's what we found...</h4>
//         { locations }
//       </article>
//     )
//   }
// })
//
// var FeedItem = React.createClass({
//   clickHandler: function(e){
//     console.log('you clicked a list item!');
//     this.props.updateFeedItems();
//       // function to update feed so it shows only items for that location
//   },
//   render: function(){
//     return(
//       <div className="feed-item" onClick={ this.clickHandler }>
//         <p><em>{ this.props.name }</em></p>
//         <p>{ this.props.comment }</p>
//       </div>
//     )
//   }
// })
//
// ReactDOM.render(<Feed />, document.getElementById('testytest'));

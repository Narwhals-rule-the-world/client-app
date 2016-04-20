// var Post = React.createClass({
//   postHandler: function(){
//     $.ajax({
//       method: 'post',
//       url: '/', // whatever this route is supposed to be
//       data: { hey: 'this is test data' },
//       success: function(data){
//         console.log(data);
//       },
//       error: function(err){
//         console.log(err);
//       }
//     });
//   },
//   render: function(){
//     return (
//       <div>
//
//         <h3>Upload Image</h3>
//         <input type="file" name="image" />
//         <input type="hidden" name="image_as_base64" />
//         <input onClick={ this.postHandler } type="button" value="Upload" />
//
//         <div id="images"></div>
//
//         <br />
//         <label class="comment">Comment: </label>
//         <input class="comment" type="text"></input>
//       </div>
//     )
//   }
// })

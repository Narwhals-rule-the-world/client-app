var React    = require('react'),
    ReactDOM = require('react-dom'),
    _        = require('lodash');

var AddressSearch = React.createClass({
  componentDidMount: function(){
    $('#address-search-button').click(function(e){
      e.preventDefault();
      $.ajax({
        method: 'post',
        url: '/location',
        data: { place: $('#address-search').val()},
        success: function(data){
          console.log(data);
        },
        error: function(err){
          console.log(err);
        }
      })
    })
  },
  render: function(){
    return(
      <form>
        <input id="address-search" type="text"></input>
        <button id="address-search-button" type="button">Seach by Address</button>
      </form>
    )
  }
})

ReactDOM.render(<AddressSearch />, document.getElementById('search-container'));

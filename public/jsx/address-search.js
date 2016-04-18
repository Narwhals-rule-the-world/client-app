var React    = require('react'),
    ReactDOM = require('react-dom'),
    _        = require('lodash');

var AddressSearch = React.createClass({
  render: function(){
    return(
      <form>
        <input id="address-search" class="four columns" type="text"></input>
        <button type="button">Seach by Address</button>
      </form>
    )
  }
})

ReactDOM.render(<AddressSearch />, document.getElementById('search-container'));

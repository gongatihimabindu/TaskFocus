import React, { Component } from 'react';
import Chips, { Chip } from 'react-chips'

class ChipsTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chips: []
    }
  }
  onChangeEvent=e=>{
	  hello
  }

  onChange = chips => {
    this.setState({ chips });
  }

  render() {
    return (
      <div>
	  hima
	  bindu
	  gongati
	  <button onChange=onChangeEvent.bind(this)> 
	  submit
	  </button>
          <h1>Assignment</h1>
          <p>Select an Item</p>
        <Chips
          value={this.state.chips}
          onChange={this.onChange}
          placeholder = " Select an item"
          suggestions={["James" , "Josephine","Bindu", " Vishnu","James William", "Robert", "Hawkings","Wilson","Julliet", "Lenna" , "Donette" , "Simona" , "Mitsue" , "Leota" , "Sage Wieser" , "Kris" ]}
          focusInputOnSuggestionClick = {true}
           
        
          alwaysRenderSuggestions = {true}

        />
      </div>
    );
  }
}
export default ChipsTab
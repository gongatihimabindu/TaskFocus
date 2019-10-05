import React, { Component } from 'react';
import Chips, { Chip } from 'react-chips'

class ChipsTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chips: []
    }
  }
  

  onChange = chips => {
    this.setState({ chips });
  }

  render() {
    return (
      <div>
          <h1>Assignment</h1>
          <p>Select an Item</p>
        <Chips
          value={this.state.chips}
          onChange={this.onChange}
          placeholder = " Select an item"
          suggestions={["James" , "Josephine","Bindu", " Vishnu","James William", "Robert", "Hawkings","Wilson","Julliet", "Lenna" , "Donette" , "Simona" , "Mitsue" , "Leota" , "Sage Wieser" , "Kris" ]}
          focusInputOnSuggestionClick = {true}
           console.log("react-chips in ui material")
        
          alwaysRenderSuggestions = {true}

        />
      </div>
    );
  }
}
export default ChipsTab
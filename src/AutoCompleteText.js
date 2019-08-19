//import react module
import React from 'react';
//create class for component
export default class AutoCompleteText extends React.Component {
  //hardcoded member variable array that can be accessed later
  //props ensures component set up properly
  constructor (props) {
    super(props);
    this.items = [
      'Luke Skywalker',
      'Darth Vader',
      'Han Solo',
    ];
//internal data  
    this.state = {
      suggestions: [],
      text: '',
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
        const regex = new RegExp(`^${value}`, 'i');
        suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  }

  suggestionSelected (value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
}

  renderSuggestions () {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      //jsx allows us to write using html tags
      //map over array output an li
      // curly braces is evaluated
      <ul>
        {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
      </ul>
    )
  }

  render () {
    const { text } = this.state;
    return (
      //text input has onChange event to let us know box is typed in
      //we also need that text
      <div>
        <input value={text} onChange={this.onTextChanged} type="text" />
        {this.renderSuggestions()}
      </div>
    )
  }
}

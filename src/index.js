import { nextTick } from "process";
import React from "react";
import ReactDOM from "react-dom";
// import App from "./App.js";
// ReactDOM.render(<App />, document.getElementById("root"));
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {value: ''};
    // this.state = {value: 'Write an essay about your favourite DOM element'};
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    // alert('An essay was submitted: ' + this.state.value);
    alert('Your favourite flavour is: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {/* Name:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} /> */}
          {/* Essay:
          <textarea name="name" value={this.state.value} onChange={this.handleChange}/> */}
          Pick your favourite flavour:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

// ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('root'));
// ReactDOM.render(<LoginControl />, document.getElementById('root'));
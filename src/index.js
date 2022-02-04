import React from "react";
import ReactDOM from "react-dom";
// import App from "./App.js";
// ReactDOM.render(<App />, document.getElementById("root"));
import "./index.css";

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleChange(event) {
    this.setState({login: event.target.value})
  }

  handleSignup(event) {
      alert('Welcome aboard, ' + this.state.login);
      event.preventDefault();
  }

  render() {
    return (
      <Dialog 
        title="Mars Exploration Program" 
        message="How should we refer to you?">
        <input
          value={this.state.login}
          onChange={this.handleChange} />
        <button
          onClick={this.handleSignup} >
          Sign me up!
        </button>
      </Dialog>
    );
  }
}

ReactDOM.render(<SignUpDialog />, document.getElementById('root'));
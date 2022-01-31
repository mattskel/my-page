import { nextTick } from "process";
import React from "react";
import ReactDOM from "react-dom";
// import App from "./App.js";
// ReactDOM.render(<App />, document.getElementById("root"));

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) return <UserGreeting />;

  return <GuestGreeting />;
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const button = (isLoggedIn)
      ? <LogoutButton onClick={this.handleLogoutClick} />
      : <LoginButton onClick={this.handleLoginClick} />
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <ListItem key={number.toString()} value={number} />
  );

  return <ul>{listItems}</ul>;
}


const numbers = [1,2,3,4,5];
ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('root'));

// ReactDOM.render(<LoginControl />, document.getElementById('root'));
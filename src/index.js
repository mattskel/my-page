import { nextTick } from "process";
import React from "react";
import ReactDOM from "react-dom";
// import App from "./App.js";
// ReactDOM.render(<App />, document.getElementById("root"));

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// From Reacts point of view, these two components are the same

// Elements can be represented as user defined components
// const element = <Welcome name="Sara" />;

// function App() {
//   return (
//     <div>
//       <Welcome name='Sara'/>
//       <Welcome name='Matt'/>
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  // render gets run each time an update happens
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

// function tick() {
//   ReactDOM.render(<Clock date={new Date()}/>, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// What we actually want
ReactDOM.render(<Clock />, document.getElementById('root'));
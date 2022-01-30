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

function App() {
  return (
    <div>
      <Welcome name='Sara'/>
      <Welcome name='Matt'/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
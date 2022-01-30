import React from "react";
import ReactDOM from "react-dom";
// import App from "./App.js";
// ReactDOM.render(<App />, document.getElementById("root"));

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = <h1>Hello, {formatName(user)}</h1>;

ReactDOM.render(element, document.getElementById('root'));
import React from "react";
import ReactDOM from "react-dom";
import Age from "./age";
import Name from "./name";
import "./styles.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
    console.log("Index constructor"); // eslint-disable-line
  }
  componentWillMount() {
    console.log("Index componentWillMount"); // eslint-disable-line
  }

  render() {
    return (
      <div>
        <Age />
        <div style={{ height: "2px", width: "100%", background: "red" }} />
        <Name />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import HOC_2 from "../HOC_2";

class FirstList extends React.Component {

  render() {
    return (
      <div>
        <img src={require('../../../assets/1.png')} alt="1.png"/>
      </div>
    );
  }
}

export default HOC_2(FirstList);

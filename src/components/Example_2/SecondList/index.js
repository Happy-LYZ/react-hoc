import React from "react";
import ReactDOM from "react-dom";
import HOC_2 from "../HOC_2";

class SecondList extends React.Component {

  render() {
    return (
      <div>
        <img src={require('../../../assets/2.png')} alt="2.png"/>
      </div>
    );
  }
}

export default HOC_2(SecondList);

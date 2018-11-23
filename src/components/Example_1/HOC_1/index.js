import React from "react";
import ReactDOM from "react-dom";

// 函数接受一个组件参数……
function HOC_1(WrappedComponent, key) {
  // ……返回另一个新组件……
  return class extends React.Component {
    constructor(props) {
      super(props);
      console.log("HOC constructor"); // eslint-disable-line
      this.state = {
        fields: {}
      };
    }

    componentWillMount() {
      console.log("HOC componentWillMount"); // eslint-disable-line
    }

    onChange = fieldName => e => {
      const { fields } = this.state;
      fields[fieldName] = e.target.value;
      this.setState({
        fields
      });
    };

    getValue = fieldName => {
      return this.state.fields[fieldName];
    };

    render() {
      const props = {
        ...this.props,
        onChange: this.onChange,
        getValue: this.getValue
      };
      console.log("this.props", props);
      return <WrappedComponent {...props} />;
    }
  };
}

export default HOC_1;

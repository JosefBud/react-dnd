import React, { Component } from "react";

export default class Test extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return <h1>Hello</h1>;
  }
}

import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.html";
import "./index.scss";
import "./media/dragon.svg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: "oh hey"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.test === "oh hey"
      ? this.setState({ test: "fuck you" })
      : this.setState({ test: "oh hey" });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>{this.state.test}</h1>
            <Button onClick={this.handleClick}>Change me, daddy</Button>
            <h1>It works right now though</h1>
            <img src="media/dragon.svg" />
          </Col>
        </Row>
      </Container>
    );
  }
}

render(<App />, document.getElementById("app"));

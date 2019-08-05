import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/index";
import { Container, Row, Col } from "react-bootstrap";
import BaseInfoComp from "./components/baseInfo";
import CharacterStatsComp from "./components/characterStats";
import CharacterSkillsComp from "./components/characterSkills";
import SavingThrowsComp from "./components/savingThrows";

import "./index.html";
import "./index.scss";
import "./media/dragon.svg";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid>
        <img src="media/dragon.svg" className="background-image" />
        <BaseInfoComp />
        <CharacterStatsComp />
        <Row>
          <CharacterSkillsComp />
          <Col lg="3">
            <SavingThrowsComp />
          </Col>
        </Row>
      </Container>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

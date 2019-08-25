import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/index";
import { Container, Row, Col } from "react-bootstrap";
import BaseInfoComp from "./components/baseInfo";
import CharacterStatsComp from "./components/characterStats";
import CharacterSkillsComp from "./components/characterSkills";
import SavingThrowsComp from "./components/savingThrows";
import HitPointsComp from "./components/hitPoints";
import SensesComp from "./components/senses";
import ProfArmorInitComp from "./components/profArmorInit";
import InspirAbilitySaveComp from "./components/inspirAbilitySave";
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
          <Col lg="3" className="background--fill border rounded">
            <SavingThrowsComp />
            <SensesComp />
          </Col>
          <Col lg="2" className="text-center background--fill border rounded">
            <HitPointsComp />
          </Col>
          <Col className="text-center background--fill border rounded">
            <ProfArmorInitComp />
            <InspirAbilitySaveComp />
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

import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../redux/index";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Card,
  CardGroup
} from "react-bootstrap";

import {
  setStatPoints,
  setStatMods,
  setSkillMods,
  setSavingThrowMod
} from "../redux/actions";

class CharacterStats extends Component {
  constructor(props) {
    super(props);

    this.calculateStatModifier = this.calculateStatModifier.bind(this);
    this.renderStatCards = this.renderStatCards.bind(this);
  }

  calculateStatModifier(statName, points) {
    let parsedPoints = parseInt(points);
    let modifier = Math.round((parsedPoints - 11) / 2);
    if (modifier < 0) {
      modifier = 0;
    }

    this.props.characterStats[statName].related.forEach(skill => {
      store.dispatch(setSkillMods(skill, modifier));
    });

    store.dispatch(setSavingThrowMod(statName, modifier));
    store.dispatch(setStatMods(statName, modifier));
  }

  renderStatCards(statName) {
    const statVarName = statName.toLowerCase();

    return (
      <Card>
        <Card.Title>{statName}</Card.Title>
        <h2>+{this.props.characterStats[statVarName].mod}</h2>
        <InputGroup className="input--smaller mx-auto">
          <FormControl
            value={this.props.characterStats[statVarName].points}
            type="number"
            className="input--stats"
            aria-label="input"
            aria-describedby={statName}
            onChange={event => {
              this.calculateStatModifier(statVarName, event.target.value);
              store.dispatch(
                setStatPoints(statVarName, parseInt(event.target.value))
              );
            }}
          />
        </InputGroup>
      </Card>
    );
  }

  render() {
    return (
      <Row>
        <Col className="text-center">
          <CardGroup>
            {this.renderStatCards("Strength")}
            {this.renderStatCards("Dexterity")}
            {this.renderStatCards("Constitution")}
            {this.renderStatCards("Intelligence")}
            {this.renderStatCards("Wisdom")}
            {this.renderStatCards("Charisma")}
          </CardGroup>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    characterStats: state.characterStats,
    characterSkills: state.characterSkills
  };
};

const CharacterStatsComp = connect(
  mapStateToProps,
  null
)(CharacterStats);

export default CharacterStatsComp;

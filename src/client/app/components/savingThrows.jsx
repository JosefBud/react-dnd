import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../redux/index";
import { Row, Col, ListGroup } from "react-bootstrap";
import { setSavingThrowMod, setSavingThrowProf } from "../redux/actions";

class SavingThrows extends Component {
  constructor(props) {
    super(props);

    this.calculateSavingThrowMod = this.calculateSavingThrowMod.bind(this);
  }

  calculateSavingThrowMod(statName) {
    store.dispatch(
      setSavingThrowProf(statName, !this.props.savingThrows[statName].prof)
    );
    let baseModifier = this.props.characterStats[statName].mod;
    if (store.getState().savingThrows[statName].prof) {
      baseModifier += 3;
    }

    store.dispatch(setSavingThrowMod(statName, baseModifier));
  }

  renderSavingThrows(statName, shortenedName) {
    return (
      <ListGroup.Item className="flex-fill border-top-0">
        <input
          type="checkbox"
          className="checkbox"
          checked={this.props.savingThrows[statName].prof}
          onChange={event => {
            this.calculateSavingThrowMod(statName);
          }}
          aria-label="Checkbox"
          aria-describedby={statName}
        />
        <span className="skill-modifier px-2">
          +{this.props.savingThrows[statName].mod}
        </span>
        <span>{shortenedName}</span>
      </ListGroup.Item>
    );
  }
  render() {
    return (
      <Row>
        <Col>
          <Row>
            <Col className="text-center">
              <ListGroup.Item>
                <h5 className="my-0">Saving Throws</h5>
              </ListGroup.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <ListGroup className="list-group-horizontal w-100">
                {this.renderSavingThrows("strength", "Str")}
                {this.renderSavingThrows("intelligence", "Int")}
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <ListGroup className="list-group-horizontal w-100">
                {this.renderSavingThrows("dexterity", "Dex")}
                {this.renderSavingThrows("wisdom", "Wis")}
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <ListGroup className="list-group-horizontal w-100">
                {this.renderSavingThrows("constitution", "Con")}
                {this.renderSavingThrows("charisma", "Cha")}
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    characterStats: state.characterStats,
    savingThrows: state.savingThrows
  };
};

const SavingThrowsComp = connect(
  mapStateToProps,
  null
)(SavingThrows);

export default SavingThrowsComp;

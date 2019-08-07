import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../redux/index";
import {
  Row,
  Col,
  Table,
  DropdownButton,
  Dropdown,
  Button,
  ButtonGroup,
  FormControl,
  InputGroup
} from "react-bootstrap";

import {
  setMaxHP,
  setCurrentHP,
  setUsedHitDice,
  setRemainingHitDice,
  setDeathSaves
} from "../redux/actions";

class HitPoints extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeHP: 0
    };

    this.subtractHP = this.subtractHP.bind(this);
    this.addHP = this.addHP.bind(this);
    this.handleHitDice = this.handleHitDice.bind(this);
  }

  /*   componentDidMount() {
    store.dispatch(setRemainingHitDice(this.props.characterLevel));
  } */

  subtractHP() {
    store.dispatch(
      setCurrentHP(this.props.hitPoints.current - this.state.changeHP)
    );
    this.setState({ changeHP: 0 });
  }

  addHP() {
    store.dispatch(
      setCurrentHP(this.props.hitPoints.current + this.state.changeHP)
    );
    this.setState({ changeHP: 0 });
  }

  handleHitDice(number) {
    store.dispatch(setUsedHitDice(number));
    store.dispatch(setRemainingHitDice(this.props.characterLevel));
  }

  renderDeathSaves(type, index) {
    return (
      <input
        type="checkbox"
        className="checkbox mx-1"
        aria-label="Checkbox"
        checked={this.props.deathSaves[type][index]}
        onChange={event => {
          store.dispatch(setDeathSaves(type, index));
        }}
      />
    );
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="px-0">
            <h5>Current HP</h5>
            <InputGroup className="input--smaller mx-auto">
              <FormControl
                value={this.props.hitPoints.current}
                className="input--stats"
                type="number"
                onChange={event => {
                  store.dispatch(setCurrentHP(parseInt(event.target.value)));
                }}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 pt-3">
            <span>Change HP</span>
            <InputGroup className="input--smaller mx-auto">
              <FormControl
                value={this.state.changeHP}
                className="input--stats"
                type="number"
                onChange={event => {
                  this.setState({ changeHP: parseInt(event.target.value) });
                }}
              />
            </InputGroup>
            <ButtonGroup className="pt-1">
              <Button onClick={this.addHP} variant="success">
                Heal (+)
              </Button>
              <Button onClick={this.subtractHP} variant="danger">
                DMG (-)
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 pt-3">
            <span>Max HP</span>
            <InputGroup className="input--smaller mx-auto">
              <FormControl
                value={this.props.hitPoints.max}
                className="input--stats"
                type="number"
                onChange={event => {
                  store.dispatch(setMaxHP(parseInt(event.target.value)));
                }}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 pt-3">
            <h5>Hit Dice</h5>
            <Table borderless className="text-center w-50 mx-auto mb-0">
              <tbody>
                <tr>
                  <th className="py-0">#</th>
                  <th className="py-0">Die</th>
                </tr>
                <tr>
                  <td>{this.props.characterLevel}</td>
                  <td>d10+{this.props.constitutionMod}</td>
                </tr>
              </tbody>
            </Table>
            <Row>
              <Col className="px-2" lg={{ span: 5, offset: 1 }}>
                <span>Used</span>
              </Col>
              <Col className="px-2" lg="5">
                <span>Remaining</span>
              </Col>
            </Row>
            <Row>
              <Col className="px-2" lg={{ span: 5, offset: 1 }}>
                <InputGroup className="w-100 mx-auto">
                  <FormControl
                    value={this.props.hitPoints.usedHitDice}
                    className="input--stats"
                    type="number"
                    onChange={event => {
                      this.handleHitDice(parseInt(event.target.value));
                    }}
                  />
                </InputGroup>
              </Col>
              <Col className="px-2 pt-1" lg="5">
                <span>{this.props.hitPoints.remainingHitDice}</span>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="px-0 pt-3">
            <h5>Death Saves</h5>
            <span>Successes</span>
            <br />
            {this.renderDeathSaves("successes", 0)}
            {this.renderDeathSaves("successes", 1)}
            {this.renderDeathSaves("successes", 2)}
            <br />
            <span>Failures</span>
            <br />
            {this.renderDeathSaves("failures", 0)}
            {this.renderDeathSaves("failures", 1)}
            {this.renderDeathSaves("failures", 2)}
          </Col>
        </Row>
        <Row>
          <Col className="px-0 pt-3">
            <h5>Speed</h5>
            <InputGroup className="input--smaller mx-auto pb-2">
              <FormControl className="input--stats" type="number" />
            </InputGroup>
            <span>Encumbered</span>
            <InputGroup className="input--smaller mx-auto">
              <FormControl className="input--stats" type="number" />
            </InputGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hitPoints: state.hitPoints,
    deathSaves: state.deathSaves,
    characterLevel: state.characterLevel,
    constitutionMod: state.characterStats.constitution.mod
  };
};

const HitPointsComp = connect(
  mapStateToProps,
  null
)(HitPoints);

export default HitPointsComp;

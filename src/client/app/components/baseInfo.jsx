import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../redux/index";
import {
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import {
  setXP,
  setLevel,
  setRemainingHitDice,
  setProfBonus
} from "../redux/actions";

class BaseInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addXP: 0
    };

    this.handleXPAdd = this.handleXPAdd.bind(this);
  }

  handleXPAdd() {
    store.dispatch(setXP(store.getState().characterXP + this.state.addXP));
    const newXP = store.getState().characterXP;

    function determineLevel() {
      if (newXP >= 355000) {
        return 20;
      } else if (newXP >= 305000) {
        return 19;
      } else if (newXP >= 265000) {
        return 18;
      } else if (newXP >= 225000) {
        return 17;
      } else if (newXP >= 195000) {
        return 16;
      } else if (newXP >= 165000) {
        return 15;
      } else if (newXP >= 140000) {
        return 14;
      } else if (newXP >= 120000) {
        return 13;
      } else if (newXP >= 100000) {
        return 12;
      } else if (newXP >= 85000) {
        return 11;
      } else if (newXP >= 64000) {
        return 10;
      } else if (newXP >= 48000) {
        return 9;
      } else if (newXP >= 34000) {
        return 8;
      } else if (newXP >= 23000) {
        return 7;
      } else if (newXP >= 14000) {
        return 6;
      } else if (newXP >= 6500) {
        return 5;
      } else if (newXP >= 2700) {
        return 4;
      } else if (newXP >= 900) {
        return 3;
      } else if (newXP >= 300) {
        return 2;
      } else {
        return 1;
      }
    }

    const newLevel = determineLevel();
    store.dispatch(setLevel(newLevel));
  }

  render() {
    return (
      <Row className="align-items-center">
        <Col lg="5">
          <InputGroup size="lg">
            <InputGroup.Prepend>
              <InputGroup.Text>Character Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder=""
              aria-label="input"
              aria-describedby="Character Name"
            />
          </InputGroup>
        </Col>
        <Col lg="7">
          <Row>
            <Col lg="4">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Class</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder=""
                  aria-label="input"
                  aria-describedby="Character Class"
                />
              </InputGroup>
            </Col>
            <Col lg="4">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Race</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder=""
                  aria-label="input"
                  aria-describedby="Character Race"
                />
              </InputGroup>
            </Col>
            <Col lg="4">
              <DropdownButton title="Background">
                <Dropdown.Item>Test BG 1</Dropdown.Item>
                <Dropdown.Item>Test BG 2</Dropdown.Item>
                <Dropdown.Item>
                  Holy hecc this is a super duper long background name wtf
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <InputGroup className="mx-auto input--small">
                <InputGroup.Prepend>
                  <InputGroup.Text>Level</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  value={this.props.characterLevel}
                  className="input--stats"
                  aria-label="input"
                  type="number"
                  aria-describedby="Character Level"
                  onChange={event => {
                    store.dispatch(setLevel(parseInt(event.target.value)));
                    store.dispatch(
                      setRemainingHitDice(parseInt(event.target.value))
                    );
                  }}
                />
              </InputGroup>
            </Col>
            <Col lg="4">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>XP</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  value={this.props.characterXP}
                  className="input--stats"
                  type="number"
                  aria-label="input"
                  aria-describedby="Character XP"
                  onChange={event => {
                    store.dispatch(setXP(parseInt(event.target.value)));
                  }}
                />
              </InputGroup>
            </Col>
            <Col lg="4">
              <InputGroup>
                <FormControl
                  type="number"
                  aria-label="input"
                  aria-describedby="Add Character XP"
                  onChange={event => {
                    this.setState({ addXP: parseInt(event.target.value) });
                  }}
                />
                <InputGroup.Append>
                  <Button onClick={this.handleXPAdd}>Add XP</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    characterLevel: state.characterLevel,
    characterXP: state.characterXP
  };
};

const BaseInfoComp = connect(
  mapStateToProps,
  null
)(BaseInfo);

export default BaseInfoComp;

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
import { setXP, setLevel } from "../redux/actions";

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
                  aria-label="input"
                  type="number"
                  aria-describedby="Character Level"
                  onChange={event => {
                    store.dispatch(setLevel(parseInt(event.target.value)));
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

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

import { setMaxHP, setCurrentHP } from "../redux/actions";

class HitPoints extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeHP: 0
    };

    this.subtractHP = this.subtractHP.bind(this);
    this.addHP = this.addHP.bind(this);
  }

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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hitPoints: state.hitPoints
  };
};

const HitPointsComp = connect(
  mapStateToProps,
  null
)(HitPoints);

export default HitPointsComp;

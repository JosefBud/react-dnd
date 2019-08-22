import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../redux/index";
import { Row, Col, FormControl } from "react-bootstrap";
import {
  setSavingThrowMod,
  setSavingThrowProf,
  setResistances
} from "../redux/actions";

class Senses extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="text-center">
        <Col>
          <hr />
          <h5>Senses</h5>
          <div className="border border-success rounded">
            <p className="font-weight-bold mb-1">Passive Wisdom (Perception)</p>
            <h2>{this.props.passiveWisdom}</h2>
          </div>
          <p className="font-weight-bold">Additional</p>
          <FormControl as="textarea" rows="3" />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    passiveWisdom: state.passiveWisdom
  };
};

const SensesComp = connect(
  mapStateToProps,
  null
)(Senses);

export default SensesComp;

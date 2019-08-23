import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

class ProfArmorInit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col>
          <Row>
            <Col className="border border-success border-bottom-0 rounded-top mx-1 p-1">
              <h5>Proficiency Bonus</h5>
            </Col>
            <Col className="border border-success border-bottom-0 rounded-top mx-1 p-1">
              <h5>Armor Class</h5>
            </Col>
            <Col className="border border-success border-bottom-0 rounded-top mx-1 p-1">
              <h5>initiative</h5>
            </Col>
          </Row>
          <Row>
            <Col className="border border-success border-top-0 rounded-bottom mx-1 p-1">
              <h3>+{this.props.profBonus}</h3>
            </Col>
            <Col className="border border-success border-top-0 rounded-bottom mx-1 p-1">
              <h3>{this.props.armorClass}</h3>
            </Col>
            <Col className="border border-success border-top-0 rounded-bottom mx-1 p-1">
              <h3>+{this.props.initiative}</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    profBonus: state.profBonus,
    armorClass: state.armorClass,
    initiative: state.initiative
  };
};

const ProfArmorInitComp = connect(
  mapStateToProps,
  null
)(ProfArmorInit);

export default ProfArmorInitComp;

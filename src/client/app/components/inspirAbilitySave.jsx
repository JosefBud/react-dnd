import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import {
  setInspiration,
  setAbilitySaveStat,
  setAbilitySaveDC
} from "../redux/actions";
import store from "../redux";

class InspirAbilitySave extends Component {
  constructor(props) {
    super(props);
  }

  calculateAbilitySaveDC() {
    if (!this.props.abilitySave.stat) {
      return 0;
    }
    const statMod = store.getState().characterStats[this.props.abilitySave.stat]
      .mod;
    const level = this.props.characterLevel;
    const levelMod = Math.ceil(level / 4) - 1;
    const dc = 10 + statMod + levelMod;
    //store.dispatch(setAbilitySaveDC(dc));

    return dc;
  }

  render() {
    return (
      <Row>
        <Col>
          <h5>Inspiration</h5>
          <input
            type="checkbox"
            className="checkbox checkbox--big"
            checked={this.props.inspiration}
            onChange={event => {
              store.dispatch(setInspiration(!this.props.inspiration));
            }}
            aria-label="Checkbox"
            aria-describedby="Inspiration"
          />
        </Col>
        <Col>
          <h5>Ability Save DC</h5>
          <Row>
            <Col lg="4">
              <h3>{this.calculateAbilitySaveDC()}</h3>
            </Col>
            <Col lg="8">
              <DropdownButton
                className="w-100 button--smaller-text"
                title={
                  this.props.abilitySave.stat
                    ? this.props.abilitySave.stat
                    : "None"
                }
              >
                {Object.keys(this.props.characterStats).map((stat, index) => {
                  return (
                    <Dropdown.Item
                      key={index}
                      onSelect={(eventKey, event) => {
                        store.dispatch(setAbilitySaveStat(stat));
                      }}
                    >
                      {stat}
                    </Dropdown.Item>
                  );
                })}
              </DropdownButton>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    inspiration: state.inspiration,
    abilitySave: state.abilitySave,
    characterStats: state.characterStats,
    characterLevel: state.characterLevel
  };
};

const InspirAbilitySaveComp = connect(
  mapStateToProps,
  null
)(InspirAbilitySave);

export default InspirAbilitySaveComp;

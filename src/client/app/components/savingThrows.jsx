import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../redux/index";
import {
  Row,
  Col,
  Table,
  DropdownButton,
  Dropdown,
  FormControl
} from "react-bootstrap";
import {
  setSavingThrowMod,
  setSavingThrowProf,
  setResistances
} from "../redux/actions";

class SavingThrows extends Component {
  constructor(props) {
    super(props);

    this.calculateSavingThrowMod = this.calculateSavingThrowMod.bind(this);
    this.renderSavingThrows = this.renderSavingThrows.bind(this);
    this.renderResistances = this.renderResistances.bind(this);
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

  renderSavingThrows(statName1, shortenedName1, statName2, shortenedName2) {
    return (
      <tr>
        <td className="py-1">
          <input
            type="checkbox"
            className="checkbox"
            checked={this.props.savingThrows[statName1].prof}
            onChange={event => {
              this.calculateSavingThrowMod(statName1);
            }}
            aria-label="Checkbox"
            aria-describedby={statName1}
          />
          <span className="skill-modifier px-2">
            +{this.props.savingThrows[statName1].mod}
          </span>
          <span>{shortenedName1}</span>
        </td>
        <td className="py-1">
          <input
            type="checkbox"
            className="checkbox"
            checked={this.props.savingThrows[statName2].prof}
            onChange={event => {
              this.calculateSavingThrowMod(statName2);
            }}
            aria-label="Checkbox"
            aria-describedby={statName2}
          />
          <span className="skill-modifier px-2">
            +{this.props.savingThrows[statName2].mod}
          </span>
          <span>{shortenedName2}</span>
        </td>
      </tr>
    );
  }

  renderResistances(key) {
    return (
      <tr>
        <td className="p-1">
          <DropdownButton
            className="w-100 button--smaller-text"
            title={this.props.savingThrows.chosenResistances[key]}
            key={key}
          >
            {this.props.savingThrows.allResistances.map((resistance, index) => {
              return (
                <Dropdown.Item
                  key={index}
                  onSelect={(eventKey, event) => {
                    store.dispatch(setResistances(key, event.target.innerHTML));
                  }}
                >
                  {resistance}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </td>
        <td className="p-1">
          <DropdownButton
            className="w-100 button--smaller-text"
            title={this.props.savingThrows.chosenResistances[key + 1]}
            key={key + 1}
          >
            {this.props.savingThrows.allResistances.map((resistance, index) => {
              return (
                <Dropdown.Item
                  key={index}
                  onSelect={(eventKey, event) => {
                    store.dispatch(
                      setResistances(key + 1, event.target.innerHTML)
                    );
                  }}
                >
                  {resistance}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <Table className="" borderless>
        <thead className="text-center">
          <tr>
            <th colSpan="2">
              <h5>Saving Throws</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.renderSavingThrows("strength", "Str", "intelligence", "Int")}
          {this.renderSavingThrows("dexterity", "Dex", "wisdom", "Wis")}
          {this.renderSavingThrows("constitution", "Con", "charisma", "Cha")}
        </tbody>
        <thead className="text-center">
          <tr>
            <th colSpan="2">Resistances</th>
          </tr>
        </thead>
        <tbody>
          {this.renderResistances(1)}
          {this.renderResistances(3)}
          {this.renderResistances(5)}
        </tbody>
        <thead className="text-center">
          <tr>
            <th colSpan="2">Additional</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">
              <FormControl as="textarea" rows="3" />
            </td>
          </tr>
        </tbody>
      </Table>
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

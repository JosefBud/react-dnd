import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../redux/index";
import { Row, Col, Badge, ListGroup } from "react-bootstrap";
import { setSkillMods, setSkillProf, setSkillExp } from "../redux/actions";

class CharacterSkills extends Component {
  constructor(props) {
    super(props);

    this.calculateSkillModifier = this.calculateSkillModifier.bind(this);
    this.renderSkillCards = this.renderSkillCards.bind(this);
  }

  calculateSkillModifier(skillVarName, relatedStat, prof, exp) {
    if (prof) {
      store.dispatch(
        setSkillProf(
          skillVarName,
          !this.props.characterSkills[skillVarName].prof
        )
      );
    }

    if (exp) {
      store.dispatch(
        setSkillExp(skillVarName, !this.props.characterSkills[skillVarName].exp)
      );
    }

    let relatedStatVar = relatedStat.toLowerCase();
    let baseModifier = this.props.characterStats[relatedStatVar].mod;
    if (store.getState().characterSkills[skillVarName].prof) {
      baseModifier += 3;
      if (store.getState().characterSkills[skillVarName].exp) {
        baseModifier += 3;
      }
    }

    store.dispatch(setSkillMods(skillVarName, baseModifier));
  }

  renderSkillCards(skillName, skillVarName, relatedStat) {
    const relatedStatShorthand = relatedStat.substring(0, 3);

    return (
      <ListGroup.Item className="pt-0 pb-1">
        <Row className="py-0">
          <Col lg="1" className="text-center">
            <span className="font-weight-bold">P</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={this.props.characterSkills[skillVarName].prof}
              onChange={event => {
                this.calculateSkillModifier(
                  skillVarName,
                  relatedStat,
                  true,
                  false
                );
              }}
              aria-label="Checkbox"
              aria-describedby={relatedStatShorthand}
            />
          </Col>
          <Col lg="1" className="text-center">
            <span className="font-weight-bold">E</span>
            <input
              type="checkbox"
              className="checkbox"
              checked={this.props.characterSkills[skillVarName].exp}
              onChange={event => {
                this.calculateSkillModifier(
                  skillVarName,
                  relatedStat,
                  false,
                  true
                );
              }}
              aria-label="Checkbox"
              aria-describedby={relatedStatShorthand}
            />
          </Col>
          <Col lg="7 text-right">
            {skillName}{" "}
            <Badge variant="secondary">{relatedStatShorthand}</Badge>
          </Col>
          <Col lg="2">
            <span className="skill-modifier">
              +{this.props.characterSkills[skillVarName].mod}
            </span>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }

  render() {
    return (
      <Col lg="3">
        <ListGroup>
          <ListGroup.Item className="py-2 text-center">
            <h5>Skills</h5>
            <span className="border-right px-2">P = Proficient</span>
            <span className="border-left px-2">E = Expert</span>
          </ListGroup.Item>
          {this.renderSkillCards("Acrobatics", "acrobatics", "Dexterity")}
          {this.renderSkillCards("Animal Handling", "animalHandling", "Wisdom")}
          {this.renderSkillCards("Arcana", "arcana", "Intelligence")}
          {this.renderSkillCards("Athletics", "athletics", "Strength")}
          {this.renderSkillCards("Deception", "deception", "Charisma")}
          {this.renderSkillCards("History", "history", "Intelligence")}
          {this.renderSkillCards("Insight", "insight", "Wisdom")}
          {this.renderSkillCards("Intimidation", "intimidation", "Charisma")}
          {this.renderSkillCards(
            "Investigation",
            "investigation",
            "Intelligence"
          )}
          {this.renderSkillCards("Medicine", "medicine", "Wisdom")}
          {this.renderSkillCards("Nature", "nature", "Intelligence")}
          {this.renderSkillCards("Perception", "perception", "Wisdom")}
          {this.renderSkillCards("Performance", "performance", "Charisma")}
          {this.renderSkillCards("Persuasion", "persuasion", "Charisma")}
          {this.renderSkillCards("Religion", "religion", "Intelligence")}
          {this.renderSkillCards(
            "Sleight of Hand",
            "sleightOfHand",
            "Dexterity"
          )}
          {this.renderSkillCards("Stealth", "stealth", "Dexterity")}
          {this.renderSkillCards("Survival", "survival", "Wisdom")}
        </ListGroup>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    characterStats: state.characterStats,
    characterSkills: state.characterSkills
  };
};

const CharacterSkillsComp = connect(
  mapStateToProps,
  null
)(CharacterSkills);

export default CharacterSkillsComp;

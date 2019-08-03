import React, { Component } from "react";
import { render } from "react-dom";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
  Card,
  CardGroup,
  Badge,
  ListGroup
} from "react-bootstrap";
import Test from "./components/test";
import "./index.html";
import "./index.scss";
import "./media/dragon.svg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterXP: 0,
      addXP: 0,
      characterLevel: 1,
      stats: {
        strength: 0,
        strengthMod: 0,
        dexterity: 0,
        dexterityMod: 0,
        constitution: 0,
        constitutionMod: 0,
        intelligence: 0,
        intelligenceMod: 0,
        wisdom: 0,
        wisdomMod: 0,
        charisma: 0,
        charismaMod: 0
      },
      skills: {
        acrobaticsProf: false,
        acrobaticsExp: false,
        animalHandlingProf: false,
        animalHandlingExp: false,
        arcanaProf: false,
        arcanaExp: false,
        deceptionProf: false,
        deceptionExp: false,
        historyProf: false,
        historyExp: false,
        insightProf: false,
        insightExp: false,
        intimidationProf: false,
        intimidationExp: false,
        investigationProf: false,
        investigationExp: false,
        medicineProf: false,
        medicineExp: false,
        natureProf: false,
        natureExp: false,
        perceptionProf: false,
        perceptionExp: false,
        performanceProf: false,
        performanceExp: false,
        persuasionProf: false,
        persuasionExp: false,
        religionProf: false,
        religionExp: false,
        sleightOfHandProf: false,
        sleightOfHandExp: false,
        stealthProf: false,
        stealthExp: false,
        survivalProf: false,
        survivalExp: false
      },
      inputFields: [1, 2, 3, 4],
      test: "oh hey"
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderField = this.renderField.bind(this);
    this.handleXPAdd = this.handleXPAdd.bind(this);
    this.calculateStatModifier = this.calculateStatModifier.bind(this);
    this.calculateSkillModifier = this.calculateSkillModifier.bind(this);
    this.renderStatCards = this.renderStatCards.bind(this);
    this.renderSkillCards = this.renderSkillCards.bind(this);
  }
  componentDidUpdate() {}

  calculateStatModifier(statModName, points) {
    let parsedPoints = parseInt(points);
    let modifier = Math.round((parsedPoints - 11) / 2);
    if (modifier < 0) {
      modifier = 0;
    }

    this.setState(prevState => ({
      stats: {
        ...prevState.stats,
        [statModName]: modifier
      }
    }));
  }

  calculateSkillModifier(skill) {}

  handleClick() {
    let inputFields = this.state.inputFields;
    let lastOne = inputFields.pop();
    inputFields.push(lastOne);
    inputFields.push(lastOne + 1);
    this.setState({ inputFields: inputFields });
  }

  handleXPAdd() {
    const xpToAdd = parseInt(this.state.addXP);
    this.setState({ characterXP: this.state.characterXP + xpToAdd });
  }

  renderField() {
    return this.state.inputFields.map((text, index) => {
      return (
        <div key={index}>
          <input type="text" id={text} />
        </div>
      );
    });
  }

  renderStatCards(statName) {
    const statVarName = statName.toLowerCase();
    const statModName = statVarName + "Mod";

    return (
      <Card>
        <Card.Title>{statName}</Card.Title>
        <h2>+{this.state.stats[statModName]}</h2>
        <InputGroup className="input--smaller mx-auto">
          <FormControl
            value={this.state.stats[statVarName]}
            className="input--stats"
            aria-label="input"
            aria-describedby={statName}
            onChange={event => {
              this.setState({
                stats: {
                  ...this.state.stats,
                  [statVarName]: event.target.value
                }
              });
              this.calculateStatModifier(statModName, event.target.value);
            }}
          />
        </InputGroup>
      </Card>
    );
  }

  renderSkillCards(skillName, relatedStat) {
    const skillProf = skillName.toLowerCase() + "Prof";
    const skillExp = skillName.toLowerCase() + "Exp";
    return (
      <ListGroup.Item className="py-0">
        <Row className="py-0">
          <Col lg="2" className="text-center px-0">
            <p>Prof.</p>
          </Col>
          <Col lg="2" className="text-center px-0">
            <p>Exp.</p>
          </Col>
          <Col lg="8 text-right">
            {skillName} <Badge variant="secondary">{relatedStat}</Badge>
          </Col>
        </Row>
        <Row className="py-0">
          <Col lg="2">
            <input
              type="checkbox"
              checked={this.state.skills[skillProf]}
              onChange={event => {
                this.setState({
                  skills: {
                    ...this.state.skills,
                    [skillProf]: !this.state.skills[skillProf]
                  }
                });
              }}
              aria-label="Checkbox"
              aria-describedby={relatedStat}
            />
          </Col>
          <Col lg="2">
            <input
              type="checkbox"
              checked={this.state.skills[skillExp]}
              onChange={event => {
                this.setState({
                  skills: {
                    ...this.state.skills,
                    [skillExp]: !this.state.skills[skillExp]
                  }
                });
              }}
              aria-label="Checkbox"
              aria-describedby={relatedStat}
            />
          </Col>
          <Col lg="8 text-right">
            <h5>+2</h5>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }

  render() {
    return (
      <Container fluid>
        <img src="media/dragon.svg" className="background-image" />
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
                    value={this.state.characterLevel}
                    aria-label="input"
                    aria-describedby="Character Level"
                    onChange={event => {
                      this.setState({ characterLevel: event.target.value });
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
                    value={this.state.characterXP}
                    aria-label="input"
                    aria-describedby="Character XP"
                    onChange={event => {
                      this.setState({ characterXP: event.target.value });
                    }}
                  />
                </InputGroup>
              </Col>
              <Col lg="4">
                <InputGroup>
                  <FormControl
                    placeholder=""
                    aria-label="input"
                    aria-describedby="Add Character XP"
                    onChange={event => {
                      this.setState({ addXP: event.target.value });
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
        <Row>
          <Col className="text-center">
            <CardGroup>
              {this.renderStatCards("Strength")}
              {this.renderStatCards("Dexterity")}
              {this.renderStatCards("Constitution")}
              {this.renderStatCards("Intelligence")}
              {this.renderStatCards("Wisdom")}
              {this.renderStatCards("Charisma")}
            </CardGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <ListGroup>
              {this.renderSkillCards("Acrobatics", "Dex")}
              {this.renderSkillCards("Animal Handling", "Wis")}
              {this.renderSkillCards("Arcana", "Int")}
              {this.renderSkillCards("Athletics", "Str")}
              {this.renderSkillCards("Deception", "Cha")}
              {this.renderSkillCards("History", "Int")}
              {this.renderSkillCards("Insight", "Wis")}
              {this.renderSkillCards("Intimidation", "Cha")}
              {this.renderSkillCards("Investigation", "Int")}
              {this.renderSkillCards("Medicine", "Wis")}
              {this.renderSkillCards("Nature", "Int")}
              {this.renderSkillCards("Perception", "Wis")}
              {this.renderSkillCards("Performance", "Cha")}
              {this.renderSkillCards("Persuasion", "Cha")}
              {this.renderSkillCards("Religion", "Int")}
              {this.renderSkillCards("Sleight of Hand", "Dex")}
              {this.renderSkillCards("Stealth", "Dex")}
              {this.renderSkillCards("Survival", "Wis")}
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <ListGroup />
          </Col>
        </Row>
      </Container>
    );
  }
}

render(<App />, document.getElementById("app"));

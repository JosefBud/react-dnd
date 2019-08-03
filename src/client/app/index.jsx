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
        strength: {
          points: 0,
          mod: 0,
          related: ["athletics"]
        },
        dexterity: {
          points: 0,
          mod: 0,
          related: ["acrobatics", "sleightOfHand", "stealth"]
        },
        constitution: {
          points: 0,
          mod: 0,
          related: []
        },
        intelligence: {
          points: 0,
          mod: 0,
          related: ["arcana", "history", "investigation", "nature", "religion"]
        },
        wisdom: {
          points: 0,
          mod: 0,
          related: [
            "animalHandling",
            "insight",
            "medicine",
            "perception",
            "survival"
          ]
        },
        charisma: {
          points: 0,
          mod: 0,
          related: ["deception", "intimidation", "performance", "persuasion"]
        }
      },
      skills: {
        acrobatics: {
          mod: 0,
          prof: false,
          exp: false
        },
        animalHandling: {
          mod: 0,
          prof: false,
          exp: false
        },
        arcana: {
          mod: 0,
          prof: false,
          exp: false
        },
        athletics: {
          mod: 0,
          prof: false,
          exp: false
        },
        deception: {
          mod: 0,
          prof: false,
          exp: false
        },
        history: {
          mod: 0,
          prof: false,
          exp: false
        },
        insight: {
          mod: 0,
          prof: false,
          exp: false
        },
        intimidation: {
          mod: 0,
          prof: false,
          exp: false
        },
        investigation: {
          mod: 0,
          prof: false,
          exp: false
        },
        medicine: {
          mod: 0,
          prof: false,
          exp: false
        },
        nature: {
          mod: 0,
          prof: false,
          exp: false
        },
        perception: {
          mod: 0,
          prof: false,
          exp: false
        },
        performance: {
          mod: 0,
          prof: false,
          exp: false
        },
        persuasion: {
          mod: 0,
          prof: false,
          exp: false
        },
        religion: {
          mod: 0,
          prof: false,
          exp: false
        },
        sleightOfHand: {
          mod: 0,
          prof: false,
          exp: false
        },
        stealth: {
          mod: 0,
          prof: false,
          exp: false
        },
        survival: {
          mod: 0,
          prof: false,
          exp: false
        }
      }
    };

    this.handleXPAdd = this.handleXPAdd.bind(this);
    this.calculateStatModifier = this.calculateStatModifier.bind(this);
    this.calculateSkillModifier = this.calculateSkillModifier.bind(this);
    this.renderStatCards = this.renderStatCards.bind(this);
    this.renderSkillCards = this.renderSkillCards.bind(this);
  }
  componentDidUpdate() {}

  calculateStatModifier(statName, points) {
    let parsedPoints = parseInt(points);
    let modifier = Math.round((parsedPoints - 11) / 2);
    if (modifier < 0) {
      modifier = 0;
    }

    this.state.stats[statName].related.forEach(skill => {
      this.setState(prevState => ({
        skills: {
          ...prevState.skills,
          [skill]: {
            ...prevState.skills[skill],
            mod: modifier
          }
        }
      }));
    });

    this.setState(prevState => ({
      stats: {
        ...prevState.stats,
        [statName]: {
          ...prevState.stats[statName],
          points: parsedPoints,
          mod: modifier
        }
      }
    }));
  }

  calculateSkillModifier(skillVarName, relatedStat, prof, exp) {
    if (prof) {
      this.setState(
        prevState => ({
          skills: {
            ...prevState.skills,
            [skillVarName]: {
              ...prevState.skills[skillVarName],
              prof: !this.state.skills[skillVarName].prof
            }
          }
        }),
        () => {
          afterStateUpdate();
        }
      );
    }

    if (exp) {
      this.setState(
        prevState => ({
          skills: {
            ...prevState.skills,
            [skillVarName]: {
              ...prevState.skills[skillVarName],
              exp: !this.state.skills[skillVarName].exp
            }
          }
        }),
        () => {
          afterStateUpdate();
        }
      );
    }

    const afterStateUpdate = () => {
      let relatedStatVar = relatedStat.toLowerCase();
      let baseModifier = this.state.stats[relatedStatVar].mod;
      if (this.state.skills[skillVarName].prof) {
        baseModifier += 3;
        if (this.state.skills[skillVarName].exp) {
          baseModifier += 3;
        }
      }

      this.setState(prevState => ({
        skills: {
          ...prevState.skills,
          [skillVarName]: {
            ...prevState.skills[skillVarName],
            mod: baseModifier
          }
        }
      }));
    };
  }

  handleXPAdd() {
    const xpToAdd = parseInt(this.state.addXP);
    this.setState({ characterXP: this.state.characterXP + xpToAdd });
  }

  renderStatCards(statName) {
    const statVarName = statName.toLowerCase();

    return (
      <Card>
        <Card.Title>{statName}</Card.Title>
        <h2>+{this.state.stats[statVarName].mod}</h2>
        <InputGroup className="input--smaller mx-auto">
          <FormControl
            value={this.state.stats[statVarName].points}
            className="input--stats"
            aria-label="input"
            aria-describedby={statName}
            onChange={event => {
              this.setState({
                stats: {
                  ...this.state.stats,
                  [statVarName]: {
                    ...this.state.stats[statVarName],
                    points: event.target.value
                  }
                }
              });
              this.calculateStatModifier(statVarName, event.target.value);
            }}
          />
        </InputGroup>
      </Card>
    );
  }

  renderSkillCards(skillName, skillVarName, relatedStat) {
    const relatedStatShorthand = relatedStat.substring(0, 3);

    return (
      <ListGroup.Item className="py-0">
        <Row className="py-0">
          <Col lg="1" className="text-center">
            <span>P</span>
            <input
              type="checkbox"
              checked={this.state.skills[skillVarName].prof}
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
            <span>E</span>
            <input
              type="checkbox"
              checked={this.state.skills[skillVarName].exp}
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
              +{this.state.skills[skillVarName].mod}
            </span>
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
              <ListGroup.Item className="py-0 text-center">
                <h5>Skills</h5>
                <span>
                  P = Proficient
                  <br />E = Expert
                </span>
              </ListGroup.Item>
              {this.renderSkillCards("Acrobatics", "acrobatics", "Dexterity")}
              {this.renderSkillCards(
                "Animal Handling",
                "animalHandling",
                "Wisdom"
              )}
              {this.renderSkillCards("Arcana", "arcana", "Intelligence")}
              {this.renderSkillCards("Athletics", "athletics", "Strength")}
              {this.renderSkillCards("Deception", "deception", "Charisma")}
              {this.renderSkillCards("History", "history", "Intelligence")}
              {this.renderSkillCards("Insight", "insight", "Wisdom")}
              {this.renderSkillCards(
                "Intimidation",
                "intimidation",
                "Charisma"
              )}
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

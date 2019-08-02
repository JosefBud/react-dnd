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
  DropdownButton
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
      inputFields: [1, 2, 3, 4],
      test: "oh hey"
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderField = this.renderField.bind(this);
    this.handleXPAdd = this.handleXPAdd.bind(this);
  }

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
                <InputGroup className="mx-auto" style={{ width: "8em" }}>
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
          <Col>
            <Test data="tits" otherData="poop" />
          </Col>
        </Row>
      </Container>
    );
  }
}

render(<App />, document.getElementById("app"));

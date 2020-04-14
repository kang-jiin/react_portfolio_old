import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import MyNavbar from "components/MyNavbar.js";
import AboutMe from "components/AboutMe.js";
import Career from "components/Career.js";
import Skills from "components/Skills.js";
import Projects from "components/Projects.js";
import MyFooter from "components/MyFooter.js";

// index page sections
import Download from "./IndexSections/Download.js";

class Main extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MyNavbar />
        <main ref="main">
          <AboutMe />
          <section className="section section-components">
            <Container>
              <Skills />
              <Career />
            </Container>
          </section>
          <Projects />
          {/* <Download /> */}
        </main>
        <MyFooter />
      </>
    );
  }
}

export default Main;

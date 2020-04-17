import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
  Container
} from "reactstrap";

// core components
import HomeNavbar from "components/HomeNavbar.js";
import MyNavbar from "components/MyNavbar.js";
import AboutMe from "components/AboutMe.js";
import Career from "components/Career.js";
import Skills from "components/Skills.js";
import Projects from "components/Projects.js";
import MyFooter from "components/MyFooter.js";

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
        {/* <MyNavbar /> */}
        <HomeNavbar />
        <main ref="main">
          <AboutMe />
          <section className="section section-components">
            <Container>
              <Skills />
              <Career />
            </Container>
          </section>
          <Projects />
        </main>
        <MyFooter />
      </>
    );
  }
}

export default Main;

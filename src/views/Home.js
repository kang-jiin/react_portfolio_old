import React from "react";
// nodejs library that concatenates classes

// core components
import HomeNavbar from "components/HomeNavbar.js";
import AboutMe from "components/home/AboutMe.js";
import Proj_summary from "components/home/Proj_summary.js";
import Career from "components/home/Career.js";
import Skills from "components/home/Skills.js";
import Projects from "components/home/Projects.js";
import MyFooter from "components/MyFooter.js";

class Home extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <HomeNavbar />
        <main ref="main">
          <AboutMe />
          <Proj_summary />
          <Skills />
          <Career />
          <Projects />
        </main>
        <MyFooter />
      </>
    );
  }
}

export default Home;

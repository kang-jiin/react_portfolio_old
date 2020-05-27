import React from "react";

// core components
import MyNavbar from "components/MyNavbar.js";
import Summary from "components/football/Summary.js";
import UI_summary from "components/football/UI_summary.js";
import Skill from "components/football/Skill.js";
import Database from "components/football/Database.js";
import UI_home from "components/football/UI_home.js";
import UI_login from "components/football/UI_login.js";
import UI_inout from "components/football/UI_inout.js";
import UI_admin from "components/football/UI_admin.js";
import UI_community from "components/football/UI_community.js";
import Demo from "components/football/Demo.js";
import ScrollTopBtn from "components/ScrollTop.js";

class Football extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    document.documentElement.style.scrollBehavior = "smooth";
  }
  render() {
    return (
      <>
        <MyNavbar />
        <main ref="main">
          <Summary />
          <UI_summary />
          <Skill />
          <Database />
          <UI_home />
          <div id="login"><UI_login /></div>
          <div id="inout"><UI_inout /></div>
          <div id="admin"><UI_admin /></div>
          <UI_community />
        </main>
        <Demo />
        <ScrollTopBtn />
      </>
    );
  }
}

export default Football;

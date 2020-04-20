import React from "react";

// core components
import MyNavbar from "components/MyNavbar.js";
import Summary from "components/kdkd/Summary.js";
import Skill from "components/kdkd/Skill.js";
import Database from "components/kdkd/Database.js";
import UI_home from "components/kdkd/UI_home.js";
import UI_summary from "components/kdkd/UI_summary.js";
import UI_login from "components/kdkd/UI_login.js";
import UI_inout from "components/kdkd/UI_inout.js";
import UI_admin from "components/kdkd/UI_admin.js";
import UI_community from "components/kdkd/UI_community.js";
import MyFooter from "components/MyFooter.js";

class Kdkd extends React.Component {
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
        <MyFooter />
      </>
    );
  }
}

export default Kdkd;

import React from "react";

// core components
import SubNavbar from "components/football/SubNavbar.js";
import MyNavbar from "components/MyNavbar.js";
import Summary from "components/football/Summary.js";
import UI_summary from "components/football/UI_summary.js";
import Skill from "components/football/Skill.js";
import Database from "components/football/Database.js";
import UI_home from "components/football/UI_home.js";
import UI_postinsert from "components/football/UI_postinsert.js";
import UI_postdetail from "components/football/UI_postdetail.js";
import UI_apply from "components/football/UI_apply.js";
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
        <SubNavbar />
        <MyNavbar />
        <main ref="main">
          <Summary />
          <UI_summary />
          <Skill />
          <Database />
          <UI_home />
          <UI_postinsert />
          <UI_postdetail />
          <UI_apply />
          <UI_inout />
          <UI_admin />
          <UI_community />
        </main>
        <Demo />
        <ScrollTopBtn />
      </>
    );
  }
}

export default Football;

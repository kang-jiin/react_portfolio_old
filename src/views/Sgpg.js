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
import Summary from "components/sgpg/Summary.js";
import UI_summary from "components/sgpg/UI_summary.js";
import Skill from "components/sgpg/Skill.js";
import Database from "components/sgpg/Database.js";
import UI_home from "components/sgpg/UI_home.js";
import UI_user from "components/sgpg/UI_user.js";
import UI_itemadd from "components/sgpg/UI_itemadd.js";
import UI_itemdetail from "components/sgpg/UI_itemdetail.js";
import MyFooter from "components/MyFooter.js";

// index page sections
import Download from "./IndexSections/Download.js";

class Sgpg extends React.Component {
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
          <div id="home"><UI_home /></div>
          <div id="login"><UI_user /></div>
          <UI_itemadd />
          <div id="itemdetail"><UI_itemdetail /></div>
        </main>
        <MyFooter />
      </>
    );
  }
}

export default Sgpg;

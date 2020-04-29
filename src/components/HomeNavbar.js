import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
// import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class HomeNavbar extends React.Component {
  componentDidMount() {
    // let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    // headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            // className="navbar-main fixed-top navbar-transparent navbar-light"
            className="fixed-top navbar-dark bg-default"
            expand="lg"
            // id="navbar-main"
          >
            <Container>
              {/* logo */}
              {/* <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/argon-react-white.png")}
                />
                <span className="nav-link-inner--text ml-2">
                  Home
                </span>
              </NavbarBrand> */}
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      {/* <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                        <span className="nav-link-inner--text ml-2">
                          Home
                        </span>
                      </Link> */}
                        <span className="nav-link-inner--text ml-2">
                          Menu
                        </span>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink
                      // href="https://www.facebook.com/creativetim"
                      onClick={() => {
                        document.getElementById('aboutme').scrollIntoView();
                     }}
                    >
                      <i className="fa fa-user-circle d-lg-none" />
                      <span className="nav-link-inner--text ml-2">
                        About Me
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      // href="https://www.instagram.com/creativetimofficial"
                      onClick={() => {
                        document.getElementById('skills').scrollIntoView();
                     }}
                    >
                      <i className="fa fa-check d-lg-none" />
                      <span className="nav-link-inner--text ml-2">
                        Skills
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      // href="https://twitter.com/creativetim"
                      onClick={() => {
                        document.getElementById('career').scrollIntoView();
                     }}
                    >
                      {/* <i className="fa fa-upload d-lg-none" /> */}
                      <i className="ni ni-user-run d-lg-none" />
                      <span className="nav-link-inner--text">
                        Career
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      // href="https://github.com/creativetimofficial/argon-design-system-react"
                      onClick={() => {
                        document.getElementById('projects').scrollIntoView();
                     }}
                    >
                      <i className="fa fa-code d-lg-none" />
                      <span className="nav-link-inner--text">
                        Projects
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://github.com/KangG"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-github mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Github
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default HomeNavbar;

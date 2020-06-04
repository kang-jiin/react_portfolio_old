import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
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
    // // initialise
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
            className="py-2 fixed-top navbar-dark bg-default"
            // className="navbar-main navbar-transparent navbar-light headroom"
            // className="fixed-top navbar-dark bg-default navbar-transparent headroom"
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
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">HOME</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/kdkd" tag={Link}>
                      키드키득
                      </DropdownItem>
                      <DropdownItem to="/sgpg" tag={Link}>
                      사구팔구
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink href="#aboutme">
                      <i className="fa fa-user-circle d-lg-none" />
                      <span className="nav-link-inner--text ml-2">
                        About Me
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#skills">
                      <i className="fa fa-check d-lg-none" />
                      <span className="nav-link-inner--text ml-2">
                        Skills
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#career">
                      <i className="ni ni-user-run d-lg-none" />
                      <span className="nav-link-inner--text">
                        Career
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#projects">
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

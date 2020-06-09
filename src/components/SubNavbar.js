import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class SubNavbar extends React.Component {
  componentDidMount() {

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
            expand="lg"
          >
            <Container>
              <button className="navbar-toggler" id="navbar_global_sgpg">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global_sgpg"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <span className="nav-link-inner--text ml-2">
                        Menu
                        </span>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global_sgpg">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink href="#summary">
                      <i className="fa fa-pencil-square-o d-lg-none" />
                      <span className="nav-link-inner--text ml-2">
                        Summary
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#skill">
                      <i className="fa fa-check d-lg-none" />
                      <span className="nav-link-inner--text ml-2">
                        Skill
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#database">
                      <i className="fa fa-database d-lg-none" />
                      <span className="nav-link-inner--text">
                        Database
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#ui">
                      <i className="ni ni-laptop d-lg-none" />
                      <span className="nav-link-inner--text">
                        UI
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#demo">
                      <i className="ni ni-controller d-lg-none" />
                      <span className="nav-link-inner--text">
                        Demo
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

export default SubNavbar;

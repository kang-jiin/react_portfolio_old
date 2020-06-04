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

class HomeNavbar extends React.Component {
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
              <button className="navbar-toggler" id="navbar_global_home">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global_home"
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
                      <button className="navbar-toggler" id="navbar_global_home">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
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

import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

class Skills extends React.Component {
  render() {
    return (
      <>
        <h2 className="mt-lg mb-5" id="skills">
          <span>Skills</span>
        </h2>
        <h3 className="h4 text-success font-weight-bold mt-5">Language</h3>
        <Row>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              C
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/skills/icons8-c-programming-500.png")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              C++
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/skills/cpppp-490x490.png")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              Java
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/skills/java.png")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              JavaScript
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/skills/900px-JavaScript-logo.png")}
              style={{ width: "150px" }}
            />
          </Col>
        </Row>
        <h3 className="h4 text-success font-weight-bold mt-5">Web</h3>
        <Row className="align-items-center">
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              HTML
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/skills/html.png")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              CSS
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/skills/css.png")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              JQuery
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/skills/jquery.png")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col className="mt-5 mt-sm-0" sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              Node.js
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/skills/icons8-nodejs-500.png")}
              style={{ width: "150px" }}
            />
          </Col>
        </Row>
        <h3 className="h4 text-success font-weight-bold mt-5">Database</h3>
        <Row className="align-items-center">
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              Oracle
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/skills/oracle.png")}
              style={{ width: "150px" }}
            />
          </Col>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              MySQL
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={require("assets/img/skills/mysql.png")}
              style={{ width: "150px" }}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Skills;

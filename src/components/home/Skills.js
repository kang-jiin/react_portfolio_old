import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import img_C from 'assets/img/skills/icons8-c-programming-500.png';
import img_cpp from 'assets/img/skills/cpppp-490x490.png';
import img_java from 'assets/img/skills/java.png';
import img_js from 'assets/img/skills/900px-JavaScript-logo.png';
import img_html from 'assets/img/skills/html.png';
import img_css from 'assets/img/skills/css.png';
import img_jquery from 'assets/img/skills/jquery.png';
import img_node from 'assets/img/skills/icons8-nodejs-500.png';
import orcacle from 'assets/img/skills/oracle.png';
import mysql from 'assets/img/skills/mysql.png';

class Skills extends React.Component {
  render() {
    return (
      <>
      <section className="section section-components" id="skills">
        <Container>
        <h2 className="mt-5">
          <span>Skills</span>
        </h2>
        <h3 className="h4 text-success font-weight-bold mt-4">Language</h3>
        <Row>
          <Col sm="3" xs="6">
            <small className="d-block text-uppercase font-weight-bold mb-4">
              C
            </small>
            <img
              alt="..."
              className="img-fluid rounded shadow-lg"
              src={img_C}
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
              src={img_cpp}
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
              src={img_java}
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
              src={img_js}
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
              src={img_html}
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
              src={img_css}
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
              src={img_jquery}
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
              src={img_node}
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
              src={orcacle}
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
              src={mysql}
              style={{ width: "150px" }}
            />
          </Col>
        </Row>
        </Container>
      </section>
      </>
    );
  }
}

export default Skills;

import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardImg,
  Container,
  NavLink,
  Row,
  Col
} from "reactstrap";

class Projects extends React.Component {
  render() {
    return (
      <>
        <Container className="container-lg mb-5">
        <h2 className="mt-0 mb-5">
          <span>Projects</span>
        </h2>
          <Row>
            <Col className="mb-5 mb-md-0" md="6">
              <Card className="card-lift--hover shadow border-0">
                <a
                href="http://ec2-52-79-50-30.ap-northeast-2.compute.amazonaws.com:7777/"
                target="_blank"
                >
                  <CardImg
                    alt="..."
                    src={require("assets/img/kdkd.PNG")}
                  />
                </a>
              </Card>
            </Col>
            <Col className="mb-5 mb-lg-0" md="6">
              <Card className="card-lift--hover shadow border-0">
                <a 
                href="http://ec2-52-79-50-30.ap-northeast-2.compute.amazonaws.com:8888/"
                target="_blank"
                >
                  <CardImg
                    alt="..."
                    src={require("assets/img/4989.PNG")}
                  />
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Projects;

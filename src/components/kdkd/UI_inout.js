import React from "react";

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

class UI_inout extends React.Component {
  render() {
    return (
      <>
      <section className="section bg-secondary">
        <Container>
          <Row className="row-grid align-items-center">
            <Col md="6">
              <Card className="bg-default shadow border-0">
                <CardImg
                    className="bg-scendary"
                  alt="..."
                  src={require("assets/img/kdkd_inout_hw2.png")}
                  top
                />
                <blockquote className="card-blockquote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-bg"
                    preserveAspectRatio="none"
                    viewBox="0 0 583 95"
                  >
                    <polygon
                      className="fill-default"
                      points="0,52 583,95 0,95"
                    />
                    <polygon
                      className="fill-default"
                      opacity=".2"
                      points="0,42 583,95 683,0 0,95"
                    />
                  </svg>
                  <h4 className="display-3 font-weight-bold text-white">
                    등하원
                  </h4>
                  <p className="lead text-italic text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </Card>
            </Col>
            <Col md="6">
              <div className="pl-md-5">
                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                  <i className="ni ni-settings" />
                </div>
                <h3>등하원</h3>
                <p className="lead">
                  Don't let your uses guess by attaching tooltips and
                  popoves to any element. Just make sure you enable them
                  first via JavaScript.
                </p>
                <p>
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and
                  you're good to go.
                </p>
                <p>
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and
                  you're good to go.
                </p>
                <a
                  className="font-weight-bold text-warning mt-5"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  A beautiful UI Kit for impactful websites
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </>
    );
  }
}

export default UI_inout;
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class MyFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  끝까지 읽어주셔서 감사합니다!
                </h4>
              </Col>
              <Col className="text-lg-right btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://github.com/KangG"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  Jane kang
                </div>
              </Col>
              <Col className="text-lg-right" md="6">
                <div className="copyright">
                  dmssk13@gmail.com
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default MyFooter;

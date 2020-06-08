import React from "react";

import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

class UI_home extends React.Component {
  render() {
    return (
      <>
        <section className="section pb-0 bg-gradient-warning" id="ui">
          <Container className="my-5">
            <Row className="row-grid align-items-center">
              <Col md="12">
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-laptop text-primary" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h4 className="display-3 text-white">UI & Function</h4>
                    <h3 className="text-white">Home</h3>
                  </div>
                </div>
              </Col>
              <Col className="order-lg-2 ml-lg-auto" md="8">
                <div className="position-relative">
                  <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require("assets/img/kdkd/kdkd_home.png")}
                  />
                </div>
              </Col>
              <Col className="order-lg-1" md="4">
                <Card className="shadow shadow-lg--hover mt-3">
                  <CardBody>
                    <div className="d-flex align-items-center mb-2">
                      <div>
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="fa fa-th-list" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <h5 className="title text-success">
                          상단바
                        </h5>
                      </div>
                    </div>
                    <h6>등하원 여부(등원/미등원/하원) 표시</h6>
                    <h6>회원 이름 표시</h6>
                  </CardBody>
                </Card>
                <Card className="shadow shadow-lg--hover mt-4">
                  <CardBody>
                    <div className="d-flex align-items-center mb-2">
                      <div>
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                          <i className="fa fa-camera" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <h5 className="title text-warning">
                          반 내부
                        </h5>
                      </div>
                    </div>
                    <h6>센서 수치 표시</h6>
                    <h6>실시간 CCTV 화면 제공</h6>
                    <h6>CCTV 스트리밍 별도 서버 구현</h6>
                    <h6>센서 시간별 그래프 제공</h6>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row><br/><br/></Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default UI_home;
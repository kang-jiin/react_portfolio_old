import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

class Summary extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6" className="d-flex flex-column">
                    <div className="p-2">
                      <h1 className="display-2 text-white">
                        키드키득{" "}
                      </h1>
                      <h1 className="display-4 text-white">
                        <span>아이(kid)를 웃게하는(키득) </span>
                        <span>유치원 자동 등하원 관리 시스템</span>
                      </h1>
                    </div>
                    <div className="btn-wrappe align-self-left mt-auto p-2">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="info"
                        href="http://kdkd.kangjiinportfolio.ga"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-code" />
                        </span>
                        <span className="btn-inner--text">Demo</span>
                      </Button>
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href="https://github.com/KangG/kdkd_aws"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-code" />
                        </span>
                        <span className="btn-inner--text">Code</span>
                      </Button>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div>
                      <ul className="list-unstyled mt-5">
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="info"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h5 className="text-white mb-0">개발 기간</h5>
                            </div>
                          </div>
                          <h6 className="text-white mb-0 ml-5">2019.12.05 ~ 2020.01.06</h6>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="info"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h5 className="text-white mb-0">개발 인원 : 3명</h5>
                            </div>
                          </div>
                        </li>
                        <li className="py-2"></li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="info"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h5 className="text-white mb-0">역할</h5>
                            </div>
                          </div>
                          <h6 className="text-white mb-0 ml-5">DB 설계 및 관리</h6>
                          <h6 className="text-white mb-0 ml-5">로그인 및 세션 관리</h6>
                          <h6 className="text-white mb-0 ml-5">SNS 간편 로그인</h6>
                          <h6 className="text-white mb-0 ml-5">관리자 기능, 게시판, 일정 구현</h6>
                          <h6 className="text-white mb-0 ml-5">CCTV 스트리밍 기능</h6>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
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
          {/* 1st Hero Variation */}
        </div>
      </>
    );
  }
}

export default Summary;

import React from "react";
// reactstrap components
import {
  Badge,
  Card,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

class Projects extends React.Component {
  render() {
    return (
      <>
        <section className="section section-components" id="projects">
          <Container>
            <h2 className="my-5">
              <span>Projects</span>
            </h2>
            <a href="/kdkd" >
              <Card className="card-lift--hover shadow border-0 mb-3">
                <Row className="align-items-center m-0">
                  <Col className="mb-md-0" lg="6" >
                    <CardImg
                      alt="..."
                      src={require("assets/img/kdkd/kdkd_home.png")}
                    />
                  </Col>
                  <Col className="p-3" lg="6" >
                    <div>
                      <h1 className="display-3 text-primary">
                        키드키득{" "}
                      </h1>
                      <h5>
                        유치원 자동 등하원 관리 시스템
                      </h5>
                    </div>
                    <div>
                      <ul className="list-unstyled mt-4">
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="primary"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h5 className="mb-0">개발 기간 : 2019.12.05 ~ 2020.01.06</h5>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="primary"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h5 className="mb-0">개발 인원 : 3명</h5>
                            </div>
                          </div>
                        </li>
                        <li className="">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="primary"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h5 className="mb-0">사용 기술</h5>
                            </div>
                          </div>
                          <h6 className="mb-0 ml-5">Node.js, MySQL, HTML, CSS, Javascript, Bootstrap</h6>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Card>
            </a>
            <a href="/sgpg" >
              <Card className="card-lift--hover shadow border-0 mb-3">
                <Row className="align-items-center m-0">
                  <Col className="mb-md-0" lg="6" >
                    <CardImg
                      alt="..."
                      src={require("assets/img/sgpg/4989.PNG")}
                    />
                  </Col>
                  <Col className="p-3" lg="6" >
                    <div>
                      <h1 className="display-3 text-primary">
                        사구팔구
                      </h1>
                      <h5>
                        <span>경매 중고 거래 사이트</span>
                      </h5>
                    </div>
                    <div>
                      <ul className="list-unstyled mt-3">
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="primary"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h5 className="mb-0">개발 기간 : 2019.09.09 ~ 2019.10.11</h5>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="primary"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h5 className="mb-0">개발 인원 : 4명</h5>
                            </div>
                          </div>
                        </li>
                        <li className="">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="primary"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h5 className="mb-0">사용 기술</h5>
                            </div>
                          </div>
                          <h6 className="mb-0 ml-5">Node.js, MySQL, HTML, CSS, Javascript, Bootstrap</h6>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Card>
            </a>
            <a href="/football" >
              <Card className="card-lift--hover shadow border-0 mb-3">
                <Row className="align-items-center m-0">
                  <Col className="mb-md-0" lg="6" >
                    <CardImg
                      alt="..."
                      src={require("assets/img/football/home.jpg")}
                    />
                  </Col>
                  <Col className="p-3" lg="6" >
                    <div>
                      <h1 className="display-3 text-primary">
                        모두의 풋살{" "}
                      </h1>
                      <h5>
                        풋살 경기 매칭 서비스
                      </h5>
                    </div>
                    <div>
                      <ul className="list-unstyled mt-4">
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="primary"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h5 className="mb-0">개발 기간 : 2020.05.14 ~ 2020.05.27</h5>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="primary"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h5 className="mb-0">개발 인원 : 4명</h5>
                            </div>
                          </div>
                        </li>
                        <li className="">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="primary"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h5 className="mb-0">사용 기술</h5>
                            </div>
                          </div>
                          <h6 className="mb-0 ml-5">Java, Spring 5v, Oracle(AWS RDS), Apach Tomcat, JSP</h6>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Card>
            </a>
          </Container>
        </section>
      </>
    );
  }
}

export default Projects;

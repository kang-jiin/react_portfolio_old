import React from "react";

import {
  Badge,
  Container,
  Row,
  Col
} from "reactstrap";

class UI_login extends React.Component {
  render() {
    return (
      <><section className="section section-lg">
        <Container>
          <Row className="row-grid align-items-center">
            <Col className="order-md-2" md="8">
              <img
                alt="..."
                className="img-fluid floating"
                src={require("assets/img/kdkd/kdkd_login3.png")}
              />
            </Col>
            <Col className="order-md-1" md="4">
              <div className="pr-md-5">
                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-3">
                  <i className="fa fa-user" />
                </div>
                <h3>Login</h3>
                <p>
                  키드키득은 자체 계정, 네이버, 카카오 3가지를 지원합니다.
                  자체 계정은 회원가입 시, SNS 간편 로그인은 최초 로그인 시 학생 등록을 해야만 서비스를 이용할 수 있습니다.
                  키드키득의 모든 기능은 로그인을 해야만 이용할 수 있습니다.
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge
                          className="badge-circle mr-3"
                          color="success"
                        >
                        <i className="ni ni-satisfied" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          키드키득 자체 계정
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge
                          className="badge-circle mr-3"
                          color="success"
                        >
                        <i className="ni ni-satisfied" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          네이버/카카오 로그인 지원
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge
                          className="badge-circle mr-3"
                          color="success"
                        >
                          <i className="ni ni-satisfied" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          회원 가입 시 학생 등록 필수
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </>
    );
  }
}

export default UI_login;
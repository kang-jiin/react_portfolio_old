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
              <Col md="5">
                <Card className="bg-default shadow border-0">
                  <CardImg
                    className="bg-scendary"
                    alt="..."
                    // src={require("assets/img/kdkd_inout_hw2.png")}
                    src={require("assets/img/kdkd/kdkd_img.jpg")}
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
                    <h4 className="display-4 font-weight-bold text-white">
                      인형
                    </h4>
                    <p className="text-italic text-white">
                      아이에게 RFID가 들어간 인형을 부여합니다.
                      RFID는 학생마다 다르며, 이를 통해 유치원 입구와 버스 입구를 지날 때
                      등하원 정보를 자동으로 서버에 저장합니다.
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="7">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-3">
                    <i className="ni ni-settings" />
                  </div>
                  <h3>등하원</h3>
                  <p className="lead">
                    등하원 화면은 목록 형태와 달력 형태로 제공됩니다.<br />
                  학부모 계정은 자신의 아이의 정보만,
                  관리자 계정은 모든 아이의 정보를 확인할 수 있습니다.
                  </p>
                  <p>
                    목록에서는 외출을 포함한 모든 등하원 정보를 표시합니다.
                  </p>
                  <p>
                    달력에서는 그 날의 첫번째 등원과 마지막 하원만 표시합니다.<br />
                  (외출 정보는 생략)
                  </p>
                  <div className="position-relative">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/kdkd/kdkd_inout.png")}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <h3 className="mt-2">HW 구성도</h3>
                <p>
                  Arduino Uno, 미세먼지/온습도 센서, RFID 리더기, Wifi모듈로 구성되어있습니다.
                  센서 값과 등하원 정보가 APACHE 서버를 통해 MySQL Database에 저장됩니다.
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge
                          className="badge-circle mr-3"
                          color="success"
                        >
                          <i className="ni ni-settings-gear-65" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          Arduino Uno, PHP, APACHE 서버 이용
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
                          <i className="ni ni-html5" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          RFID 테깅 시 DB에 자동 저장
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
                          홀수 번째 -> 등원, 짝수 번째 -> 하원 (하루 기준) 으로 저장
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col md="6">
                <img
                  alt="..."
                  className="img-center img-fluid"
                  src={require("assets/img/kdkd/kdkd_inout_hw.png")}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default UI_inout;
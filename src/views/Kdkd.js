import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import MyNavbar from "components/MyNavbar.js";
import Summary from "components/kdkd/Summary.js";
import Skill from "components/kdkd/Skill.js";
import Database from "components/kdkd/Database.js";
import UI_home from "components/kdkd/UI_home.js";
import UI_login from "components/kdkd/UI_login.js";
import UI_inout from "components/kdkd/UI_inout.js";
import UI_admin from "components/kdkd/UI_admin.js";
import UI_community from "components/kdkd/UI_community.js";
import MyFooter from "components/MyFooter.js";

class Kdkd extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MyNavbar />
        <main ref="main">
          <Summary />
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Login
                          </h6>
                          <p className="description mt-3">
                            express-session 모듈<br/>
                            네이버 아이디로 로그인 API<br/>
                            카카오 아이디로 로그인 API
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              키드키득
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              naver
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              kakao
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={() => {
                              document.getElementById('login').scrollIntoView();
                           }}
                          >
                            Detail
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            등하원
                          </h6>
                          <p className="description mt-3">
                            Arduino uno<br/>
                            PHP / APACHE<br/>
                            RFID 테깅 시, 서버에 자동 저장
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Arduino uno
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              PHP / APACHE
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Mysql
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={() => {
                              document.getElementById('inout').scrollIntoView();
                           }}
                          >
                            Detail
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            관리자
                          </h6>
                          <p className="description mt-3">
                            반별 학생 정보 관리<br/>
                            학생 추가 시, RFID Key 자동 생성<br/>
                            관리자 계정만 사용 가능
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              RFID
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Serialport
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Admin
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={() => {
                              document.getElementById('admin').scrollIntoView();
                           }}
                          >
                            Detail
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <Skill />
          <Database />
          <UI_home />
          <div id="login"><UI_login /></div>
          <div id="inout"><UI_inout /></div>
          <div id="admin"><UI_admin /></div>
          <UI_community />

        </main>
        <MyFooter />
      </>
    );
  }
}

export default Kdkd;

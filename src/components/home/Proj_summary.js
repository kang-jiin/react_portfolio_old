import React from "react";

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

class Proj_summary extends React.Component {
  render() {
    return (
      <>
      <section className="section py-lg-0 mt--200">
        <Container>
          <Row className="row-grid text-center justify-content-center">
            {/* <Col lg="4">
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                  <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                    <i className="ni ni-check-bold" />
                  </div>
                  <h6 className="text-primary text-uppercase">
                    가금사양관리
                </h6>
                  <p className="description mt-3">
                    express-session 모듈<br />
                  네이버 아이디로 로그인 API<br />
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
                    // onClick={() => {
                    //   document.getElementById('login').scrollIntoView();
                    // }}
                  >
                    Detail
                </Button>
                </CardBody>
              </Card>
            </Col> */}
            <Col lg="4">
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                  <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                    <i className="ni ni-istanbul" />
                  </div>
                  <h6 className="text-info text-uppercase">
                    키드키득
                  </h6>
                  <p className="description mt-3">
                    유치원 등하원 관리 시스템<br />
                    2019.12.05 ~ 2020.01.06<br />
                    DB 설계 및 Back-End 개발 담당
                </p>
                  <div>
                    <Badge color="info" pill className="mr-2">
                      IoT
                    </Badge>
                    <Badge color="info" pill className="mr-2">
                      Node.js
                    </Badge>
                    <Badge color="info" pill className="mr-2">
                      Mysql
                    </Badge>
                  </div>
                  <div className="text-center">
                    <Button
                      href="/kdkd"
                      className="mt-4"
                      color="info"
                    >
                      Detail
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                  <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                    <i className="fa fa-gavel" />
                  </div>
                  <h6 className="text-warning text-uppercase">
                    사구팔구
                  </h6>
                  <p className="description mt-3">
                    중고 거래 경매 사이트<br />
                    2019.09.09 ~ 2020.10.11<br />
                    DB 설계 및 Back-End 개발 담당
                  </p>
                  <div>
                    <Badge color="warning" pill className="mr-2">
                      Node.js
                    </Badge>
                    <Badge color="warning" pill className="mr-2">
                      Mysql
                    </Badge>
                    <Badge color="warning" pill className="mr-2">
                      Bootstrap
                    </Badge>
                  </div>
                  <div className="text-center">
                    <Button
                      href="/sgpg"
                      className="mt-4"
                      color="warning"
                    >
                      Detail
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                  <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                    <i className="fa fa-futbol-o" />
                  </div>
                  <h6 className="text-success text-uppercase">
                    모두의 풋살
                  </h6>
                  <p className="description mt-3">
                    풋살 경기 매칭 서비스<br />
                    2020.05.14 ~ 2020.05.27<br />
                    Front-End 개발 및 Git관리 담당
                  </p>
                  <div>
                    <Badge color="success" pill className="mr-2">
                      Spring
                    </Badge>
                    <Badge color="success" pill className="mr-2">
                      oracle
                    </Badge>
                    <Badge color="success" pill className="mr-2">
                      Git
                    </Badge>
                  </div>
                  <div className="text-center">
                    <Button
                      href="/football"
                      className="mt-4"
                      color="success"
                    >
                      Detail
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      </>
    );
  }
}

export default Proj_summary;

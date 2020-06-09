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

class UI_summary extends React.Component {
  render() {
    return (
      <>
      <section className="section py-lg-0 mt--200">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                        <i className="fa fa-users" />
                      </div>
                      <h6 className="text-primary text-uppercase">
                        신청
                    </h6>
                      <p className="description mt-3">
                      회원만 신청/신청취소 가능<br />
                      중복 신청 불가 및 메세지 표기<br />
                      공고 등록자 수락/거절 기능
                    </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          신청
                      </Badge>
                        <Badge color="primary" pill className="mr-1">
                          중복 불가
                      </Badge>
                        <Badge color="primary" pill className="mr-1">
                          수락/거절
                      </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="primary"
                        onClick={() => {
                          document.getElementById('apply').scrollIntoView();
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
                      <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                        <i className="fa fa-user" />
                      </div>
                      <h6 className="text-info text-uppercase">
                        My Page
                    </h6>
                      <p className="description mt-3">
                        회원 정보 수정<br />
                        등록 공고 리스트<br />
                        신청 정보 리스트
                    </p>
                      <div>
                        <Badge color="info" pill className="mr-1">
                          수정
                      </Badge>
                        <Badge color="info" pill className="mr-1">
                          공고 리스트
                      </Badge>
                        <Badge color="info" pill className="mr-1">
                          신청 리스트
                      </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="info"
                        onClick={() => {
                          document.getElementById('mypage').scrollIntoView();
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
                        <i className="fa fa-bus" />
                      </div>
                      <h6 className="text-success text-uppercase">
                        평가
                    </h6>
                      <p className="description mt-3">
                        등록/신청 공고<br />
                        경기일 기준으로 종료 판단<br />
                        합산되어 개인 평점으로 제공
                    </p>
                      <div>
                        <Badge color="success" pill className="mr-1">
                          server
                      </Badge>
                        <Badge color="success" pill className="mr-1">
                          spring 5v
                      </Badge>
                        <Badge color="success" pill className="mr-1">
                          개인 평점
                      </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="success"
                        onClick={() => {
                          document.getElementById('evaluation').scrollIntoView();
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
      </>
    );
  }
}

export default UI_summary;

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
      <section className="section section-lg pt-lg-0 mt--200">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                        <i className="fa fa-home" />
                      </div>
                      <h6 className="text-success text-uppercase">
                        Home
                      </h6>
                      <p className="description mt-3">
                        JQuery 숫자만 입력<br />
                        Summer Note WYSIWYG<br />
                        경매 등록, 7일 뒤 자동 종료<br />
                        물품 9개씩 페이징
                      </p>
                      <div>
                        <Badge color="success" pill className="mr-1">
                          JQuery
                        </Badge>
                        <Badge color="success" pill className="mr-1">
                          Summer Note
                        </Badge>
                        <Badge color="success" pill className="mr-1">
                          paging
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="success"
                        onClick={() => {
                          document.getElementById('home').scrollIntoView();
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
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                        <i className="fa fa-user" />
                      </div>
                      <h6 className="text-primary text-uppercase">
                        회원 기능
                      </h6>
                      <p className="description mt-3">
                        express-session 모듈<br />
                        버튼 활성 / 비활성<br />
                        my page<br />
                        등록 물품 / 참여 물품 리스트
                      </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          session
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          경매
                        </Badge>
                        <Badge color="primary" pill className="mr-1">
                          입찰
                        </Badge>
                      </div>
                        <Button
                          className="mt-4"
                          color="primary"
                          onClick={() => {
                            document.getElementById('user').scrollIntoView();
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
                        <i className="ni ni-single-copy-04" />
                      </div>
                      <h6 className="text-warning text-uppercase">
                        물품 상세
                      </h6>
                      <p className="description mt-3">
                        남은 시간 비동기 표기<br />
                        현재 가격 변동 시 같은 페이지를<br/>
                         보는 사용자 화면 모두 변경<br />
                        댓글, 입찰 목록
                      </p>
                      <div>
                        <Badge color="warning" pill className="mr-1">
                          setInterval
                        </Badge>
                        <Badge color="warning" pill className="mr-1">
                          Socket.io
                        </Badge>
                        <Badge color="warning" pill className="mr-1">
                          JQuery
                        </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="warning"
                        onClick={() => {
                          document.getElementById('itemdetail').scrollIntoView();
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

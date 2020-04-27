import React from "react";

import {
  Badge,
  Container,
  Row,
  Col
} from "reactstrap";

class UI_user extends React.Component {
  render() {
    return (
      <>
      <section className="section bg-secondary">
        <Container>
          <Row className="row-grid align-items-center">
            <Col md="2">
              <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-3">
                <i className="fa fa-user" />
              </div>
              <h3>회원 기능</h3>
            </Col>
            <Col md="10">
                <div className="position-relative">
                  <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require("assets/img/sgpg/user.png")}
                  />
                </div>
            </Col>
          </Row>
          <Row className="mb-4">
            <p className="lead">
              사구팔구 서비스는 회원만 경매에 참여할 수 있습니다.
              비회원은 물품 조회만 가능하며, 로그인 시 각 버튼이 활성화 됩니다.
            </p>
            <p>
              "ㅇㅇㅇ님 환영합니다." 메시지 표시<br/>
              My page / 로그아웃 / 물품 올리기 버튼 활성화<br/>
            </p>
          </Row>
          <Row className="row-grid align-items-center">
            <Col md="6">
              <img
                alt="..."
                className="img-center img-fluid"
                src={require("assets/img/sgpg/mypage.png")}
              />
            </Col>
            <Col md="6">
              <h3 className="mt-2">My page</h3>
              <p>
                mypage에서는 회원 정보 수정과 올린 물품, 참여 물품 리스트가 제공됩니다.
                올린 물품 리스트와 참여 물품 리스트는 슬라이드 형식으로, 최근 물품부터 보여집니다.
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
                        회원 정보 수정
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
                        내가 등록한 물품 리스트
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
                        경매에 참여한 물품 리스트
                      </h6>
                    </div>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      </>
    );
  }
}

export default UI_user;
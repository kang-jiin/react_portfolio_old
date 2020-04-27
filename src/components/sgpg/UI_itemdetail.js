import React from "react";

import {
  Badge,
  Card,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

class UI_itemdetail extends React.Component {
  render() {
    return (
      <>
        <section className="section bg-secondary">
          <Container>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <img
                  alt="..."
                  className="img-center img-fluid"
                  src={require("assets/img/sgpg/sgpg_itemdetail.png")}
                />
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-3">
                    <i className="ni ni-single-copy-04" />
                  </div>
                  <h3>물품 상세</h3>
                  <p className="lead">
                    물품을 클릭하면 상세 화면이 나타납니다.<br />
                    상세 화면에서는 물품 정보, 남은 시간, 현재 가격, 판매자 정보와
                    다른 상품 추천, 댓글/입찰 목록 등을 제공합니다.
                  </p>
                  <p>
                    남은 시간은 setInterval을 이용해 비동기로 1초씩 줄어듭니다.
                  </p>
                  <p>
                    현재 가격과 입찰자를 표시하고, 가격 변동 시 비동기로 변경된 현재 가격을 표시합니다.
                    Socket.io를 이용해 같은 페이지를 보고있는 모든 사용자의 화면에 일괄적으로 변경됩니다.
                  </p>
                  <p>
                    입찰은 회원만 버튼이 활성화되어있고,
                    현재 가격보다 높은 가격만 입력할 수 있습니다.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <h3 className="mt-2">낙찰 정보</h3>
                <p>
                  경매 종료 시 낙찰 정보로 화면이 변경됩니다.
                  낙찰자와 낙찰 가격을 표시하고 입찰하기 버튼은 비활성화 됩니다.
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge
                          className="badge-circle mr-3"
                          color="warning"
                        >
                        <i className="ni ni-satisfied" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          Socket.io를 이용한 일괄 가격 변경
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge
                          className="badge-circle mr-3"
                          color="warning"
                        >
                        <i className="ni ni-satisfied" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          남은 시간 비동기로 1초씩 감소
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge
                          className="badge-circle mr-3"
                          color="warning"
                        >
                          <i className="ni ni-satisfied" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          회원만 입찰/댓글 기능 활성화
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
                  src={require("assets/img/sgpg/sgpg_itemdetail2.png")}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default UI_itemdetail;
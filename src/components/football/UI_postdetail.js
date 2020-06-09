import React from "react";

import {
  Badge,
  Card,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

class UI_postdetail extends React.Component {
  render() {
    return (
      <>
        <section className="section bg-secondary" id="itemdetail">
          <Container className="mt-4">
            <Row className="row-grid align-items-center">
              <Col md="6">
                <img
                  alt="..."
                  className="img-center img-fluid"
                  src={require("assets/img/football/post_detail.jpg")}
                />
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-3">
                    <i className="ni ni-single-copy-04" />
                  </div>
                  <h3>공고 정보 화면</h3>
                  <p className="lead">
                    공고 정보 화면에서는 경기일, 경기 장소, 모집 인원과 주최자 정보 등을 제공합니다.
                  </p>
                  <p>
                    상세 설명 하단에 신청 정보가 함께 나타납니다.
                  </p>
                  <p>
                    공고 등록자에게는 [삭제], [모집 마감] 버튼이 표시되고,
                    하단 신청 정보에서 신청자 정보와 상태를 확인할 수 있습니다.
                  </p>
                  <p>
                    신청자는 공고 정보와 신청 화면이 나타납니다.
                    신청된 공고에는 신청 란이 보이지 않습니다.
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
                            공고 정보 및 주최자 정보 제공
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
                            공고 등록자는 [모집 마감], [삭제] 버튼 활성화
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
                            공고 등록자 외에는 신청 정보 일부만 공개
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

export default UI_postdetail;
import React from "react";

import {
  Badge,
  Container,
  Row,
  Col
} from "reactstrap";

class UI_postinsert extends React.Component {
  render() {
    return (
      <><section className="section section-lg">
        <Container>
          <Row className="row-grid align-items-center">
            <Col className="order-md-2" md="8">
              <img
                alt="..."
                className="img-fluid floating"
                src={require("assets/img/sgpg/sgpg_itemadd.png")}
              />
            </Col>
            <Col className="order-md-1" md="4">
              <div className="pr-md-5">
                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-3">
                  <i className="ni ni-ruler-pencil" />
                </div>
                <h3>물품 등록</h3>
                <p>
                  물품 등록은 회원만 가능하며, 모든 정보는 필수 입력 사항입니다.
                  JQuery를 이용해 시작가격과 상한가는 숫자만 입력 가능하고,
                  Summer Note를 사용해 상세 정보는 사진과 글을 함께 작성할 수 있습니다.
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
                          시작 가격 / 상한가 숫자만 입력
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
                          상세 정보 Summer Note WYSIWYG 사용
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
                          등록 시 경매 시작, 7일 뒤 자동 경매 종료
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

export default UI_postinsert;
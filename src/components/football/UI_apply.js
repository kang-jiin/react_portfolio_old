import React from "react";

import {
  Badge,
  Container,
  Row,
  Col
} from "reactstrap";

import apply from 'assets/img/football/apply.PNG';

class UI_apply extends React.Component {
  render() {
    return (
      <><section className="section section-lg" id="apply">
        <Container>
          <Row className="row-grid align-items-center">
            <Col className="order-md-2" md="8">
              <img
                alt="..."
                className="img-center img-fluid"
                src={apply}
              />
            </Col>
            <Col className="order-md-1" md="4">
              <div className="pr-md-5">
                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-3">
                  <i className="fa fa-users " />
                </div>
                <h3>신청</h3>
                <p className="lead">
                  신청 화면은 공고 정보 하단에 나타나고, 회원에게만 신청란과 버튼이 보여집니다.
                </p>
                <p>
                  신청 후에는 자신의 신청 정보에 [신청 취소] 버튼이 나타납니다.
                  중복 신청이 되지 않도록 신청란이 사라지고, '이미 신청된 공고입니다.'라는 메세지가 보여집니다.
                </p>
                <p>
                  공고 등록자에게는 모든 신청자의 연락처가 함께 보여지고,
                  상태에서 [수락] / [거절] 버튼으로 신청을 처리할 수 있습니다.
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge
                          className="badge-circle mr-3"
                          color="primary"
                        >
                        <i className="ni ni-satisfied" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          회원만 신청/신청취소 가능
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge
                          className="badge-circle mr-3"
                          color="primary"
                        >
                        <i className="ni ni-satisfied" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          중복 신청 불가 및 메세지 표기
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge
                          className="badge-circle mr-3"
                          color="primary"
                        >
                          <i className="ni ni-satisfied" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          공고 등록자 수락/거절 기능
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

export default UI_apply;
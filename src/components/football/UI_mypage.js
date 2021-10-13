import React from "react";

import {
  Badge,
  Card,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

import mypage_post from 'assets/img/football/mypage_post.jpg';
import mypage_apply from 'assets/img/football/mypage_apply.jpg';

class UI_mypage extends React.Component {
  render() {
    return (
      <>
        <section className="section bg-secondary" id="mypage">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="mb-4" md="12">
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="fa fa-user text-info" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h4 className="display-3">마이페이지</h4>
                  </div>
                </div>
              </Col>

              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-center img-fluid"
                  src={mypage_post}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <h3>등록 공고 정보</h3>
                  <p>                    
                    등록한 공고 정보를 보여줍니다. 
                    마감된 공고는 경기 날짜가 지나면 경기 종료로 판단해 평가 버튼이 나타납니다.
                  </p>
                  <p className="lead">
                    공고 상태
                  </p>
                  <p>
                    - 모집중<br/>
                    - 모집 마감<br/>
                    - 경기 종료 -> [평가] 버튼 활성화<br/>
                    - 평가 완료 -> [평가 조회] 버튼 활성화<br/>
                  </p>
                </div>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge
                          className="badge-circle mr-3"
                          color="info"
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
                          color="info"
                        >
                          <i className="ni ni-satisfied" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          등록 공고 리스트
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge
                          className="badge-circle mr-3"
                          color="info"
                        >
                          <i className="ni ni-satisfied" />
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">
                          신청 정보 리스트
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <img
                  alt="..."
                  className="img-center img-fluid"
                  src={mypage_apply}
                />
              </Col>
              <Col md="6">
                <h3 className="mt-2">신청 정보</h3>
                <p>
                  회원이 신청한 공고의 리스트를 보여줍니다. 
                  등록 공고와 마찬가지로 수락된 공고 중 경기 날짜가 지나면 평가 버튼이 나타납니다.
                </p>
                <p className="lead">
                  신청 상태
                </p>
                <p>
                  - 신청<br/>
                  - 수락<br/>
                  - 거절<br/>
                  - 경기 종료 -> [평가] 버튼 활성화<br/>
                  - 평가 완료 -> [평가 조회] 버튼 활성화<br/>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default UI_mypage;
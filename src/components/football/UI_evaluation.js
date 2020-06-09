import React from "react";

import {
  Badge,
  Container,
  Row,
  Col
} from "reactstrap";

class UI_evaluation extends React.Component {
  render() {
    return (
      <>
      <section className="section section-lg" id="evaluation">
        <Container>
          <Row className="row-grid align-items-center">
            <Col className="order-md-2" md="5">
              <img
                alt="..."
                className="img-center img-fluid"
                src={require("assets/img/football/evaluation_insert.jpg")}
              />
            </Col>
            <Col className="order-md-1" md="7">
              <div className="pr-md-5">
                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-3">
                  <i className="ni ni-ruler-pencil" />
                </div>
                <h3>평가 등록</h3>
                <p className="lead">
                  마이페이지에서 [평가 등록] 버튼을 클릭하면 평가 등록 화면으로 넘어갑니다.
                </p>
                <p>
                  공고 제목과 경기일, 경기 장소 등 공고 정보가 나타나며,<br/>
                  하단에 점수와 간단한 코멘트를 입력합니다.
                </p>
                <p>
                  평가된 정보는 합산되어 개인 평점으로 제공됩니다.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="row-grid align-items-center">
            <Col md="6">
              <img
                alt="..."
                className="img-center img-fluid"
                src={require("assets/img/football/evaluation_detail.jpg")}
              />
            </Col>
            <Col md="6">
              <h3 className="mt-2">평가 정보</h3>
              <p className="lead">
                해당 공고에 평가를 조회합니다.<br/>
                마이페이지에서 [평가 조회] 버튼을 클릭하면 평가 등록 화면으로 넘어갑니다.
              </p>
              <p>
                간단한 공고 정보와 평가 리스트가 하단에 표기됩니다.
              </p>
              <p>
                사용자가 등록한 공고 / 신청한 공고 모두 평가를 작성할 수 있습니다.
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
                          참여한 모든 공고에 대해 평가 작성
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
                          종료된 공고만 [평가 등록] / [평가 조회] 버튼 활성화
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
                          경기일 기준으로 종료된 공고 자동 판단
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

export default UI_evaluation;
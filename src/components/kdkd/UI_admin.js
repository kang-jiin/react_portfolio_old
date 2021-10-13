import React from "react";

import {
  Badge,
  Container,
  Row,
  Col
} from "reactstrap";

import kdkd_admin from 'assets/img/kdkd/kdkd_admin.png';

class UI_admin extends React.Component {
  render() {
    return (
      <><section className="section section-lg" id="admin">
        <Container className="mt-4">
          <Row className="row-grid align-items-center">
            <Col className="order-md-2" md="8">
              <img
                alt="..."
                className="img-center img-fluid"
                src={kdkd_admin}
              />
            </Col>
            <Col className="order-md-1" md="4">
              <div className="pr-md-5">
                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-3">
                  <i className="ni ni-settings-gear-65" />
                </div>
                <h3>관리자</h3>
                <p>
                  관리자 기능은 관리자 계정에서만 표시됩니다.<br/>
                  관리자 계정은 회원가입으로 생성할 수 없고, 학생 정보 관리, 알림장 작성 등의 기능을 제공합니다.<br/>
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
                          사이드 바에 [관리자 기능] 표시
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
                          반별 학생 정보 추가
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
                          연결된 RFID 리더기를 이용해 출입코드 자동 생성
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

export default UI_admin;
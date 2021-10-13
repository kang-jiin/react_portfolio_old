import React from "react";

import {
  Badge,
  Container,
  Row,
  Col
} from "reactstrap";

import post_insert from 'assets/img/football/post_insert.jpg';

class UI_postinsert extends React.Component {
  render() {
    return (
      <>
      <section className="section section-lg">
        <Container>
          <Row className="row-grid align-items-center">
            <Col className="order-md-2" md="5">
              <img
                alt="..."
                className="img-center img-fluid"
                src={post_insert}
              />
            </Col>
            <Col className="order-md-1" md="7">
              <div className="pr-md-5">
                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-3">
                  <i className="ni ni-ruler-pencil" />
                </div>
                <h3>공고 등록</h3>
                <p>
                  공고 등록은 회원만 가능하며, 모든 정보는 필수 입력 사항입니다.
                </p>
                <p>
                  Bootstrap DatePicker를 이용해 오늘 이후 날짜만 선택 가능하며,<br/>
                  모임 장소는 도로명 주소 API로 입력할 수 있습니다.
                </p>
                <p>
                  내용에는 Summer Note를 사용해 사진과 글을 함께 작성할 수 있습니다.
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
                          Bootstrap DatePicker 이용
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
                          도로명 주소 API로 모임 장소 지정
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
                          내용 Summer Note 사용
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
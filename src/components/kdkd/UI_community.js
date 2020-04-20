import React from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class UI_community extends React.Component {
  render() {
    return (
      <>
        <section className="section bg-secondary">
          <Container className="">
            <Row className="text-center justify-content-center">
              <Col lg="10">
                <div className="d-flex px-3 justify-content-center">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle">
                      <i className="ni ni-check-bold text-info" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h2 className="display-3">Community 기능</h2>
                  </div>
                </div>
                <p className="lead">
                  유치원의 선생님과 학부모간 커뮤니티 기능을 제공합니다. <br/>
                  자유게시판, 알림장, 앨범, 채팅, 일정 기능이 있으며,
                  일부 기능은 관리자 계정만 사용할 수 있습니다.
                </p>
              </Col>
            </Row>
            <Row className="row-grid mt-5">
              <Col lg="6">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle">
                  <i className="ni ni-ruler-pencil text-info" />
                </div>
                <h5 className="mt-3">게시판</h5>
                <p className="mt-3">
                  자유 게시판 기능, 글별 댓글 기능<br/>
                  관리자 계정은 모든 게시글 삭제 가능
                </p>
              </Col>
              <Col lg="6">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle">
                  <i className="ni ni-settings text-info" />
                </div>
                <h5 className="mt-3">채팅</h5>
                <p className="mt-3">
                  전체 채팅/ 반별 채팅 기능<br/>
                  socet.io 모듈 이용
                </p>
              </Col>
            </Row>
            <Row className="row-grid mt-5 align-items-center">
              <Col lg="6">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle">
                  <i className="ni ni-settings text-info" />
                </div>
                <h5 className="mt-3">일정</h5>
                <p className="mt-3">
                  학생 생일 및 유치원 일정 관리<br/>
                  학생 생일은 학생 정보에 등록된 생일로 자동 표기<br/>
                  관리자 계정만 일정 등록/수정/삭제 가능
                </p>
              </Col>
              <Col lg="6">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle">
                  <i className="ni ni-ruler-pencil text-info" />
                </div>
                <h5 className="mt-3">알림장 / 앨범</h5>
                <p className="mt-3">
                  전체 알림장/ 반별 알림장 기능<br/>
                  사진 앨범 기능, 사진별 댓글 기능<br/>
                  관리자 계정만 등록/수정/삭제 가능
                </p>
              </Col>
              {/* <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle">
                  <i className="ni ni-atom text-info" />
                </div>
                <h5 className="mt-3">Launch time</h5>
                <p className="mt-3">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </Col> */}
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default UI_community;
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Career extends React.Component {
  render() {
    return (
      <>
      <section className="section section-components">
        <Container>
        <h2 className="mt-lg mb-5" id="career">
          <span>Career</span>
        </h2>
        {/* <h3 className="h4 text-success font-weight-bold mt-md">Paragraphs</h3> */}
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <h4 className="display-4 text-muted">2015</h4>
          </Col>
          <Col sm="9">
            <p className="text-lead">
              (주)그랜드 연구소 인턴 제어 프로그램 개발 (2015.12 ~ 2016.02)
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <h4 className="display-4 text-primary">2016</h4>
          </Col>
          <Col sm="9">
            <p className="text-lead">
              의공학부 학부연구생 멸균기 제어 프로젝트 참여 (2016.02 ~ 2016.10)
            </p>
            <p className="text-lead">
              (주)퀀텀게이트 개발팀 인턴 (2016.07 ~ 2016.10)
            </p>
            <p className="text-lead">
              입학홍보처 사무보조 (2016.08 ~ 2017.02)
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <h4 className="display-4 text-info">2017</h4>
          </Col>
          <Col sm="9">
            <p className="text-lead">
              (주)프로젝트리서치 솔루션팀 연구원 (2017.03 ~ 2018.06)
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <h4 className="display-4 text-success">2018</h4>
          </Col>
          <Col sm="9">
            <p className="text-lead">
              이코딩아카데미 강의 및 컨텐츠 개발(2018.10 ~ 2019.05)
              </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <h4 className="display-4 text-warning">2019</h4>
          </Col>
          <Col sm="9">
            <p className="text-lead">
              연세대학교(원주) 컴퓨터정보통신공학부 졸업 (2019.02)
            </p>
            <p className="text-lead">
              한국정보기술연구원 IoT 프로그래밍 과정 이수 (2019.08 ~ 2020.01)
            </p>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="3">
            <h4 className="display-4 text-danger">2020</h4>
          </Col>
          <Col sm="9">
            <p className="text-lead">
              한국정보기술연구원 이공계 전문기술 연수 과정 수강중 (2020.04 ~ 2020.09)
            </p>
          </Col>
        </Row>
        </Container>
      </section>
      </>
    );
  }
}

export default Career;

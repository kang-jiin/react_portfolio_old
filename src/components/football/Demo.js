import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

import kdkd_home from 'assets/img/kdkd/kdkd_home.png';

class Demo extends React.Component {
  render() {
    return (
      <>
        <footer className="myfooter my-has-cards" id="demo">
          {/* <Container>
            <Row className=" row-grid align-items-center mt-5">
              <Col>
                <h3 className=" text-primary font-weight-light mb-4">
                  AWS DEMO
                </h3>
              </Col>
            </Row>
          </Container>
          <Container className="container-lg">
            <Row className="justify-content-center">
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Button
                    className="p-0"
                    href="http://ec2-13-125-229-208.ap-northeast-2.compute.amazonaws.com:7777/"
                    target="_blank"
                  >
                    <CardImg
                      alt="..."
                      src={kdkd_home}
                    />
                  </Button>
                </Card>
              </Col>
            </Row>
          </Container> */}
          <Container>
            {/* <Row className=" row-grid align-items-center mt-5 mb-5">
              <Col>
                <h4 className=" mb-0 font-weight-light">
                  게스트 로그인으로 키드키득 시스템을 테스트 할 수 있습니다!
                </h4>
              </Col>
            </Row> */}
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  Jane kang
                </div>
              </Col>
              <Col className="text-lg-right" md="4">
                <div className="copyright">
                  dmssk13@gmail.com
                </div>
              </Col>
              <Col className="text-lg-right btn-wrapper" md="2">
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://github.com/kang-jiin"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Demo;

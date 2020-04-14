import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class AboutMe extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    {/* <h1 className="display-1 mb-0 text-white">Web Developer</h1>
                    <h3 className="display-3 mt-5 text-white">

                      강지인의 포트폴리오입니다.
                    </h3> */}
                    <div>
                      <h2 className="display-1 text-white">Web Developer</h2>
                      <h3 className="display-3 lead text-white mt-8">
                      강지인의 포트폴리오입니다.
                      여기다 뭐라쓰지........
                      </h3>
                    </div>
                    <p className="text-white">
                      dmssk13@gmail.com
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default AboutMe;

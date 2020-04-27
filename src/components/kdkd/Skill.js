import React from "react";

// reactstrap components
import {
    Badge,
    Container,
    Row,
    Col
  } from "reactstrap";

class Skill extends React.Component {
    render() {
        return (
            <>
                <section className="section section-lg">
                    <Container>
                        <Row className="row-grid align-items-center">
                            <Col classname="" md="12">
                                <div className="d-flex">
                                    <div>
                                        <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                                            <i className="ni ni-check-bold " />
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        <h4 className="display-3">Skill</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col className="order-md-1" md="6">
                                <div className="pr-md-5">
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
                                                    <h5 className="display-5 mb-0">
                                                        Language
                                                    </h5>
                                                </div>
                                            </div>
                                            <h6 className="mb-3 ml-5">
                                                HTML5, CSS3, JavaScript, Java, PHP
                                            </h6>
                                        </li>
                                        <li className="py-2"></li>
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
                                                    <h5 className="mb-0">Framework / Library</h5>
                                                </div>
                                            </div>
                                            <h6 className="mb-3 ml-5">
                                                Node.js, EJS(Template Engine), BootStrap
                                            </h6>
                                        </li>
                                        <li className="py-2"></li>
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
                                                    <h5 className="mb-0">
                                                        Database
                                                    </h5>
                                                </div>
                                            </div>
                                            <h6 className="mb-3 ml-5">
                                                MySQL 8.0.17
                                            </h6>
                                        </li>
                                        <li className="py-2"></li>
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
                                                    <h5 className="mb-0">
                                                        Tool
                                                    </h5>
                                                </div>
                                            </div>
                                            <h6 className="mb-3 ml-5">
                                                Visual Studio Code, MySQL Workbench, Arduino Sketch, Android Studio
                                            </h6>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col className="order-md-2" md="6">
                                <div className="pr-md-5">
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
                                                    <h5 className="mb-0">
                                                        HW
                                                    </h5>
                                                </div>
                                            </div>
                                            <h6 className="mb-3 ml-5">
                                                Arduino Uno, ESP-8266(WIFI), RC-522(RFID), SPC-A1200MB(Camera)
                                            </h6>
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
                                                    <h5 className="mb-0">Sensor</h5>
                                                </div>
                                            </div>
                                            <h6 className="mb-3 ml-5">
                                                PM2008(미세먼지), DHT11(온습도)
                                            </h6>
                                        </li>
                                        <li className="py-2"></li>
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
                                                    <h5 className="mb-0">
                                                        API
                                                    </h5>
                                                </div>
                                            </div>
                                            <h6 className="mb-3 ml-5">
                                                네이버 이이디로 로그인, 카카오 아이디로 로그인, 도로명 주소 API
                                            </h6>
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
                                                    <h5 className="mb-0">
                                                        ETC
                                                    </h5>
                                                </div>
                                            </div>
                                            <h6 className="mb-3 ml-5">
                                                Git, Source Tree
                                            </h6>
                                        </li>
                                        <li className="py-2"></li>
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

export default Skill;

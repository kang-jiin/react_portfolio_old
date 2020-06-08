import React from "react";

import {
    Container,
    Row,
    Col
} from "reactstrap";

class DataBase extends React.Component {
    render() {
        return (
            <>
                <section className="section bg-secondary" id="database">
                    <Container className="my-5">
                        <Row className="row-grid align-items-center">
                            <Col md="8">
                                <img
                                    alt="..."
                                    className="img-fluid floating"
                                    src={require("assets/img/kdkd/kdkd_erd.png")}
                                />
                            </Col>
                            <Col md="4">
                                <div className="pl-md-5">
                                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-4">
                                        <i className="fa fa-database " />
                                    </div>
                                    <h4 className="display-3 mb-3">Database ERD</h4>
                                    <h6 className="">- 사용자</h6>
                                    <h6 className="">- 학생</h6>
                                    <h6 className="">- 학부모-학생 관계</h6>
                                    <h6 className="">- 등하원</h6>
                                    <h6 className="">- 알림장</h6>
                                    <h6 className="">- 게시판</h6>
                                    <h6 className="">- 게사판 댓글</h6>
                                    <h6 className="">- 채팅 로그</h6>
                                    <h6 className="">- 앨범</h6>
                                    <h6 className="">- 앨범 댓글</h6>
                                    <h6 className="">- 내부 환경</h6>
                                    <h6 className="">- 일정</h6>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default DataBase;
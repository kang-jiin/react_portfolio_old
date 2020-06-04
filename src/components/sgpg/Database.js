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
                    <Container>
                        <Row className="row-grid align-items-center">
                            <Col md="8">
                                <img
                                    alt="..."
                                    className="img-fluid floating"
                                    src={require("assets/img/sgpg/4989_erd.png")}
                                />
                            </Col>
                            <Col md="4">
                                <div className="pl-md-5">
                                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-4">
                                        <i className="fa fa-database " />
                                    </div>
                                    <h4 className="display-3 mb-3">Database ERD</h4>
                                    <h6 className="">- users : 사용자 정보</h6>
                                    <h6 className="">- item : 물품 정보</h6>
                                    <h6 className="">- img : 물품 사진</h6>
                                    <h6 className="">- bid : 입찰 로그</h6>
                                    <h6 className="">- comments : 댓글</h6>
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
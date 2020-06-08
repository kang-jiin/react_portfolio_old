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
                                    src={require("assets/img/football/DB_ERD.PNG")}
                                />
                            </Col>
                            <Col md="4">
                                <div className="pl-md-5">
                                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-4">
                                        <i className="fa fa-database " />
                                    </div>
                                    <h4 className="display-3 mb-3">Database ERD</h4>
                                    <h6 className="">- users : 사용자</h6>
                                    <h6 className="">- post : 공고</h6>
                                    <h6 className="">- apply : 신청</h6>
                                    <h6 className="">- evaluation : 평점</h6>
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
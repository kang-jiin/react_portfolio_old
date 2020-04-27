import React, { Component } from "react";

import {
    Button
} from "reactstrap";

class ScrollTop extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var scrollComponent = this;
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <div className="scroll-top">
                <div onClick={() => this.scrollToTop()}>
                    <Button
                        className="btn-1 btn-icon"
                        color="primary"
                    >
                        <span className="btn-inner--icon">
                            <i className="fa fa-angle-double-up mr-2" />
                        </span>
                        <span className="nav-link-inner--text ml-1">
                            Top
                        </span>
                    </Button>
                </div>
            </div>
        );
    }
}

export default ScrollTop;

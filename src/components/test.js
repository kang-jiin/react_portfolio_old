import React from "react";

class Test extends React.Component {
    state = {};
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <li className="py-2">
                <div className="d-flex align-items-center">
                    <div>
                        <Badge
                            className="badge-circle mr-3"
                            color="info"
                        >
                            <i className="ni ni-satisfied" />
                        </Badge>
                    </div>
                    <div>
                        <h6 className="text-white mb-0">아이에게 RFID Key가 들어간 인형 부여</h6>
                    </div>
                </div>
            </li>
        )
    }
}
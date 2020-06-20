import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class AboutMe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text1:" ",
      text2:" "
    }
  };

  componentDidMount() {
    let i =0;

    const typing = setInterval(() =>{
      const typed1 = this.state.text1;
      const typed2 = this.state.text2;
      const finalText1= "Kang Ji In";
      const finalText2= "Web PortFolio";

      if(i<finalText1.length) { 
        this.setState ({
          text1: typed1 + finalText1[i]
        });
        i++
      } 
      else if(i<finalText1.length+finalText2.length) { 
        this.setState ({
          text2: typed2 + finalText2[i-finalText1.length]
        });
        i++
      }
      else {
        clearInterval(typing);
      }
    },150);
  }

  render() {
    return (
      <>
        <div className="position-relative" id="aboutme">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-primary">
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
                  <Col className="text-center">
                    <div className="" id="h" style={{height:'200px'}}>
                      <h1 className="display-1 text-white">{this.state.text1}</h1>
                      <h1 className="display-1 text-white">{this.state.text2}</h1>
                    </div>
                    <h3 className="display-3 lead text-white mt-5">
                    {/* Full Stack Developer를 꿈꾸는<br/> */}
                    강지인의 포트폴리오입니다.
                    </h3>
                    <h3 className="display-3 lead text-white mb-8">
                      dmssk13@gmail.com
                    </h3>
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

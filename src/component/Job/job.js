import React, { useContext } from 'react';
import background from '../../../src/assets/images/hero2.jpg';
import { ThemeContext } from '../context/theme';
import { Row, Col, Container, Card, Button, Modal } from 'react-bootstrap';

const Job = (props) => {
    const themeContext = useContext(ThemeContext);
    return (
        <div id="Job-description" style={{ background: `linear-gradient(${themeContext.mode},rgba(0,0,0,0.5)),url(${background})` }}>
            <div className="header-title">
                <i class="fas fa-bookmark"></i><span>Skills</span>
                <div id="skills">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={4}>
                                <div className="skill" >
                                    <i class="fab fa-html5" ></i>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                <div className="skill" >
                                    <i class="fab fa-css3-alt"></i>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                <div className="skill" >

                                    <i class="fab fa-js-square"></i>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                <div className="skill" >
                                <i class="fab fa-react" ></i>
                                </div>

                            </Col>
                            
                            <Col xs={12} sm={12} md={4}>
                                <div className="skill">
                                    <i class="fab fa-node-js" ></i>
                                </div>

                            </Col>
                            <Col xs={12} sm={12} md={4}>
                                <div className="skill">
                                <i class="fab fa-php"></i>
                                                      </div>

                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>

        </div>

    )
}
export default Job;
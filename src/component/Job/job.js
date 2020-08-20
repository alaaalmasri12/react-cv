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
                            <Col xs={6} sm={6} md={4}>
                                <div className="skill" >
                                    <i class="fab fa-html5" style={{ color: themeContext.mode }}></i>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={4}>
                                <div className="skill" >
                                    <i class="fab fa-css3-alt" style={{ color: themeContext.mode }}></i>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={4}>
                                <div className="skill" >

                                    <i class="fab fa-js-square" style={{ color: themeContext.mode }}></i>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={4}>
                                <div className="skill" >
                                <i class="fab fa-react" style={{ color: themeContext.mode }}></i>
                                </div>

                            </Col>
                            
                            <Col xs={6} sm={6} md={4}>
                                <div className="skill">
                                    <i class="fab fa-node-js" style={{ color: themeContext.mode }}></i>
                                </div>

                            </Col>
                            <Col xs={6} sm={6} md={4}>
                                <div className="skill">
                                <i class="fas fa-code"style={{ color: themeContext.mode }}></i>
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
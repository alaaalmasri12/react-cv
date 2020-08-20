import React from 'react';
import { Row, Col, Container, Card, Button, Modal } from 'react-bootstrap';
const Pitch = (props) => {
    return (
        <div id="pitch">
            <Container>
                <Row>
                    <Col xs={6} sm={6} md={4}>
                        <div id="About-me">
                            <h3><i class="fas fa-user"></i>About me</h3>
                            <p>
                                I am a passionate Full Stack Developer who has been doing projects for more than 9 Months now

                                You have an idea, you need someone to bring it ot life Or you already have a product that needs to be redesign to meet the demand of 2020 users This is where i come in! With my knowledge and creativity I can take your idea, your product to the next level
                </p>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={4}>
                        <div className="jop-position">
                            <h3><i class="fas fa-building"></i>Internship</h3>
                            <h5>Drupal Developer</h5>
                            <div className="compeny-location">
                                <ul>
                                    <li><i class="fas fa-building"></i><span>Fikra Bussines Soloutions</span></li>
                                    <li><i class="fas fa-clock"></i><span>10/2020 - 01/2020 </span></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={4}>
                        <h3><i class="fas fa-graduation-cap"></i>Education</h3>
                        <div className="education">

                            <h5>Advanced Software Development</h5>
                            <ul>
                                <li><i class="fas fa-building"><span>Abdul Aziz Al Ghurair School of Advanced
                                Computing (ASAC)
</span></i></li>
                                <li><i class="fas fa-clock"><span>01/2020 - 08/2020, Jordan,Amman</span></i></li>
                            </ul>
                            <h5>Computer Information System </h5>
                            <ul>
                                <li><i class="fas fa-building"><span>Al-Albayt-University
                               
</span></i></li>
                                <li><i class="fas fa-clock"><span>01/2020 - 08/2020, Jordan,Amman</span></i></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default Pitch
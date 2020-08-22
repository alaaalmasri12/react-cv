import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hero.scss';
import User from '../../assets/images/alaa.png';
import background from '../../assets/images/hero2.jpg';
import Fade from 'react-reveal/Fade';
import { Container, Form, Nav, Navbar,Modal } from 'react-bootstrap';
import { ThemeContext } from '../context/theme';
class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ show: false });
    }

    navhandlerClick = (e) => {
       
        this.setState({ show: !this.state.show });
        document.getElementById("sidenav").classList.toggle('sidenav-expand');
        document.querySelector(".background-options-box").classList.toggle('sidenav-expand-left');
    }
    handleClose = (e) => {
        this.setState({ show:false });
    }
    handleShow = (e) => {
        this.setState({ show:true });
    }


    render() {
        return (
            <ThemeContext.Consumer>
                {themeContext => (
                    <section id="home" className="hero-background" style={{ background: `linear-gradient(${themeContext.mode}, #9198e5),url(${background})` }}>
                        <div className="background-options-box">
                            <p onClick={this.navhandlerClick}>Options</p>
                        </div>
                        <Fade left when={this.state.show} duration={500}>
                            <div id="sidenav">
                                <div className="colors">
                                    <h5>COLOR VARIANT</h5>
                                    <Form>
                                        <ul>
                                            <li><Form.Check onClick={themeContext.toggle}
                                                type="radio" className="red color"
                                                name="color" value="rgb(255,0,0,0.8)"
                                            />
                                            </li>
                                            <li><Form.Check onClick={themeContext.toggle}
                                                type="radio" className="pruple color"
                                                name="color" value="rgb(148,0,211,0.8)"
                                            />
                                            </li>
                                            <li><Form.Check onClick={themeContext.toggle}
                                                type="radio" className="skyblue color"
                                                name="color" value="rgba(52.9% , 80.8% ,92.2%,0.8) "
                                            />
                                            </li>
                                            <li><Form.Check onClick={themeContext.toggle}
                                                type="radio" className="green color"
                                                name="color" value="rgb(0,225,0,0.8)"
                                            />
                                            </li>
                                        </ul>
                                    </Form>

                                </div>
                            </div>
                        </Fade>
                        
                        <div className="main-navbar" style={{ backgroundColor: `${themeContext.mode}` }}>
                            <Container>

                                <Navbar style={{ backgroundColor: `${themeContext.mode}` }} expand="lg">
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="m-auto" >
                                            <Nav.Link className="scroll" href="#home" style={{ color: `${this.state.color}` }}><li><i className="fa fa-home"></i></li></Nav.Link>
                                            <Nav.Link className="scroll" href="#Portfolio"><li id="Portfolio">Portfolio</li></Nav.Link>
                                            <Nav.Link className="scroll" href="#testomnials"><li>Reviews</li></Nav.Link>
                                            <Nav.Link className="scroll" href="#pitch"><li>About</li></Nav.Link>
                                            <Nav.Link className="scroll" href="#Job-description"><li>Skills</li></Nav.Link>
                                            <Nav.Link className="scroll" href="#Contact"><li>Contact</li></Nav.Link>
                                            <Nav.Link className="scroll" onClick={this.handleShow}><li>Ai Questions</li></Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                                <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{textAlign:'center',color:'#000'}}>Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul style={{listStyleType:'none', color:"#000"}}>
                <li>Q1) Who is this preson </li>
                <li>Q2) What technologies used in this site </li>

            </ul>
        </Modal.Body>
      
      </Modal>

                            </Container>
                        </div>
                        <div id="cv-user-section">
                            <div className="user-hero-image">
                                <img src={User} alt="user-image" />
                            </div>
                            <div className="cv-username">
                                <h1>Ala'a Almasri</h1>
                            </div>
                            <div className="user-job-position">
                                <h5>Fullstack Softwre Developer</h5>
                            </div>
                            <div className="social-media">
                                <ul>
                                    <li>

                                        <a href="https://github.com/alaaalmasri12" target="_blank"> <i class="fab fa-github"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/alaa-masri/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.hackerrank.com/alaaalmasri272" target="_blank">  <i class="fab fa-hackerrank"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default Hero;
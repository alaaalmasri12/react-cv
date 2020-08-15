import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hero.scss';
import User from '../../assets/images/alaa.png';
import background from '../../assets/images/hero2.jpg';

import Fade from 'react-reveal/Fade';
import { Container, Form, Nav, Navbar} from 'react-bootstrap';

class Hero extends React.Component {
        constructor(props) {
            super(props);
            this.state = ({ color: 'rgba(0, 0, 0,0)',show:false});
        }
    navhandlerClick = (e) => {
        this.setState({ show: !this.state.show });
        console.log('hello');
        document.getElementById("sidenav").classList.toggle('sidenav-expand');
        document.querySelector(".background-options-box").classList.toggle('sidenav-expand-left');
        }
        handelcolor = (e) => {
            console.log('enter');
           let colorpalate=e.target.value;
           this.setState({color:colorpalate})
            }
    render() {
        return (
            
            <section className="hero-background" style={{background: `linear-gradient(${this.state.color}, #9198e5),url(${background})` }}>
                <div className="background-options-box">
                    <p onClick={this.navhandlerClick}>Options</p>

                </div>
                <Fade left when={this.state.show} duration={500}>
                <div id="sidenav">
                    <div className="colors">
                    <h5>COLOR VARIANT</h5>
                    <Form>
                    <ul>
                   <li><Form.Check onClick={this.handelcolor}
          type="radio" className="red"
          name="color" value="rgb(255,0,0,0.8)"
        />
        </li> 
        <li><Form.Check onClick={this.handelcolor}
          type="radio" className="pruple"
          name="color" value="rgb(148,0,211,0.8)"
        />
        </li> 
        <li><Form.Check onClick={this.handelcolor}
          type="radio" className="skyblue"
          name="color" value="rgba(52.9% , 80.8% ,92.2%,0.5) "
        />
        </li>
        <li><Form.Check onClick={this.handelcolor}
          type="radio" className="green"
          name="color" value="rgb(0,225,0,0.8)"
        />
        </li>
        </ul>
</Form>
                      
                    </div>
                </div>
                </Fade>
                <div className="main-navbar">
                    <Container>
                        <Navbar>
                            <Nav className="m-auto">
                                <Nav.Link href="#home"><li><i className="fa fa-home"></i></li></Nav.Link>
                                <Nav.Link href="#features"><li>Portfolio</li></Nav.Link>
                                <Nav.Link href="#pricing"><li>Reviews</li></Nav.Link>
                                <Nav.Link href="#pricing"><li>About</li></Nav.Link>
                                <Nav.Link href="#pricing"><li>Services</li></Nav.Link>
                                <Nav.Link href="#pricing"><li>Contact</li></Nav.Link>
                            </Nav>
                        </Navbar>
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
        )
    }
}

export default Hero;
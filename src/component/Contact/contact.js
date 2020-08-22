import React, { useContext, useState } from 'react';
import { Row, Col, Container, Card, Button, Modal } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

import background from '../../../src/assets/images/hero2.jpg';
import { connect } from 'react-redux';
import { contact } from '../../store/userreview';
import { ThemeContext } from '../context/theme';
const Swal = require('sweetalert2')
const Contact = (props) => {

    const [contact, setContact] = useState({});

    const hundlesubmit = async (e) => {
        setContact({ [e.target.name]: e.target.value });
        console.log(contact);
        e.preventDefault();
        await props.contact(contact);
        
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your message  has been sended i will Contact u soon',
            showConfirmButton: false,
            timer: 1500
          })
    }

    
    const setdata = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
        console.log(contact);
    }
    const themeContext = useContext(ThemeContext);
    return (
        <div id="Contact" style={{ background: `linear-gradient(${themeContext.mode},rgba(0,0,0,0.5)),url(${background})` }}>
            <div className="information">
                <h5>Want to Discuss A Job?</h5>
                <p>Just Drop A Message Below And I'll Get in Touch</p>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={4}>
                            <div className="mail">
                                <i class="fas fa-envelope"></i>
                                <h5>Qureis</h5>
                                <p>Alaaalmasri272@gmail.com</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="phone">
                                <i class="fa fa-mobile" aria-hidden="true"></i>
                                <h5>Call me</h5>
                                <p>+96782233721</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="home">
                                <i class="fa fa-home" aria-hidden="true"></i>
                                <h5>Location</h5>
                                <p>Amman,Swalieh,abdon Ghanem street</p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="contact">
                <form  action='/contact' method="POST"onSubmit={hundlesubmit}  id="form">
                    <TextField type="text" placeholder="your first name" label="First Name" name="firstname" onChange={setdata} />
                    <TextField  label="Last Name" type="text" placeholder="your Last name" name="lastname" onChange={setdata} />
                    <br />
                    <TextField label="Email" type="email" placeholder="Your e-mail" name="email" onChange={setdata} />
                    <TextField  label="Phone" type="tel" placeholder="Your Phone" name="phone" onChange={setdata} />
                    <br />
                    <TextField  className="message" label="Message" name="message" rows="3" placeholder="Message" onChange={setdata} />
                    <br />
                    <div className='send-msg-btn'>
                        <Button type="submit" class="contact-btn">Send Message</Button>
                    </div>
                </form>
                <br />
            </div>

        </div>
    )
}
const mapStateToProps = state => ({
    reviews: state.reivews
});

const mapDispatchToProps = { contact };

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
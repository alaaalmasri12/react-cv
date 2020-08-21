import React, { useContext, useState } from 'react';
import { Row, Col, Container, Card, Button, Modal } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

import background from '../../../src/assets/images/hero2.jpg';
import { connect } from 'react-redux';
import { contact } from '../../store/userreview';
import { ThemeContext } from '../context/theme';
const Swal = require('sweetalert2')
const Contact = (props) => {

    const [contact, setContact] = useState({

    });

    const hundlesubmit = async (e) => {
        setContact({ [e.target.name]: e.target.value });
        e.preventDefault();
        await props.contact(contact);
        
        console.log(contact);
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
    }
    const themeContext = useContext(ThemeContext);
    return (
        <div id="Contact" style={{ background: `linear-gradient(${themeContext.mode},rgba(0,0,0,0.5)),url(${background})` }}>
            <div className="information">
                <h5>Want to Discuss A Job?</h5>
                <p>Just Drop A Message Below And I'll Get in Touch</p>
                <Container>
                    <Row>
                        <Col xs={6} sm={6} md={4}>
                            <div className="mail">
                                <i class="fas fa-envelope"></i>
                                <h5>Qureis</h5>
                                <p>Alaaalmasri272@gmail.com</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={4}>
                            <div className="phone">
                                <i class="fa fa-mobile" aria-hidden="true"></i>
                                <h5>Call me</h5>
                                <p>+96782233721</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={6} md={4}>
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
                <form onSubmit={hundlesubmit} method="POST" id="form">
                    <TextField type="text" placeholder="your first name" id="standard-basic" label="First Name" name="firstname" onChange={setdata} />
                    <TextField id="standard-basic" label="Last Name" type="text" placeholder="your Last name" name="lastname" onChange={setdata} />
                    <br />
                    <TextField id="standard-basic" label="Email" type="email" placeholder="Your e-mail" name="email" onChange={setdata} />
                    <TextField id="standard-basic" label="Phone" type="tel" placeholder="Your Phone" name="phone" onChange={setdata} />
                    <br />
                    <TextField id="standard-basic" className="message" label="Message" name="message" rows="3" placeholder="Message" onChange={setdata} />
                    <br />
                    <div className='send-msg-btn'>
                        <Button type="submit" class="contact-btn">Send Message</Button>
                    </div>
                </form>
            </div>

        </div>
    )
}
const mapStateToProps = state => ({
    reviews: state.reivews
});

const mapDispatchToProps = { contact };

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
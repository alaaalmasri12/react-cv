import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import { Row, Col, Container, Card, Button, Modal } from 'react-bootstrap';
class Portolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show2: true,
        }
    }
    handleShow = (e) => {
        this.setState({ show: !this.state.show })
    }
    handleClose = (e) => {
        this.setState({ show: !this.state.show })
    }
    handelrender = (e) => {
        this.setState({ show2: false })

    }
    render() {
        return (
            <React.Fragment>
                <div className="portfolio-box">
                    <Container>
                        <div className="toggle">
                            {this.state.show2 === true ? <Link to='/'><Button id="Projects">Projects</Button></Link> : <Link to='/projects'><Button id="Projects">Projects</Button></Link>}
                            <Link to="/videos"><Button id="Gallery" onClick={this.handelrender}>Video Gallery</Button></Link>
                        </div>
                        <div className="projects">

                            <Row>
                                {this.state.show2 === true ? <Route path='/'>

                                    {Object.keys(this.props.results).map((key, idx) => {
                                        return (
                                            <Col xs={6} sm={6} md={4}>
                                                <Slide top>
                                                    <Card style={{ width: '17rem', height: '380px' }}>
                                                        <Card.Img onClick={this.handleShow} src={this.props.results[key].image} />
                                                        <Card.Body>
                                                            <Card.Title>{this.props.results[key].website}</Card.Title>
                                                            <Card.Text>
                                                                {this.props.results[key].description}
                                                            </Card.Text>
                                                            <div className="site-btn">
                                                                <a href={this.props.results[key].link} target="_blank">Go to site</a>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>

                                                </Slide>
                                            </Col>

                                        );


                                    })
                                    }
                                </Route>
                                    : <Route path='/projects'>

                                        {Object.keys(this.props.results).map((key, idx) => {
                                            return (
                                                <Col xs={6} sm={6} md={4}>
                                                    <Slide top>
                                                        <Card style={{ width: '17rem', height: '380px' }}>
                                                            <Card.Img onClick={this.handleShow} src={this.props.results[key].image} />
                                                            <Card.Body>
                                                                <Card.Title>{this.props.results[key].website}</Card.Title>
                                                                <Card.Text>
                                                                    {this.props.results[key].description}
                                                                </Card.Text>
                                                                <div className="site-btn">
                                                                    <a href={this.props.results[key].link} target="_blank">Go to site</a>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>

                                                    </Slide>
                                                </Col>

                                            );


                                        })
                                        }

                                    </Route>
                                }
                            </Row>
                        </div>
                        <Route path='/videos'>
                            <div id="video-gallery" >
                                <Row>

                                    {Object.keys(this.props.results).map((key, idx) => {
                                        return (
                                            <Col xs={6} sm={6} md={6}>
                                                <Slide top>

                                                    <div className="video">
                                                        < iframe width="350" height="315" className="video-gallery"
                                                            src={this.props.results[key].video}>
                                                        </iframe>
                                                    </div>
                                                </Slide>
                                            </Col>
                                        );
                                    })
                                    }
                                </Row>
                            </div>
                        </Route>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}
export default Portolio;
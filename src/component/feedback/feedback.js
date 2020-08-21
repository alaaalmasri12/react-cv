import React from 'react';
import { Row, Col, Container, Card, Button, Modal, Form } from 'react-bootstrap';
import { IconButton, InputAdornment, FormControl, Input, TextField, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addreivew} from '../../store/userreview';
import { ThemeContext } from '../context/theme';
const Swal = require('sweetalert2')
class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: '',
            image: '',
            review: ''
        }

    }
    handelSubmit = async (e) => {
        e.preventDefault()
        await this.props.addreivew(this.state);
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your review has been added to the slider',
            showConfirmButton: false,
            timer: 1500
          })
    };
    handleChange = (event) =>{
        if (event.target.files && event.target.files[0]) {
            //////////////////////////////
            let image = document.getElementById('uploadImage');
            // Check if any file is selected. 
            if (image.files.length > 0) {
              for (let i = 0; i <= image.files.length - 1; i++) {
    
                const fsize = image.files.item(i).size;
                const file = Math.round((fsize / 1024));
                // The size of the file. 
                if (file >= 100) {
                  alert(
                    "File must be lest 100 kb");
                }
              }
            }
            let reader = new FileReader();
            reader.onload = (e) => {
          this.setState({image: e.target.result});
        }
            reader.readAsDataURL(event.target.files[0]);
    }
}
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    setdata = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <ThemeContext.Consumer>
            {themeContext => (
            <div id="Feedback">
                <h5>Give me Your Feedback?</h5>
                <i class="fas fa-thumbs-up"></i><span> I am available for hire</span>
                <br />
                <div className="feedback-btn">
                    <Button variant="primary" onClick={this.handleShow}>
                        Send Feedback
      </Button>

                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header style={{backgroundColor:`${themeContext.mode}`}}  closeButton>
                        <Modal.Title>Feed Back</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form method="post" className="signup-form" onSubmit={this.handelSubmit}>
                            <TextField id="standard-basic" label="Standard" className="standard-textarea" id="name"
                                label="Username"
                                placeholder="username"
                                name='name' onChange={this.setdata} />
                            <br />
                            <input
                    accept="image/*"
                     name="photo"
                    onChange={this.handleChange}
                    id='uploadImage'
                    multiple
                    type="file"
                  />
                  <label htmlFor="uploadImage" id="signup-profile-label">
                  Profile Picture
                  <br/>
                    <Button variant="contained" style={{ color: '#fff' }} color="primary" component="span">
                      Upload 
       		 </Button>
                </label>

                            

                            <TextField id="standard-basic" label="Standard" className="standard-textarea"
                                label="review" id="reivew"
                                placeholder="username" name='review' onChange={this.setdata} />
                            <br />
                            <div className="feedback-submision">
                                <Button type="submit" onClick={this.handleClose}><i class="fas fa-paper-plane"></i></Button>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
        </ThemeContext.Consumer>
        )
    }
}
const mapStateToProps = state => ({
    reviews: state.reivews
});

const mapDispatchToProps = { addreivew};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
import React, { useContext } from 'react';
import background from '../../../src/assets/images/hero2.jpg';
import { ThemeContext } from '../context/theme';
import { Carousel } from 'react-bootstrap';
const Testmonial = (props) => {
    const themeContext = useContext(ThemeContext);
    return (
        <>
            <div id="testomnials" style={{ background: `linear-gradient(${themeContext.mode},rgba(0,0,0,0.5)),url(${background})` }}>
                <Carousel>
                    {Object.keys(props.results).map((key, idx) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={props.results[key].image}
                                />
                                <Carousel.Caption>
                                    <h5>{props.results[key].review}</h5>
                                    <p>{props.results[key].name}</p>
                                </Carousel.Caption>

                            </Carousel.Item>
                        )
                    })

                    }
                </Carousel>

            </div>

        </>
    )

}
export default Testmonial;
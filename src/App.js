import React, { useEffect, useState } from 'react';
import Hero from '../src/component/hero/hero.js';
import './smacss/base.scss';
import './smacss/layout.scss';
import './smacss/modules.scss';
import './smacss/state.scss';
import './smacss/theme.scss';
import Portfolio from '../src/component/portfolio/portfolio';
import Testmonial from '../src/component/testmonials/testmonials';
import ThemeContext from './component/context/theme';
import Job from './component/Job/job';
import Pitch from './component/pitch/pitch';
import Feedback from '../src/component/feedback/feedback';
import Contact from '../src/component/Contact/contact';
function App(props) {

  const [portfolio, setPortfolio] = useState([]);
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    async function display() {
      let raw = await fetch('https://alaacv-backend.herokuapp.com/portfolio');
      let data = await raw.json();
      setPortfolio(data);

    }
    display();
  }, []);
  useEffect(() => {
    async function display2() {
      let raw2 = await fetch('https://alaacv-backend.herokuapp.com/portfolio');
      let data2 = await raw2.json();
      setReview(data2);
    }
    display2();
  }, []);

  return (

    <React.Fragment>
      <ThemeContext>
        <Hero results={portfolio} />
        <Portfolio results={portfolio} />
        <Testmonial results={reviews} />
        <Pitch />
        <Job />
        <Feedback />
        <Contact />
      </ThemeContext>
    </React.Fragment>
  );
}
export default App;

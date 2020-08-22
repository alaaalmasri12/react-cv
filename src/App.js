import React, { useEffect, useState } from 'react';
import Hero from '../src/component/hero/hero.js';
import './smacss/base.scss';
import './smacss/layout.scss';
import './smacss/modules.scss';
import './smacss/state.scss';
import './smacss/theme.scss';
import AlanBtn from '@alan-ai/alan-sdk-web';
import Portfolio from '../src/component/portfolio/portfolio';
import Testmonial from '../src/component/testmonials/testmonials';
import ThemeContext from './component/context/theme';
import Job from './component/Job/job';
import Pitch from './component/pitch/pitch';
import Feedback from '../src/component/feedback/feedback';
import Contact from '../src/component/Contact/contact';
const alankey='029c0a81ccd428a163fd97e9a2a0b5752e956eca572e1d8b807a3e2338fdd0dc/stage';
function App(props) {
 
  const [portfolio, setPortfolio] = useState([]);
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    AlanBtn(
      {
        key:alankey,
        onCommand:({command})=>{
          if(command ==='display project')
          {
          alert('heyyyyyyyy');
          }
        }
      },
      []
    )
    async function display() {
      let raw = await fetch('https://alaacv-backend.herokuapp.com/portfolio');
      let data = await raw.json();
      setPortfolio(data);
    }
    display();
  }, []);
  useEffect(() => {
     async function display2() {
      let raw2 =  await fetch('https://alaacv-backend.herokuapp.com/review');
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

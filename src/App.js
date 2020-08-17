import React,{useEffect,useState} from 'react';
import Hero from '../src/component/hero/hero.js';
import './smacss/base.scss';
import './smacss/layout.scss';
import './smacss/modules.scss';
import './smacss/state.scss';
import './smacss/theme.scss';
import Portfolio from '../src/component/portfolio/portfolio';
import Testmonial from '../src/component/testmonials/testmonials';
function App() {

  const [portfolio,setPortfolio]=useState([]);
  useEffect(() => {
    async function  display()
    {
      let raw = await fetch('https://alaacv-backend.herokuapp.com/api/v1/portfolio/');
      let data = await raw.json();
      
      setPortfolio(data);
  }
  display();
  },[]);

  return (
    
   <React.Fragment>
    

     <Hero results={portfolio} />
     <Portfolio results={portfolio} />
     <Testmonial flag={true} />
   </React.Fragment>
  );
}
export default App;

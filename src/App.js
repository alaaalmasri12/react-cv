import React from 'react';
import Hero from '../src/component/hero/hero.js';
import './smacss/base.scss';
import './smacss/layout.scss';
import './smacss/modules.scss';
import './smacss/state.scss';
import './smacss/theme.scss';

function App() {
  return (
   <React.Fragment>
     <Hero />
   </React.Fragment>
  );
}

export default App;

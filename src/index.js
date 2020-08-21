import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import store from './store';

class Main extends React.Component {
  render() {
    return(
      <BrowserRouter>
      {console.log('alaaaaaaa',store)}
      <Provider store={store}>
      <App />
     </Provider>
     </BrowserRouter>
    )
   
  }
}
const root=document.getElementById("root");
ReactDOM.render(<Main />,root);
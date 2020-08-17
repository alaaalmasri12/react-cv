import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return(
      <BrowserRouter>
      <App />
     </BrowserRouter>
    )
   
  }
}
const root=document.getElementById("root");
ReactDOM.render(<Main />,root);
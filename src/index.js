import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/*import CardList from './CardList';*/
import 'tachyons';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { robots } from './robots'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); //return data about web use that can be used to make a better software experiencez

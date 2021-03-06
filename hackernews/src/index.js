import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example1 from './Example1';
import Clock from './Clock';
import LoginControl from './LoginControl';

//ReactDOM.render(

//<React.StrictMode>
//  <Clock />
// </React.StrictMode>,
// document.getElementById('root')
//);

function tick() {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

if (module.hot) {
  module.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

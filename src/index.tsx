import React from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle} from 'styled-components';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const Global = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Arial';
  }

  @media (max-width: 650px) {
    * {
    font-size: 10px;
    }
  }

 



`;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

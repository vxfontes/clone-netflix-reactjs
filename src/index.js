import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/app.css';
import reportWebVitals from './reportWebVitals';
import HomeExemplo from './archive/exemplo-filmes';


import Home from "./pages/home";
import Login from './pages/login';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <Login /> */}

    {/* exemplo anterior de como funciona o basico do react na aula
    <HomeExemplo /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

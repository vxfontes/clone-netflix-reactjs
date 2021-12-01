import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/app.css';
import reportWebVitals from './reportWebVitals';
import Rotas from './routes';
import Login from './pages/login';
import Home from './pages/home';


ReactDOM.render(
  <React.StrictMode>

    {/* <Rotas/> */}
    <Login/>
    {/* <Home/> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

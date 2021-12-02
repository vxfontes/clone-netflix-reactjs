import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/app.css';
import Rotas from './routes';
import Login from './pages/login';
import Home from './pages/home';


ReactDOM.render(
  <React.StrictMode>

    {/* <Rotas/> */}
    {/* <Login/> */}
    <Home/>

  </React.StrictMode>,
  document.getElementById('root')
);
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Home from "./pages/home";
import Login from "./pages/login";
import HomeExemplo from "./archive/exemplo-filmes";

const Rotas = () => {
    return (
        <>
            {/* é quem permite que trabalhamos com rotas -> pai */}
            <Router>
                {/* faz com que mostre somente uma rota de cada vez */}
                <Routes>
                    {/* determina as rotas em si */}
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/basico-react" component={HomeExemplo} />
                </Routes>
            </Router>
        </>
    );
};

export default Rotas;
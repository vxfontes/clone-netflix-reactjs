import React, { useState, useEffect } from "react";
import ModalSeries from "../../components/ModalSeries";
import Header from '../../components/Header';
import Hero from "../../components/Hero";
import Sessao from "../../components/Sessao";


const Home = () => {


    return (
        <>
            <ModalSeries/>
            <div className="container-fluid">
                <Header/>
            </div>
            <Hero/>
            <div id="main-content">
                <Sessao/>
                <Sessao/>
                <Sessao/>
                <Sessao/>
                <Sessao/>
            </div>
        </>
    );
}

export default Home;
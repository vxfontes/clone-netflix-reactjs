import React, { useState, useEffect } from "react";
import ModalSeries from "../../components/ModalSeries";
import Header from '../../components/Header';
import Hero from "../../components/Hero";
import Sessao from "../../components/Sessao";
import api from "../../services/api";


const Home = () => {
    const [principal, setPrincipal] = useState({});
    const [sessoes, setSessoes] = useState([]);

    const getHome = async () => {
        try {
            const response = await api.get('/home');
            const res = response.data;

            if (res.error) {
                alert(res.message);
                return false;
            }

            setPrincipal(res.principal);
            setSessoes(res.sessoes);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getHome();
    }, []);

    return (
        <>
            <ModalSeries />
            <div className="container-fluid">
                <Header />
            </div>
            <Hero filme={principal}/>
            <div id="main-content">
                {sessoes.map((sessao) => <Sessao sessao={sessao} />)}
            </div>
        </>
    );
}

export default Home;
import React from "react";
import top10 from "../../assets/badge-top-10.png"

const Hero = ({ filme }) => {
    return (
        <div id="hero" className="container-fluid" style={{
            backgroundImage:`url(${filme.capa})`
        }}>
            <div className="container">
                <div className="row" id="hero_infos">
                    <div className="col-6">
                        <img className="logo" src={filme.logo} alt="titulo principal" />
                        <h1 className="text-white">
                            <img src={top10} alt="top 10 simbolo"/> Top 1 de hoje no Brasil.
                        </h1>
                        <p className="text-white">{filme.descricao?.substr(0, 200)}...</p>
                        <br />
                        <button className="btn btn-lg btn-custom-white">
                            <span className="mdi mdi-play"></span> Assistir
                        </button>
                        <button className="btn btn-lg btn-custom-translucent">
                            <span className="mdi mdi-information-outline"></span> Mais Informações
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
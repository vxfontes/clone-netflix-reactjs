import React from "react";
import Filme from "../Filme";

const Sessao = ({sessao}) => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-white">{sessao[0]?.generos[0]}</h5>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <ul className="filme_lista">
                    {sessao.map((filme) => <Filme filme={filme}/>)}
                </ul>
            </div>
        </section>
    );
}

export default Sessao;
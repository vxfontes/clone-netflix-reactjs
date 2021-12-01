import React from "react";
import Filme from "../Filme";

const Sessao = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-white">Populares da Netflix</h5>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <ul className="filme_lista">
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                    <Filme />
                </ul>
            </div>
        </section>
    );
}

export default Sessao;
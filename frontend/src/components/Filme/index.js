import React from "react";

const Filme = ({ filme }) => {

    const selectFilme = () => {
        const event = new CustomEvent('selectFilme', {
            detail: filme,
        });

        window.dispatchEvent(event);
    }

    return (
        <li className="filme" data-toggle="modal" data-target="#modal-filme" onClick={selectFilme}>
            <img className="img-fluid" src={filme.thumb} alt="capa principal" />
            <div className="filme_info">
                <div className="col-12">
                    <a href="#" className="btn-custom-round btn btn-light rounded-circle">
                        <span className="mdi mdi-play"></span>
                    </a>
                    <a href="#" className="btn-custom-round border-white btn rounded-circle opacity-50">
                        <span className="mdi mdi-thumb-up text-white"></span>
                    </a>
                    <a href="#" className="btn-custom-round border-white btn rounded-circle opacity-50">
                        <span className="mdi mdi-thumb-down text-white"></span>
                    </a>
                    <a href="#" className="btn-custom-round border-white btn rounded-circle opacity-50">
                        <span className="mdi mdi-plus text-white"></span>
                    </a>
                </div>
                <p>T3:EP5 <text>"Meu Episódeo"</text></p>
            </div>
        </li>
    );
}

export default Filme;
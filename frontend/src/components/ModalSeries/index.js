import React, { useEffect, useState } from "react";
import api from '../../services/api';

//img
import Episodio from "../Episodio";


const ModalSeries = () => {

    const [filme, setFilme] = useState({});
    const [episodios, setEpisodios] = useState([]);

    const selectFilmeListener = () => {
        window.addEventListener('selectFilme', (data) => {
            setFilme(data.detail);
        });
    };

    const getEpisodios = async (temporada_id) => {
        try {
            const response = await api.get(`/episodios/temporada/${temporada_id}`);
            const res = response.data;

            if (res.error) {
                alert(res.message);
                return false;
            }

            setEpisodios(res.episodios);
        } catch (err) {
            alert(err.message);
        }
    };

    useEffect(() => {
        selectFilmeListener();
    }, []);

    useEffect(() => {
        if (filme.tipo == 'serie') {
            getEpisodios(filme.temporadas[0]?._id);
        }
    }, [filme]);

    return (
        <div className="modal fade" id="modal-filme">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-hero" style={{ backgroundImage: `url(${filme.capa})` }}>
                        <img src={filme.logo} />
                        <div className="col-12 modal-hero-infos pl-0">
                            <button className="btn btn-lg btn-custom-white">
                                <span className="mdi mdi-play"></span> Assistir
                            </button>
                            <a href="#" className="btn-custom-round btn btn-lg btn-light rounded-circle">
                                <span className="mdi mdi-play"></span>
                            </a>
                            <a href="#" className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50" >
                                <span className="mdi mdi-thumb-up text-white"></span>
                            </a>
                            <a href="#" className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50" >
                                <span className="mdi mdi-thumb-down text-white"></span>
                            </a>
                        </div>
                    </div>
                    <div className="modal-infos">
                        <div className="container">
                            <div className="row">
                                <div className="col-7">
                                    <p className="filme_descricao">{filme.descricao}</p>
                                </div>
                                <div className="col-5">
                                    <p className="filme_elenco">
                                        Elenco:{' '} <text>{filme.elenco?.join(', ')}</text>
                                        <br />
                                        <br />
                                        Gêneros: <text>{filme.generos?.join(', ')}</text>
                                        <br />
                                        <br />
                                        Cenas e momentos: {' '}
                                        <text>{filme.cenas_momentos?.join(', ')}</text>
                                    </p>
                                </div>
                            </div>

                            {filme.tipo == 'serie' && (
                                <>
                                    <br />
                                    {filme.temporadas?.length > 0 && (
                                        <>
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="text-white">Episódios</h3>
                                                </div>
                                                <div className="col-5 text-right">
                                                    <select onChange={(e) => {
                                                        getEpisodios(e.target.value);
                                                    }} className="form-control" >
                                                        {filme.temporadas?.map((temporada) => (
                                                            <option value={temporada._id}>
                                                                {temporada.titulo}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row">
                                                <ul id="lista_episodios">
                                                    {episodios.map((episodio) => (
                                                        <Episodio episodio={episodio} />
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                    {filme.temporadas?.length == 0 && (
                                        <>
                                            <h3 classNameName="text-center text-white mb-50">
                                                Nenhuma temporada disponível
                                            </h3>
                                            <br />
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalSeries;
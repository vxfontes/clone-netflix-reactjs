import React from 'react';

const Episodio = ({ episodio }) => {
    return (
        <li>
            <div className="row">
                <div className="col-1 my-auto text-center">
                    <h3 className="text-white">{episodio.numero}</h3>
                </div>
                <div className="col-4">
                    <img className="img-fluid" src={episodio.capa} />
                </div>
                <div className="col-7">
                    <h6 className="text-white">{episodio.titulo}</h6>
                    <p className="text-muted">{episodio.descricao}</p>
                </div>
            </div>
        </li>
    );
};

export default Episodio;

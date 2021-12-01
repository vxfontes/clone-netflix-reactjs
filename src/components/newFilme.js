import React from "react";
import './newFilme.css';

const Filme = (props) => {

    const mostrarFilme = () => {
        alert(props.getFilme.nome);
    };

    return (
        <tr>
            <td>{props.getFilme.nome}</td>
            <td>{props.getFilme.categoria}</td>
            <td>{props.getFilme.ano}</td>
            <td className="alignEnd">
                <button className="btn btn-info" onClick={mostrarFilme}>Informações</button> {' '}
                <button className="btn btn-danger">Excluir</button>
            </td>
        </tr>
    );
}

export default Filme;
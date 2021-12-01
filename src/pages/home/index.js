import React, { useState, useEffect } from "react";
import Filme from "../../components/newFilme";

const Home = () => {

    // lista de filmes
    const [filmes, setFilmes] = useState([]);
    //objeto que recebe os dados de cada filme inserido
    const [filme, setFilme] = useState({});

    const cadastrar = () => {
        // coloca o novo filme encima e depois pega toda a lista de filmes que ja existe
        setFilmes([filme, ...filmes])
    }

    useEffect(() => {
        console.log("Página carregou");
    }, []);

    return (
        <div className="container">
            <h1>Lista de filmes</h1>
            <br />

            <div className="jumbotron container-fluid">
                <div className='row'>
                    <div className="col-4">
                        <label>Nome</label>
                        <input type='text' className="form-control" placeholder="nome do filme" onChange={(e) => setFilme({
                            //pegando o que ja tem dentro do filme e atualizando apenas o nome (array de objetos)
                            ...filme,
                            nome: e.target.value
                        })} />
                    </div>
                    <div className="col-4">
                        <label>Categoria</label>
                        <select className="form-control"onChange={(e) => setFilme({
                            ...filme,
                            categoria: e.target.value
                        })}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label>Ano</label>
                        <input type='number' className="form-control" placeholder="ano do filme" onChange={(e) => setFilme({
                            ...filme,
                            ano: e.target.value
                        })}/>
                    </div>
                </div>
                <br />
                <button className="btn btn-success btn-lg btn-block" onClick={cadastrar}>Cadastrar</button>
            </div>

            <br />

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Ano</th>
                        <th scope="col" className="text-right">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {filmes.map(filme => (
                        <Filme getFilme={filme} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
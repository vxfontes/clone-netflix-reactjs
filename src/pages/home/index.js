import React from "react";
import Filme from "../../components/newFilme";

const Home = () => {

    const listaFilmes = [
        { nome: 'Filme 1', ano: 2020, categoria: 'Terror' },
        { nome: 'Filme 2', ano: 2021, categoria: 'Infantil' },
        { nome: 'Filme 3', ano: 2020, categoria: 'Animação' },
        { nome: 'Filme 4', ano: 2022, categoria: 'Ação' },
        { nome: 'Filme 5', ano: 2021, categoria: 'Comédia' },
    ];

    return (
        <div className="container">
            <br/>
            <h1>Lista Filmes</h1>
            <br/>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Ano</th>
                        <th scope="col" className="text-end">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listaFilmes.map(filme => (
                        <Filme getFilme={filme} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
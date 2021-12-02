<div align="center" id="top">
  <img width="90%" height="90%" src="https://github.com/vxfontes/clone-netflix-reactjs/blob/main/frontend/src/assets/project/project.gif">
  &#xa0;
</div>

<h1 align="center">Clone da Netflix usando Reactjs</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/vxfontes/clone-netflix-reactjs?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/vxfontes/clone-netflix-reactjs?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/vxfontes/clone-netflix-reactjs?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/vxfontes/clone-netflix-reactjs?color=56BEB8">
</p>

<hr> 

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#sparkles-características">Características</a> &#xa0; | &#xa0;
  <a href="#robot-telas">Telas</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requisitos">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-iniciando">Iniciando</a> &#xa0; | &#xa0;
  <a href="https://github.com/vxfontes" target="_blank">Autora</a>
</p>

<br>

## :dart: Sobre ##

- Tela de login com alguns usuários cadastrados, para testar utilize:
  ``` bash
  usuario: juliana@teste.com
  senha: 123
  ```
- Função de logout
- Após ser logado, o usuario é automaticamente redirecionado para a página home
- Página home exibe um filme principal, e gera aleatoriamente todas as colunas, colocando o nome da categoria do primeiro filme da linha
- Todos os filmes abrem com um pop-up, mas as séries exibem as temporadas e os episódios cadastrados
- Possui CRUD, sendo possível utilizar rotas de get, post, put e delete para manipular o banco de dados

<div align="center" style="display: inline_block">
  <img align="center" src="https://github.com/vxfontes/clone-netflix-reactjs/blob/main/frontend/src/assets/project/login.png" width="45%" height="45%">
  <img align="center" src="https://github.com/vxfontes/clone-netflix-reactjs/blob/main/frontend/src/assets/project/pagina-inicial.png" width="45%" height="45%">
</div>

## :sparkles: Características ##

:heavy_check_mark: Bootstrap;\
:heavy_check_mark: Axios;\
:heavy_check_mark: React-router-dom;\
:heavy_check_mark: Body-parser;\
:heavy_check_mark: Cors;\
:heavy_check_mark: Express;\
:heavy_check_mark: Mongoose;\
:heavy_check_mark: Morgan;\
:heavy_check_mark: Underscore;

## :robot: Telas ##
<h5>Tela home</h5>

<div align="center" style="display: inline_block">
  <img align="center" src="https://github.com/vxfontes/clone-netflix-reactjs/blob/main/frontend/src/assets/project/pagina-inicial.png" width="30%" height="30%">
  <img align="center" src="https://github.com/vxfontes/clone-netflix-reactjs/blob/main/frontend/src/assets/project/pagina-inicial2.png" width="30%" height="30%">
  <img align="center" width="30%" height="30%" src="https://github.com/vxfontes/clone-netflix-reactjs/blob/main/frontend/src/assets/project/pagina-inicial2.png">
</div>


<h5>Exibindo filmes e series</h5>

<div align="center" style="display: inline_block">
  <img width="30%" height="30%" src="https://github.com/vxfontes/clone-netflix-reactjs/blob/main/frontend/src/assets/project/pagina-filme.png">
  <img width="30%" height="30%" src="https://github.com/vxfontes/clone-netflix-reactjs/blob/main/frontend/src/assets/project/pagina-serie.png">
  <img width="30%" height="30%" src="https://github.com/vxfontes/clone-netflix-reactjs/blob/main/frontend/src/assets/project/pagina-serie2.png">
</div>

## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [JavaScript](https://www.javascript.com/)
- [MongoDB](https://www.mongodb.com/)

## :white_check_mark: Requisitos ##

Antes de iniciar o projeto :checkered_flag:, você precisa ter o [Git](https://git-scm.com), o [Node](https://nodejs.org/en/) e o [MongoDB](https://www.mongodb.com/) instalados.

## :checkered_flag: Iniciando ##

- Baixando projeto
```bash
# Clone o projeto
$ git clone https://github.com/vxfontes/clone-netflix-reactjs

# Acesse
$ cd clone-netflix-reactjs
```

- Iniciando backend
```bash
# Acesse
$ cd backend

# Instale as dependencias
$ yarn install

# Inicie o backend
$ yarn start

# O servidor será inicializado em <http://localhost:8080>
```

- Iniciando frontend
```bash
# Acesse
$ cd frontend

# Instale as dependencias
$ yarn install

# Inicie o backend
$ yarn start

# O servidor será inicializado em <http://localhost:3000>
```

- Para adicionar os itens no servidor do mongo, rode na seguinte ordem:
``` bash
# Adicionar os usuarios
$ node addUsers.js

# Adicionar os filmes
$ node addFilmes.js

# Adicionar os episódios e temporadas
$ node addTemporadasEpisodios.js

```


Made with :heart: by <a href="https://github.com/vxfontes" target="_blank">Vanessa Fontes</a>

&#xa0;

<a href="#top">Back to top</a> -->

import React from "react";
import logo from '../../assets/logo.png';
import Header from "../../components/Header";

const Login = () => {


    return (
        <div className="container-fluid bg_filmes" style={{
            position:"fixed",
            height: '100%',
        }}>
                {/* <img src={logo} alt="logo netflix"/> */}
            <Header hideMenu={true} />
            <div id="caixa_login" className="col-4 offset-4">
                <h1 className="text-white">Entrar</h1>
                <br />
                <form>
                    <input type="email" className="form-control form-control-lg" placeholder="Email ou número de telefone" />
                    <br />
                    <input type="password" className="form-control form-control-lg" placeholder="Senha" />
                    <br />
                    <button className="btn btn-lg btn-block btn-danger">Entrar</button>
                    <div className="row mt-4">
                        <div className="col text-muted">
                            <input type="checkbox" /> Lembrar de mim.
                        </div>
                        <div className="col text-right">
                            <a href="#" className="text-muted">Precisa de ajuda?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
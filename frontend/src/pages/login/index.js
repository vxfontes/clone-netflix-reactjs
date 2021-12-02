import React, { useState } from "react";
import Header from "../../components/Header";
import api from '../../services/api';


const Login = () => {

    const [credenciais, setCredencias] = useState({
        email: '',
        senha: ''
    });

    const login = async () => {
        try {
            console.log("entrei no try ")
            const response = await api.post('/usuario/login', credenciais);
            const res = response.data;

            if (res.error) {
                console.log("entrei no if do erro ")
                alert(res.message);
                return false;
            }

            // guardar usuario no browser
            localStorage.setItem('@user', JSON.stringify(res.usuario));
            console.log("armazenei usuario")
            // redirecionar o usuario
            alert("Você foi logado");
            window.location.reload();
            console.log("dei reload")

        } catch (err) {
            console.log("to no catch")
            alert(err.message);
        }
    }

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
                    <input type="email" className="form-control form-control-lg" placeholder="Email ou número de telefone" onChange={(e) => {
                        setCredencias({
                            ...credenciais,
                            email: e.target.value,
                        })
                    }}/>
                    <br />
                    <input type="password" className="form-control form-control-lg" placeholder="Senha" onChange={(e) => {
                        setCredencias({
                            ...credenciais,
                            senha: e.target.value,
                        })
                    }}/>
                    <br />
                    <button className="btn btn-lg btn-block btn-danger" onClick={login}>Entrar</button>
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
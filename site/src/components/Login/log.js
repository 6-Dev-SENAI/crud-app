import React from "react";
import "../Login/log.css";

const telaLogin = (props) => {
  const {
    func,
    email: { email, setEmail },
    password: { password, setPassword },
  } = props;

  return (
    <div
      className="containerGeral d-flex p-2 flex-row
    d-flex justify-content-center"
    >
      <div class="w-25 p-3">
        <p className="titulo text-uppercase">Login</p>
        <div class="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Insira seu E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1"></label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Insira sua Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div className="spaceButton">
          <button onClick={func} class="btn btn-primary w-100 p-1">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default telaLogin;

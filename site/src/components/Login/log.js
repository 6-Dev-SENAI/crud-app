import React from "react";
import "../Login/log.css";

const telaLogin = () => {

  
  
    return (
    <div className="containerGeral d-flex p-2 flex-row
    d-flex justify-content-center">
      <form class="w-25 p-3">
        <p className="titulo text-uppercase">Login</p>
        <div class="form-group">
          <label for="exampleInputEmail1"></label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Insira seu E-mail"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1"></label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Insira sua Senha"
          ></input>
        </div>
        <div className="spaceButton">
        <button type="submit" class="btn btn-primary w-100 p-1">
          Entrar
        </button>
        </div>
      </form>
    </div>
  );
};

export default telaLogin;

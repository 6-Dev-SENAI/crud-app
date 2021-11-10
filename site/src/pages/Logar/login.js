import React from "react";
import Cabecalho from "../../components/Cabecalho";
import Login from "../../components/Login/log";
import Rodape from "../../components/Rodape";
import "../Home/home.css";
import "../Logar/login.css";

const Logar = () => {
  return (
    <div>
      <Cabecalho>
        {" "}
        <p className="titulo text-uppercase ">
          <ins>LOGIN</ins>
        </p>
      </Cabecalho>
      <div className="posicaoAlt">
        <Login />
      </div>
      <div className="fotfot fixed-bottom">
        <Rodape />
      </div>
    </div>
  );
};

export default Logar;

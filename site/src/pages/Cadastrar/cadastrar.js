import React from "react";
import Cabecalho from "../../components/Cabecalho";
import ConteudoForms from "../../components/ConteudoForms/conteudo";
import Rodape from "../../components/Rodape/index";
import "../Home/home.css";
import "../Altern/alterar.css";

const Cadastrar = () => {
  return (
    <div>
      <Cabecalho>
        <p className="titulo text-uppercase">
        <ins>Cadastrar</ins></p>
      </Cabecalho>
      <div className="posicaoAlt">
        <ConteudoForms />
      </div>
      <div className="fotfot fixed-bottom">
        <Rodape />
      </div>
    </div>
  );
};

export default Cadastrar;

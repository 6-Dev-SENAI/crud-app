import React from "react";
import Cabecalho from "../../components/Cabecalho";
import ConteudoForms from "../../components/ConteudoForms/conteudo"
import Rodape from "../../components/Rodape";
import "../Home/home.css";
import "../Altern/alterar.css";

const pgAlterar = () => {
  return (
    <div>
      <Cabecalho>
      <p className="titulo text-uppercase">
        <ins>Alterar</ins></p>
      </Cabecalho>

      <div className="posicaoAlt">
        <ConteudoForms/>
      </div>

      <div className="fotfot fixed-bottom">
        <Rodape />
      </div>
    </div>
  );
};

export default pgAlterar;

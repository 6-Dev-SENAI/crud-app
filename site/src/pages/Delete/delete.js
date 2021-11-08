import React from "react";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import "../Home/home.css";
import ConteudoForms from "../../components/ConteudoForms/conteudo";
import "../Delete/delete.css"

const Deletar = () => {
  return (
    <div>
      <Cabecalho>
        <p className="titulo text-uppercase">
          <ins>Deletar</ins>
        </p>
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

export default Deletar;

import React from "react";
import Cabecalho from "../../components/Cabecalho";
import Alterar from "../../components/Alterar";
import Rodape from "../../components/Rodape";
import "../Home/home.css";
import "../Altern/alterar.css";

const pgAlterar = () => {
  return (
    <div>
      <Cabecalho>
        <p className="titulo text-uppercase">
          <ins>Alternar</ins>
        </p>
      </Cabecalho>

      <div className="posicaoAlt">
        <Alterar />
      </div>

      <div className="fotfot fixed-bottom">
        <Rodape />
      </div>
    </div>
  );
};

export default pgAlterar;

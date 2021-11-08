import React from "react";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import "../Home/home.css";
import Conteudo from "../../components/Centro/centro";


const Home = () => {
  return (
    <div className="container-home">
      <Cabecalho>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Nome para pesquisa"
            aria-label="Nome para pesquisa"
            aria-describedby="basic-addon2"
            maxLength="100"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-warning .text-dark" type="button">
              Pesquisar
            </button>
          </div>
        </div>
      </Cabecalho>

      <Conteudo />
      <div className="fotfot fixed-bottom" >
        <Rodape />
      </div>
    </div>
  );
};

export default Home;

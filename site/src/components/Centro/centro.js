import React from "react";
import "./centro.css";

const Conteudo = () => {
  return (
    <div className="geralTabela">
      <table className="table table-dark  flex-column">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Idade</th>
            <th scope="col">Sexo</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">#</th>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>
              <button type="button" class="btn btn-primary">
                Alterar
              </button>{" "}
              |{" "}
              <button type="button" class="btn btn-danger">
                Deletar
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">#</th>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>
              {" "}
              <button type="button" class="btn btn-primary">
                Alterar
              </button>{" "}
              |{" "}
              <button type="button" class="btn btn-danger">
                Deletar
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">#</th>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>
              {" "}
              <button type="button" class="btn btn-primary">
                Alterar
              </button>{" "}
              |{" "}
              <button type="button" class="btn btn-danger">
                Deletar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Conteudo;

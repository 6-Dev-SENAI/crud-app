import React from "react";
import { Link } from "react-router-dom";
import "./centro.css";

const Conteudo = (props) => {
  const { users, token } = props;

  return (
    <div className="geralTabela">
      <table className="table table-dark  flex-column">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Idade</th>
            <th scope="col">Sexo</th>
            <th scope="col">Email</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td># {index + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.sex === "M" ? "Masculino" : "Feminino"}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/alterar/${user.id}`}
                  state={{ user, token }}
                  class="btn btn-primary"
                >
                  Alterar
                </Link>{" "}
                |{" "}
                <Link
                  to={`/deletar/${user.id}`}
                  state={{ user, token }}
                  class="btn btn-danger"
                >
                  Deletar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Conteudo;

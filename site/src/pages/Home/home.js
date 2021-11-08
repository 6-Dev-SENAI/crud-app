import React, { useCallback, useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import "../Home/home.css";
import Conteudo from "../../components/Centro/centro";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Service from "../../service/userService.js";
const api = new Service();

const Home = () => {
  const [name, setName] = useState("");

  const [users, setUsers] = useState([]);

  const loadInfo = useCallback(async () => {
    try {
      const resp = await api.listUsers(name);
      setUsers([...resp]);
    } catch (error) {
      setUsers([]);
      let err;
      if (!error) err = { code: 0, message: "" };
      else err = error.response.data;
      if (err.code === 404) toast.error(err.message);
      else if (err.code === 400) toast.warning(err.message);
      else toast.warning("Ocorreu um erro desconhecido, tente novamente.");
    }
  }, [name]);

  useEffect(() => {
    loadInfo();
  }, [name, loadInfo]);

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
            onChange={(event) => setName(event.target.value)}
          />
          <div class="input-group-append">
            <Link to="/cadastrar" class="btn btn-outline-warning .text-dark">
              Cadastrar Usuário
            </Link>
          </div>
        </div>
      </Cabecalho>

      <Conteudo users={users} />

      <div className="fotfot fixed-bottom">
        <Rodape />
      </div>
    </div>
  );
};

export default Home;
